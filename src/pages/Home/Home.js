import React, { useState }  from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

const Home = ({ setGameStarted }) => {
    return (
      <section className='home background'>
        <Container>
          <Row>
            <Col>
              <div className='home-control'>
                <div style={{ maxWidth: '320px', margin: 'auto' }}>
                  <div className='info'>
                    <p className='text-light'>
                      Seja bem-vindo ao Show do Milhão! Este projeto foi desenvolvido por{' '}
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/lucasvoltera'>
                        Lucas Voltera
                      </a>{' '}
                      e{' '}
                      <a target='_blank' rel='noopener noreferrer' href='https://github.com/becelli'>
                        Gustavo Becelli
                      </a>{' '}
                      para a disciplina de FPGA.
                    </p>
                  </div>
                  <button onClick={() => setGameStarted(true)} className='btn'>
                    Começar
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Home;
  