import { Question } from "~/data/questions/question";
import { QuestionDifficulty } from "~/data/questions/question-difficulty";

export const computerArchitectureQuestions: Question[] = [
  {
    predicate: "O que é um circuito digital?",
    answers: [
      "Um circuito que opera com sinais analógicos",
      "Um circuito que opera com sinais digitais",
      "Um circuito que opera com sinais contínuos",
      "Um circuito que opera com sinais discretos",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 2,
  },
  {
    predicate: "Qual sistema numérico é mais comumente usado em circuitos digitais?",
    answers: ["Sistema decimal", "Sistema binário", "Sistema hexadecimal", "Sistema octal"],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 2,
  },
  {
    predicate: 'O que é um "gate" (porta) lógico em circuitos digitais?',
    answers: [
      "Um dispositivo para fazer cálculos de números com ponto flutuante",
      "Um componente para converter sinais digitais em analógicos",
      "Um dispositivo que executa uma operação lógica",
      "Um tipo de bateria",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 3,
  },
  {
    predicate: 'Qual é o resultado da operação "AND" quando se os operandos forem respectivamente 1 e 0?',
    answers: ["1", "0", "Depende dos valores dos operandos", "2"],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 2,
  },
  {
    predicate: 'Qual é o resultado da operação "OU EXCLUSIVO" (XOR) quando ambos os operandos são iguais?',
    answers: ["1", "0", "Depende dos valores dos operandos", "2"],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 2,
  },
  {
    predicate: "O que é um flip-flop em circuitos digitais?",
    answers: [
      "Um dispositivo de memória que armazena um único bit de informação",
      "Um dispositivo usado para criar ondas quadradas",
      "Um tipo de transístor",
      "Um dispositivo para gerar sinais analógicos",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 1,
  },
  {
    predicate: "Qual é a função principal de um codificador em circuitos digitais?",
    answers: [
      "Compactar dados para ocupar menos espaço.",
      "Ajustar a corrente para fazer o circuito sorrir",
      "Codificar Informações",
      "Fazer malabarismos com sinais analógicos",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 3,
  },
  {
    predicate: 'O que representa o termo "clock" (relógio) em circuitos digitais?',
    answers: [
      "Um dispositivo que transforma sinais analógicos em emojis digitais",
      "Um componente usado para sincronizar operações em circuitos",
      "Um tipo de bateria",
      "Um tipo de memória",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 2,
  },
  {
    predicate: "Qual é a unidade de medida padrão para representar a frequência do clock em circuitos digitais",
    answers: ["Megabytes", "Hertz", "Watts", "Volts"],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 2,
  },
  {
    predicate: "O que é a Unidade Central de Processamento (CPU) em um computador?",
    answers: [
      "A parte do computador responsável pela execução de instruções e processamento de dados.",
      "A parte do computador onde os dispositivos de entrada são conectados.",
      "A memória principal do computador.",
      "A placa gráfica do computador.",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 1,
  },
  {
    predicate: "Qual é a principal função da Memória RAM em um computador?",
    answers: [
      "Armazenar dados e instruções temporariamente para que o CPU possa acessá-los rapidamente.",
      "Armazenar permanentemente os dados do sistema e do usuário.",
      "Controlar todas as operações do computador.",
      "Processar gráficos e imagens no computador.",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 1,
  },
  {
    predicate: "O que é um barramento de sistema em Arquitetura de Computadores?",
    answers: [
      "Um dispositivo usado para converter sinais digitais em analógicos.",
      "Uma unidade especializada em processar gráficos e imagens.",
      "A parte do processador que coordena e controla a execução de instruções.",
      "Um conjunto de linhas de comunicação que permitem a transferência de dados entre os componentes do computador.",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 4,
  },
  {
    predicate: "O que é um bit em termos de Arquitetura de Computadores?",
    answers: [
      "Uma unidade de medida de velocidade do processador.",
      "Um emoji.",
      "A unidade mais básica de informação, representando um dígito binário (0 ou 1).",
      "Uma unidade de frequência do clock.",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 3,
  },
  {
    predicate: "Qual é a função do disco rígido (HDD) em um computador?",
    answers: [
      "Controlar a execução das instruções do processador.",
      "Armazenar permanentemente os dados do sistema e do usuário, mesmo quando o computador está desligado.",
      "Exibir as informações na tela do computador.",
      "Regular o fluxo de energia no computador.",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 2,
  },
  {
    predicate: "O que é a Arquitetura de Von Neumann?",
    answers: [
      "Um modelo de arquitetura de computadores que utiliza múltiplos processadores.",
      "Um modelo de arquitetura de computadores que dispensa o uso de memória RAM.",
      "Um modelo de arquitetura de computadores que utiliza apenas dispositivos analógicos.",
      "Um modelo de arquitetura de computadores que integra a memória (dados e instruções) com o processador que realiza operações",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 4,
  },
  {
    predicate: "O que é a Unidade de Controle em um processador?",
    answers: [
      "A parte do processador que coordena e controla a execução de instruções, garantindo que todas as operações sejam realizadas no momento adequado.",
      "A parte do processador responsável por processar gráficos e imagens.",
      "A memória permanente do computador.",
      "A parte do processador que sincronizam as operações.",
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 1,
  },

  {
    predicate: "Qual é a diferença entre a Memória RAM e a Memória Cache em um computador?",
    answers: [
      "A Memória RAM é mais rápida e de acesso direto, enquanto a Memória Cache é mais lenta e de acesso aleatório.",
      "A Memória RAM é menor e mais cara, enquanto a Memória Cache é maior e mais barata.",
      "A Memória RAM é usada apenas para armazenar dados temporários, enquanto a Memória Cache é usada para armazenar dados permanentes.",
      "A Memória RAM é mais lenta e de acesso aleatório, enquanto a Memória Cache é mais rápida e de acesso direto.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 4,
  },
  {
    predicate: "O que é o pipeline de instruções em Arquitetura de Computadores?",
    answers: [
      "Uma forma avançada de memória usada para armazenar instruções do sistema operacional",
      "Um modelo de processamento que permite a execução paralela de várias instruções.",
      "Um tipo de barramento utilizado exclusivamente para transferir instruções.",
      "Um componente que controla o fluxo de dados entre a CPU e a memória principal, de forma sequencial",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 2,
  },
  {
    predicate: "Na arquitetura de 32 bits, quantos bytes são necessários para representar um endereço de memória?",
    answers: ["4 bytes", "8 bytes", "16 bytes", "32 bytes"],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 1,
  },

  {
    predicate: "Qual é o papel do Contador de Programa em um processador?",
    answers: [
      "Armazenar temporariamente os dados que estão sendo processados.",
      "Manter o endereço da próxima instrução a ser buscada na memória.",
      "Controlar a unidade de controle do processador.",
      "Gerenciar a comunicação entre a CPU e os dispositivos de entrada e saída.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 2,
  },

  {
    predicate: "O que é o ciclo Fetch-Decode-Execute em um processador?",
    answers: [
      "Um ciclo que realiza a transferência de dados entre a CPU e a memória RAM.",
      "Um ciclo de operação usado apenas em processadores com arquitetura CISC.",
      "Um ciclo que busca, decodifica e executa as instruções armazenadas na memória.",
      "Um ciclo de operação usado apenas em processadores com arquitetura RISC.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 3,
  },

  {
    predicate: "Em que consiste a arquitetura SIMD (Single Instruction, Multiple Data)?",
    answers: [
      "Uma arquitetura que utiliza um conjunto reduzido de instruções complexas.",
      "Uma arquitetura que permite a execução paralela de várias instruções.",
      "Uma arquitetura que possui múltiplos processadores executando diferentes tarefas.",
      "Uma arquitetura que permite que uma única instrução seja aplicada a múltiplos dados simultaneamente.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 4,
  },

  {
    predicate: "O que é a Unidade de Ponto Flutuante (FPU) em um processador?",
    answers: [
      "Uma unidade especializada em processar gráficos e imagens.",
      "A parte do processador responsável por armazenar os dados do sistema e do usuário.",
      "A parte do processador que coordena e controla a execução de instruções.",
      "A unidade que realiza operações matemáticas envolvendo números em formato de ponto flutuante.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 4,
  },

  {
    predicate: "O que é um multiplexador (MUX) em circuitos digitais?",
    answers: [
      "Um dispositivo usado para converter sinais analógicos em sinais digitais.",
      "Um dispositivo usado para selecionar entre várias entradas e direcionar uma delas para a saída.",
      "Um dispositivo usado para armazenar permanentemente os dados do sistema e do usuário.",
      "Um circuito que realiza operações de multiplicação em números binários.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 2,
  },
  {
    predicate: "O que caracteriza um decodificador em cirtuitos digitais",
    answers: [
      "Um dispositivo que controla a corrente em um circuito digital.",
      "Um circuito que realiza operações de contagem em números decimais.",
      "Um componente que converte sinais digitais em analógicos.",
      "Um circuito que converte códigos binários em sinais de saída correspondentes.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 4,
  },
  {
    predicate: 'Qual é a saída de uma porta "OR" se ambas as entradas forem 0 (nível lógico baixo)?',
    answers: ["1", "0", "Depende dos valores das outras portas.", "Não é possível prever."],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 2,
  },
  {
    predicate: 'Qual é a saída de uma porta "AND" se ambas as entradas forem 1 (nível lógico alto)?',
    answers: ["1", "0", "Depende dos valores das outras portas.", "Não é possível prever."],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 1,
  },
  {
    predicate: 'O que é uma porta lógica "NAND" (NOT AND)?',
    answers: [
      "Uma porta que realiza a operação OR Exclusivo (XOR) entre duas entradas.",
      "Uma porta que realiza a operação NOT Exclusivo (XNOT) em uma única entrada.",
      "Uma porta que realiza a operação AND e, em seguida, inverte o resultado.",
      "Uma porta que realiza a operação NOR e, em seguida, inverte o resultado.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 3,
  },
  {
    predicate: 'O que é uma porta lógica "XNOR" (NOR Exclusivo)?',
    answers: [
      "Uma porta que realiza a operação OR Exclusivo (XOR) e, em seguida, inverte o resultado.",
      "Uma porta que realiza a operação AND Exclusivo (XAND) entre duas entradas.",
      "Uma porta que realiza a operação NOR Exclusivo (NXOR) entre duas entradas.",
      "Uma porta que realiza a operação NOT Exclusivo (XNOT) em uma única entrada.",
    ],
    difficulty: QuestionDifficulty.medium,
    correctResponse: 1,
  },

  {
    predicate: "Pergunta: Em termos de arquitetura de processadores, o que caracteriza as unidades de tratamento de exceções?",
    answers: [
      "Unidades responsáveis por transferir dados entre a CPU e a memória.",
      "Unidades responsáveis por controlar a execução das instruções.",
      "Unidades especializadas no tratamento de eventos inesperados durante a execução.",
      "Unidades responsáveis por armazenar temporariamente os dados.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 3,
  },

  {
    predicate: "O que é o conceito de dependência de dados em instruções de um programa?",
    answers: [
      "Uma situação em que uma instrução depende dos resultados de outras instruções para ser executada.",
      "Uma técnica que utiliza dados criptografados para aumentar a segurança das informações.",
      "Uma situação em que duas instruções competem pelo mesmo recurso de hardware.",
      "Uma técnica que permite a execução de várias instruções em paralelo.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 1,
  },

  {
    predicate: "O que é o conceito de predição de saltos (branch prediction) em processadores?",
    answers: [
      "Uma técnica que prevê a quantidade de saltos que um programa vai executar.",
      "Uma técnica que prevê os endereços de memória que serão acessados.",
      "Uma técnica que prevê os resultados de operações matemáticas complexas.",
      "Uma técnica que prevê as instruções que serão executadas após um desvio condicional.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 4,
  },

  {
    predicate: "O que é a execução fora de ordem (Out-of-Order Execution) em processadores?",
    answers: [
      "Uma técnica que reordena as instruções do programa para otimizar o tempo de execução.",
      "Uma técnica que permite que o processador execute várias instruções ao mesmo tempo.",
      "Uma técnica que permite que o processador execute instruções em paralelo, sem seguir a ordem do programa.",
      "Uma técnica que executa instruções complexas fora da sequência normal de operações.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 3,
  },

  {
    predicate: "O que é o método de minimização de Karnaugh em circuitos digitais?",
    answers: [
      "Um método de simplificação de circuitos que utiliza a álgebra booleana.",
      "Um método para otimização de circuitos digitais usando técnicas estatísticas.",
      "Um método de otimização de circuitos utilizando algoritmos de aprendizado de máquina.",
      "Um método para converter sinais analógicos em sinais digitais.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 1,
  },
  {
    predicate: "O que são circuitos sequenciais em circuitos digitais?",
    answers: [
      "Circuitos que não possuem memória e processam apenas informações em tempo real.",
      "Circuitos que não utilizam sinais de clock para sincronização.",
      "Circuitos que possuem memória e utilizam informações de estados anteriores para a tomada de decisão.",
      "Circuitos que utilizam somente portas lógicas e não possuem elementos de memória.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 3,
  },
  {
    predicate: "O que é a arquitetura FPGA (Field-Programmable Gate Array)?",
    answers: [
      "Uma arquitetura que utiliza portas lógicas programáveis para a execução de operações matemáticas.",
      "Uma arquitetura que possui múltiplos processadores em paralelo.",
      "Uma arquitetura que utiliza portas lógicas em sequência para a execução de instruções.",
      "Uma arquitetura que permite a programação de suas portas lógicas pelo usuário para implementar circuitos específicos.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 4,
  },
  {
    predicate: "O que é um somador em circuitos digitais?",
    answers: [
      "Um circuito que realiza operações de adição em números binários.",
      "Um circuito que realiza operações de multiplicação em números binários.",
      "Um circuito que realiza operações de subtração em números binários.",
      "Um circuito que realiza operações de comparação entre números binários.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 1,
  },
  {
    predicate: "O que são circuitos síncronos e assíncronos em circuitos digitais?",
    answers: [
      "Circuitos que utilizam apenas sinais de clock para sincronização.",
      "Circuitos que não utilizam sinais de clock para sincronização.",
      "Circuitos que não possuem elementos de memória.",
      "Circuitos que utilizam apenas portas lógicas básicas.",
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 1,
  },
];
