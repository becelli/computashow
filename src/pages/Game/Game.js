import React, { useState, useEffect, Fragment } from 'react';

import classnames from 'classnames';
import confetti from 'canvas-confetti';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { rewardPerLevel } from '../../data/rewardsPerLevel';
import { questions } from '../../data/questionsPerLevel.js';

import './Game.css';
import logo from './logo.png';
import UnclosableModal from '../../components/UnclosableModal';

const Game = ({ setGameStarted }) => {
    // States
    const [easyQuestions, setEasyQuestions] = useState(null);
    const [averageQuestions, setAverageQuestions] = useState(null);
    const [hardQuestions, setHardQuestions] = useState(null);
  
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(0);
  
    const [beginTimer, setBeginTimer] = useState(null);
    const [beginCounter, setBeginCounter] = useState(3);
  
    const [questionTimer, setQuestionTimer] = useState(null);
    const [questionCounter, setQuestionCounter] = useState(30);
  
    const [showModal, setShowModal] = useState(false);
  
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
  
    const [correctAnswer, setCorrectAnswer] = useState(false);
  
    const [passQuestionAvailable, setPassQuestionAvailable] = useState(3);

    // Divide perguntas em faceis, medias e dificeis
    const separateQuestionsPerLevel = () => {
        const question = [...questions];
        setEasyQuestions(question.splice(0, 16)); // mudar numero
        setAverageQuestions(question.splice(0, 13));
        setHardQuestions(question.splice(0, 10));
    };

    // Seleciona pergunta aleatoria
    const getRandomQuestion = (currentLevel) => {
        const levels = [easyQuestions, averageQuestions, hardQuestions];
        const levelIndex = currentLevel < 6 ? 0 : currentLevel < 11 ? 1 : 2;
      
        const ArrayQuestions = [...levels[levelIndex]];
        const randomIndex = Math.floor(Math.random() * ArrayQuestions.length);
        const question = ArrayQuestions.splice(randomIndex, 1)[0];
      
        switch (levelIndex) {
          case 0:
            setEasyQuestions(ArrayQuestions);
            break;
          case 1:
            setAverageQuestions(ArrayQuestions);
            break;
          case 2:
            setHardQuestions(ArrayQuestions);
            break;
          default:
            break;
        }
      
        setCurrentQuestion(question);
      };
      
    // Inicia o contador do tempo do usuário
    const startQuestionTimer = () => {
        clearInterval(questionTimer);
        setQuestionCounter(30);
        setQuestionTimer(setInterval(() => setQuestionCounter((c) => c - 1), 1000));
      };
      
    // Inicia o jogo
    useEffect(() => {
        separateQuestionsPerLevel();
        setCurrentLevel(1);
        setBeginTimer(setInterval(() => setBeginCounter((c) => Math.max(c - 0.5, 0)), 1000));
      
        return () => clearInterval(beginTimer); // Clear the interval on component unmount
      }, []);

    // Para os timers se chegarem a zero
    useEffect(() => {
        if (beginCounter === 0) {
        clearInterval(beginTimer);
        getRandomQuestion(currentLevel);
        startQuestionTimer();
        }
    }, [beginCounter]);

    useEffect(() => {
        if (questionCounter === 0) {
        clearInterval(questionTimer);
        setShowModal(true);
        }
    }, [questionCounter]);

    // Passa de nivel
    const nextLevel = () => {
        if (currentLevel === 15) {
        setShowModal(true);
        setGameWon(true);
        confetti({
            particleCount: 200,
        });
        } else {
        setCurrentLevel((c) => c + 1);
        getRandomQuestion(currentLevel);
        startQuestionTimer();
        }
    };

    // Responde pergunta
    const answerQuestion = (answer) => {
        clearInterval(questionTimer);
        const isCorrectAnswer = currentQuestion.resposta === answer.toString();
        
        if (isCorrectAnswer) {
          setCorrectAnswer(true);
          setTimeout(() => {
            setCorrectAnswer(false);
            nextLevel();
          }, 1500);
        } else {
          setGameOver(true);
          setShowModal(true);
        }
      };
      
    // Pula a pergunta
    const passQuestion = () => {
        setPassQuestionAvailable((p) => p - 1);
        getRandomQuestion(currentLevel);
        startQuestionTimer();
    };

    return (
        <section className='game background'>
          <UnclosableModal
            title={
              questionCounter === 0
                ? 'Tempo esgotado'
                : gameOver
                ? 'Resposta errada'
                : gameWon
                ? 'Você ganhou!!'
                : ''
            }
            show={showModal}
            setShow={setShowModal}
          >
            <p>
              {questionCounter === 0 &&
                `Sinto muito, o seu tempo acabou. A opção certa era ${
                  currentQuestion.alternativas[parseInt(currentQuestion.resposta) - 1]
                }.`}
              {gameOver &&
                `A resposta está errada!!. A opção certa era: ${
                  currentQuestion.alternativas[parseInt(currentQuestion.resposta) - 1]
                }`}
              {gameWon && (
                <Fragment>
                  Parabéns!!! Você ganhou <strong>1 MILHÃO DE REAIS</strong>!
                </Fragment>
              )}
            </p>
            {(questionCounter === 0 || gameOver) && (
              <p>
                Você ganhou{' '}
                <strong>
                  {currentLevel === 1
                    ? '500'
                    : `${(rewardPerLevel[currentLevel] / 2).toString().slice(0, -3)} mil`}{' '}
                  reais
                </strong>
                ! Ma oeee, senta lá!
              </p>
            )}
      
            <div className='text-center mt-5'>
              <Button className='btn btn-primary' onClick={() => setGameStarted(false)}>
                Jogar novamente
              </Button>
            </div>
          </UnclosableModal>
          <div className='timer-pergunta'>{questionCounter}</div>
          <Container className='py-4'>
            <Row>
              <Col>
                <div className='game-control text-center'>
                  <img
                    src={logo}
                    alt='logo-show-do-milhao img-fluid'
                    style={{ maxWidth: '240px' }}
                  />
                  {beginCounter === 0 && (
                    <div className='contador-perguntas'>
                      <p className='text-light'>PERGUNTA NÚMERO {currentLevel}</p>
                    </div>
                  )}
                  <div className='pergunta'>
                    <p className='m-0'>
                      {beginCounter !== 0 ? beginCounter : currentQuestion && currentQuestion.pergunta}
                    </p>
                  </div>
      
                  {beginCounter === 0 && currentQuestion && (
                    <Fragment>
                      <div className='alternativas text-center'>
                        {currentQuestion.alternativas.map((alternativa, i) => (
                          <div
                            onClick={() => {
                              answerQuestion(i + 1);
                            }}
                            className={classnames('alternativa', {
                              certa: i + 1 === parseInt(currentQuestion.resposta),
                              highlight: correctAnswer,
                            })}
                            key={i}
                          >
                            <span className='numero-alternativa'>{i + 1}</span>
                            {alternativa + '     '}
                          </div>
                        ))}
                      </div>
      
                      <Row className='mt-4'>
                        <Col xs='auto' className='mx-auto'>
                          <div className='text-center opcoes'>
                            {passQuestionAvailable > 0 && (
                              <div className='opcao' onClick={passQuestion}>
                                PULAR ({passQuestionAvailable})
                              </div>
                            )}
                          </div>
                        </Col>
                      </Row>
      
                      <Row className='mt-5'>
                        <Col xs='auto' className='mx-auto'>
                          <div className='text-center projecoes'>
                            <div className='valor'>
                              {rewardPerLevel[currentLevel] / 2 === 500
                                ? '500'
                                : (rewardPerLevel[currentLevel] / 2).toString().slice(0, -3) + ' MIL'}
                            </div>
                            <p className='opcao'>ERRAR</p>
                          </div>
                          <div className='text-center projecoes'>
                            <div className='valor'>
                              {rewardPerLevel[currentLevel].toString().slice(0, -3) + ' MIL'}
                            </div>
                            <p
                              className='opcao'
                              onClick={() => {
                                if (
                                  window.confirm(
                                    `Tem certeza de que deseja parar?
                                    Você ganhará ${rewardPerLevel[currentLevel]
                                      .toString()
                                      .slice(0, -3)} mil reais.`
                                  )
                                )
                                  setGameStarted(false);
                              }}
                            >
                              PARAR
                            </p>
                          </div>
                          <div className='text-center projecoes'>
                            <div className='valor'>
                              {currentLevel < 15
                                ? rewardPerLevel[currentLevel + 1].toString().slice(0, -3) + ' MIL'
                                : '1 MILHÃO'}
                            </div>
                            <p className='opcao'>ACERTAR</p>
                          </div>
                        </Col>
                      </Row>
                    </Fragment>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    );
}

export default Game;



