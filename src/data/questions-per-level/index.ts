import { IQuestion } from "./types";

export const questions: IQuestion[] = [
  {
    question: 'O que é um circuito digital?',
    options:  ['Um circuito que opera com sinais analógicos', 'Um circuito que opera com sinais digitais', 'Um circuito que opera com sinais contínuos', 'Um circuito que opera com sinais discretos'],
    difficulty: 'Fácil',
    response: 2,
  },
  {
    question: 'Qual sistema numérico é mais comumente usado em circuitos digitais?',
    options: ['Sistema decimal', 'Sistema binário', 'Sistema hexadecimal', 'Sistema octal'],
    difficulty: 'Fácil',
    response: 2,
  },
  {
    question: 'O que é um "gate" (porta) lógico em circuitos digitais?',
    options:  ['Um dispositivo para controlar o fluxo de corrente', 'Um componente para converter sinais digitais em analógicos', 'Um dispositivo que executa uma operação lógica', 'Um tipo de bateria'],
    difficulty: 'Fácil',
    response: 3,
  },
  {
    question: 'Qual porta lógica representa a operação "E"?',
    options: ['OR', 'AND', 'NOT', 'XOR'],
    difficulty: 'Fácil',
    response: 2,
  },
  {
    question: 'Qual é o resultado da operação "OU EXCLUSIVO" (XOR) quando ambos os operandos são iguais?',
    options: ['1', '0', 'Depende dos valores dos operandos', '2'],
    difficulty: 'Fácil',
    response: 2,
  },
  {
    question: 'O que é um flip-flop em circuitos digitais?',
    options: ['Um dispositivo de memória que armazena um único bit de informação', 'Um dispositivo usado para criar ondas quadradas', 'Um tipo de transístor', 'Um dispositivo para gerar sinais analógicos'],
    difficulty: 'Fácil',
    response: 1,
  },
  {
    question: 'Qual é o objetivo do codificador em circuitos digitais?',
    options: ['Converter sinais analógicos em sinais digitais', 'Converter sinais digitais em sinais analógicos', 'Converter um conjunto de dados em um código mais simples', 'Controlar a corrente no circuito'],
    difficulty: 'Fácil',
    response: 3,
  },
  {
    question: 'O que representa o termo "clock" (relógio) em circuitos digitais?',
    options: ['Um dispositivo para medir o tempo', 'Um componente usado para sincronizar operações em circuitos', 'Um tipo de bateria', 'Um tipo de memória'],
    difficulty: 'Fácil',
    response: 2,
  },
  {
    question: 'Qual é a unidade de medida comumente usada para representar a velocidade do clock em circuitos digitais?',
    options: ['Megabytes', 'Hertz', 'Watts', 'Volts'],
    difficulty: 'Fácil',
    response: 2,
  },
  {
    question: 'O que é a Unidade Central de Processamento (CPU) em um computador?',
    options:  ['A parte do computador responsável pela execução de instruções e processamento de dados.', 'A parte do computador onde os dispositivos de entrada são conectados.', 'A memória principal do computador.', 'A placa gráfica do computador.'],
    difficulty: 'Fácil',
    response: 1,
  },
  {
    question: 'Qual é a principal função da Memória RAM em um computador?',
    options:  ['Armazenar dados e instruções temporariamente para que o CPU possa acessá-los rapidamente.', 'Armazenar permanentemente os dados do sistema e do usuário.', 'Controlar todas as operações do computador.', 'Processar gráficos e imagens no computador.'],
    difficulty: 'Fácil',
    response: 1,
  },
  {
    question: 'O que é um barramento de sistema em Arquitetura de Computadores?',
    options: ['Um dispositivo usado para converter sinais digitais em analógicos.', 'Uma unidade especializada em processar gráficos e imagens.', 'A parte do processador que coordena e controla a execução de instruções.', 'Um conjunto de linhas de comunicação que permitem a transferência de dados entre os componentes do computador.'],
    difficulty: 'Fácil',
    response: 4,
  },
  {
    question: 'O que é um bit em termos de Arquitetura de Computadores?',
    options:  ['Uma unidade de medida de velocidade do processador.', 'Um conjunto de instruções de um programa.', 'A unidade mais básica de informação, representando um dígito binário (0 ou 1).', 'Uma unidade de armazenamento de dados.'],
    difficulty: 'Fácil',
    response: 3,
  },
  {
    question: 'Qual é a função do disco rígido (HDD) em um computador?',
    options:  ['Controlar a execução das instruções do processador.', 'Armazenar permanentemente os dados do sistema e do usuário, mesmo quando o computador está desligado.', 'Exibir as informações na tela do computador.', 'Regular o fluxo de energia no computador.'],
    difficulty: 'Fácil',
    response: 2,
  },
  {
    question: 'O que é a Arquitetura de Von Neumann?',
    options: ['Um modelo de arquitetura de computadores que utiliza múltiplos processadores.', 'Um modelo de arquitetura de computadores que não utiliza memória RAM.', 'Um modelo de arquitetura de computadores que utiliza apenas dispositivos analógicos.', 'Um modelo de arquitetura de computadores que separa a memória que armazena dados e instruções do processador que realiza operações.'],
    difficulty: 'Fácil',
    response: 4,
  },
  {
    question: 'O que é a Unidade de Controle (CU) em um processador?',
    options:  ['A parte do processador que coordena e controla a execução de instruções, garantindo que todas as operações sejam realizadas no momento adequado.', 'A parte do processador responsável por processar gráficos e imagens.', 'A memória principal do computador.', 'A parte do processador que armazena dados e instruções temporariamente.'],
    difficulty: 'Fácil',
    response: 1,
  },
  
  {
    question: 'Qual é a diferença entre a Memória RAM e a Memória Cache em um computador?',
    options:  ['A Memória RAM é mais rápida e de acesso direto, enquanto a Memória Cache é mais lenta e de acesso aleatório.', 'A Memória RAM é menor e mais cara, enquanto a Memória Cache é maior e mais barata.', 'A Memória RAM é usada apenas para armazenar dados temporários, enquanto a Memória Cache é usada para armazenar dados permanentes.', 'A Memória RAM é mais lenta e de acesso aleatório, enquanto a Memória Cache é mais rápida e de acesso direto.'],
    difficulty: 'Médio',
    response: 4,
  },
  {
    question: 'O que é o pipeline de instruções em Arquitetura de Computadores?',
    options:  ['Um tipo de memória usada para armazenar instruções do sistema operacional.', 'Um modelo de processamento que permite a execução paralela de várias instruções.', 'Um tipo de barramento utilizado exclusivamente para transferir instruções.', 'Um componente que controla o fluxo de dados entre a CPU e a memória principal.'],
    difficulty: 'Médio',
    response: 2,
  },
  {
    question: 'Na arquitetura de 32 bits, quantos bytes são necessários para representar um endereço de memória?',
    options:  ['4 bytes', '8 bytes', '16 bytes', '32 bytes'],
    difficulty: 'Médio',
    response: 1,
  },

  {
    question: 'Qual é a função do Registrador de Instruções em um processador?',
    options:  ['Armazenar temporariamente os dados que estão sendo processados.', 'Armazenar as instruções que serão executadas pelo processador.', 'Controlar a unidade de controle do processador.', 'Gerenciar a comunicação entre a CPU e os dispositivos de entrada e saída.'],
    difficulty: 'Médio',
    response: 2,
  },

  {
    question: 'O que é o ciclo Fetch-Decode-Execute em um processador?',
    options:   ['Um ciclo que realiza a transferência de dados entre a CPU e a memória RAM.', 'Um ciclo de operação usado apenas em processadores com arquitetura CISC.', 'Um ciclo que busca, decodifica e executa as instruções armazenadas na memória.', 'Um ciclo de operação usado apenas em processadores com arquitetura RISC.'],
    difficulty: 'Médio',
    response: 3,
  },

  {
    question: 'Em que consiste a arquitetura SIMD (Single Instruction, Multiple Data)?',
    options:   ['Uma arquitetura que utiliza um conjunto reduzido de instruções complexas.', 'Uma arquitetura que permite a execução paralela de várias instruções.', 'Uma arquitetura que possui múltiplos processadores executando diferentes tarefas.', 'Uma arquitetura que permite que uma única instrução seja aplicada a múltiplos dados simultaneamente.'],
    difficulty: 'Médio',
    response: 4,
  },

  {
    question: 'O que é a Unidade de Ponto Flutuante (FPU) em um processador?',
    options:  ['Uma unidade especializada em processar gráficos e imagens.', 'A parte do processador responsável por armazenar os dados do sistema e do usuário.', 'A parte do processador que coordena e controla a execução de instruções.', 'A unidade que realiza operações matemáticas envolvendo números em formato de ponto flutuante.'],
    difficulty: 'Médio',
    response: 4,
  },

  {
    question: 'O que é um multiplexador (MUX) em circuitos digitais?',
    options:   ['Um dispositivo usado para converter sinais analógicos em sinais digitais.', 'Um dispositivo usado para selecionar entre várias entradas e direcionar uma delas para a saída.', 'Um dispositivo usado para armazenar permanentemente os dados do sistema e do usuário.', 'Um circuito que realiza operações de multiplicação em números binários.'],
    difficulty: 'Médio',
    response: 2,
  },
  {
    question: 'O que é um contador binário em circuitos digitais?',
    options:   ['Um circuito que conta os impulsos elétricos em um sistema analógico.', 'Um dispositivo que controla a corrente em um circuito digital.', 'Um circuito que realiza operações de contagem em números decimais.', 'Um circuito que conta em sequência em binário conforme os pulsos de clock.'],
    difficulty: 'Médio',
    response: 4,
  },
  {
    question: 'Qual é a saída de uma porta "OR" se ambas as entradas forem 0 (nível lógico baixo)?',
    options:   ['1', '0', 'Depende dos valores das outras portas.', 'Não é possível prever.'],
    difficulty: 'Médio',
    response: 2,
  },
  {
    question: 'Qual é a saída de uma porta "AND" se ambas as entradas forem 1 (nível lógico alto)?',
    options:   ['1', '0', 'Depende dos valores das outras portas.', 'Não é possível prever.'],
    difficulty: 'Médio',
    response: 1,
  },
  {
    question: 'O que é uma porta lógica "NAND" (NOT AND)?',
    options:   ['Uma porta que realiza a operação OR Exclusivo (XOR) entre duas entradas.', 'Uma porta que realiza a operação NOT Exclusivo (XNOT) em uma única entrada.', 'Uma porta que realiza a operação AND e, em seguida, inverte o resultado.', 'Uma porta que realiza a operação NOR e, em seguida, inverte o resultado.'],
    difficulty: 'Médio',
    response: 3,
  },
  {
    question: 'O que é uma porta lógica "XNOR" (NOR Exclusivo)?',
    options:   ['Uma porta que realiza a operação OR Exclusivo (XOR) e, em seguida, inverte o resultado.', 'Uma porta que realiza a operação AND Exclusivo (XAND) entre duas entradas.', 'Uma porta que realiza a operação NOR Exclusivo (NXOR) entre duas entradas.', 'Uma porta que realiza a operação NOT Exclusivo (XNOT) em uma única entrada.'],
    difficulty: 'Médio',
    response: 1,
  },


  {
    question: 'O que são as unidades funcionais de um processador?',
    options:   ['Unidades responsáveis por transferir dados entre a CPU e a memória.', 'Unidades responsáveis por controlar a execução das instruções.', 'Unidades responsáveis por processar operações matemáticas e lógicas.', 'Unidades responsáveis por armazenar temporariamente os dados.'],
    difficulty: 'Difícil',
    response: 3,
  },

  {
    question: 'O que é o conceito de dependência de dados em instruções de um programa?',
    options:  ['Uma situação em que uma instrução depende dos resultados de outras instruções para ser executada.', 'Uma técnica que utiliza dados criptografados para aumentar a segurança das informações.', 'Uma situação em que duas instruções competem pelo mesmo recurso de hardware.', 'Uma técnica que permite a execução de várias instruções em paralelo.'],
    difficulty: 'Difícil',
    response: 1,
  },

  {
    question: 'O que é o conceito de predição de saltos (branch prediction) em processadores?',
    options:   ['Uma técnica que prevê a quantidade de saltos que um programa vai executar.', 'Uma técnica que prevê os endereços de memória que serão acessados.', 'Uma técnica que prevê os resultados de operações matemáticas complexas.', 'Uma técnica que prevê as instruções que serão executadas após um desvio condicional.'],
    difficulty: 'Difícil',
    response: 4,
  },

  {
    question: 'O que é a execução fora de ordem (Out-of-Order Execution) em processadores?',
    options:   ['Uma técnica que reordena as instruções do programa para otimizar o tempo de execução.', 'Uma técnica que permite que o processador execute várias instruções ao mesmo tempo.', 'Uma técnica que permite que o processador execute instruções em paralelo, sem seguir a ordem do programa.', 'Uma técnica que executa instruções complexas fora da sequência normal de operações.'],
    difficulty: 'Difícil',
    response: 3,
  },

  {
    question: 'O que é o método de minimização de Karnaugh em circuitos digitais?',
    options:   ['Um método de simplificação de circuitos que utiliza a álgebra booleana.', 'Um método para otimização de circuitos digitais usando técnicas estatísticas.', 'Um método de otimização de circuitos utilizando algoritmos de aprendizado de máquina.', 'Um método para converter sinais analógicos em sinais digitais.'],
    difficulty: 'Difícil',
    response: 1,
  },
  {
    question: 'O que são circuitos sequenciais em circuitos digitais?',
    options:   ['Circuitos que não possuem memória e processam apenas informações em tempo real.', 'Circuitos que não utilizam sinais de clock para sincronização.', 'Circuitos que possuem memória e utilizam informações de estados anteriores para a tomada de decisão.', 'Circuitos que utilizam somente portas lógicas e não possuem elementos de memória.'],
    difficulty: 'Difícil',
    response: 3,
  },
  {
    question: 'O que é a arquitetura FPGA (Field-Programmable Gate Array)?',
    options:   ['Uma arquitetura que utiliza portas lógicas programáveis para a execução de operações matemáticas.', 'Uma arquitetura que possui múltiplos processadores em paralelo.', 'Uma arquitetura que utiliza portas lógicas em sequência para a execução de instruções.', 'Uma arquitetura que permite a programação de suas portas lógicas pelo usuário para implementar circuitos específicos.'],
    difficulty: 'Difícil',
    response: 4,
  },
  {
    question: 'O que é um somador em circuitos digitais?',
    options:   ['Um circuito que realiza operações de adição em números binários.', 'Um circuito que realiza operações de multiplicação em números binários.', 'Um circuito que realiza operações de subtração em números binários.', 'Um circuito que realiza operações de comparação entre números binários.'],
    difficulty: 'Difícil',
    response: 1,
  },
  {
    question: 'O que são circuitos síncronos e assíncronos em circuitos digitais?',
    options:    ['Circuitos que utilizam apenas sinais de clock para sincronização.', 'Circuitos que não utilizam sinais de clock para sincronização.', 'Circuitos que não possuem elementos de memória.', 'Circuitos que utilizam apenas portas lógicas básicas.'],
    difficulty: 'Difícil',
    response: 1,
  },
]