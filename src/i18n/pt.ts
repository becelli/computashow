import { QuestionDifficulty } from "~/data/questions/question-difficulty";

export const pt = {
  gameName: "ComputaShow",
  tooltips: {
    title: "Regras do Jogo",
    close: "Fechar",
    tips: [
      {
        title: "Objetivo do Jogo",
        description: "Ganhe o jogo ao acertar 15 perguntas consecutivas.",
      },
      {
        title: "Seleção de Tópicos",
        description: "Escolha tópicos de interesse no início do jogo.",
      },
      {
        title: "Opção de Encerramento",
        description: "Você pode decidir parar o jogo a qualquer momento.",
      },
      {
        title: "Uso dos 'Pulos'",
        description: 'Você tem direito a três "pulos" por jogo, que permitem reiniciar o cronômetro e trocar a pergunta atual, sem avançar de nível.',
      },
      {
        title: "Pontuação",
        description: "Os pontos são acumulados proporcionalmente ao número de perguntas acertadas.",
      },
      {
        title: "Unicidade das Respostas",
        description: "Cada pergunta tem apenas uma resposta correta.",
      },
      {
        title: "Reporte de Erros",
        description: "Se encontrar alguma resposta incorreta, por favor, reporte-a usando os links disponíveis na página inicial.",
      },
    ],
  },
  home: {
    and: "e",
    welcome: "Bem-vindo ao ComputaShow!",
    welcomeMessage: "Tá ligado no que é? É um jogo de perguntas e respostas sobre Arquitetura de Computadores e Sistemas Operacionais.",
    singlePlayer: "Bora Jogar",
    projectDevelopedBy: "Esse projeto foi feito por",
    forTheDisciplineOfFPGA: " na disciplina de FPGA.",
  },
  inGame: {
    loading: "Carregando, segura aí...",
    gameState: {
      over: "Vacilou, resposta errada!",
      won: "Zerou! Mandou bem!",
      playing: "Acabou o tempo!",
    },
    actions: {
      stop: "Parar",
      hit: "Acertar",
      miss: "Errar",
      skip: "Pular",
    },
    questionLabel: "Pergunta #",
    gameOver: {
      message: "Você fez {points} pontos! Maoeee, senta lá!",
      actions: {
        backToMainMenu: "Volta pro início",
      },
    },
    gameWon: {
      message: "Parabéns!!! Você fez {points} pontos!",
    },
  },
  topics: {
    computerArchitecture: {
      name: "Arquitetura de Computadores",
      questions: [
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
          predicate: "Em termos de arquitetura de processadores, o que caracteriza as unidades de tratamento de exceções?",
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
      ],
    },
    operatingSystems: {
      name: "Sistemas Operacionais",
      questions: [
        {
          predicate: "O que é são os drivers de dispositivos?",
          answers: ["Motoristas de ônibus", "Programas que permitem o funcionamento de um dispositivo", "Módulos de memória", "Interfaces de rede"],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "O que é um sistema operacional?",
          answers: [
            "Um programa que gerencia recursos e fornece serviços aos programas de aplicativos.",
            "Um dispositivo de hardware que armazena dados do usuário.",
            "Uma rede de computadores interconectados.",
            "Um programa de edição de texto.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "Qual é a função principal de um sistema operacional?",
          answers: [
            "Controlar e alocar recursos de hardware e fornecer serviços aos programas.",
            "Exibir imagens na tela do computador.",
            "Gerenciar o roteamento de tráfego na Internet.",
            "Realizar cálculos matemáticos complexos.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "O que é um arquivo em um sistema operacional?",
          answers: [
            "Uma unidade de processamento central do sistema.",
            "Uma interface de usuário gráfica.",
            "Uma unidade de armazenamento para dados.",
            "Um software de segurança.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: "Quais são os tipos comuns de sistemas operacionais?",
          answers: ["Windows, Mac, e Linux.", "Browsers, Antivírus, e Editores de Texto.", "Word, Excel, e PowerPoint.", "Mouse, Teclado, e Monitor."],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "O que é um processo em um sistema operacional?",
          answers: [
            "Um documento que descreve a interação do usuário com o sistema.",
            "Uma tarefa em execução, tal como um programa de processamento de texto.",
            "Uma funcionalidade de segurança.",
            "Um componente de hardware essencial.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "O que é a memória RAM em um sistema operacional?",
          answers: [
            "Um armazenamento permanente de dados do usuário.",
            "A memória utilizada para armazenar o sistema operacional.",
            "Uma memória temporária usada para armazenar dados enquanto o sistema está em execução.",
            "Um tipo de processador de gráficos.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: "O que é a interface de linha de comando (CLI) em um sistema operacional?",
          answers: [
            "Uma área de armazenamento para arquivos do sistema.",
            "Uma linguagem de programação.",
            "Uma interface gráfica de usuário.",
            "Uma interface que aceita comandos de texto para interagir com o sistema.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "O que é um sistema de arquivos em um sistema operacional?",
          answers: [
            "Uma funcionalidade de rede para transferir arquivos entre computadores.",
            "Uma pasta no sistema para arquivos temporários.",
            "Uma estrutura organizacional para armazenar e recuperar dados em um disco.",
            "Um dispositivo de hardware para armazenamento permanente.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: "O que é multitarefa em um sistema operacional?",
          answers: [
            "Um sistema que permite a execução de várias tarefas simultaneamente.",
            "Uma unidade de armazenamento em nuvem.",
            "Um método para salvar documentos automaticamente.",
            "Uma função de segurança do sistema operacional.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "Qual a função do escalonador em um sistema operacional?",
          answers: [
            "Gerenciar a memória RAM do sistema.",
            "Escolher e controlar a execução de processos.",
            "Criar backups automáticos dos arquivos.",
            "Controlar o funcionamento do disco rígido.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "O que é um sistema de arquivos FAT (File Allocation Table)?",
          answers: [
            "Um sistema de arquivos específico para armazenamento de imagens.",
            "Um sistema operacional de código aberto.",
            "Um método para criar arquivos compactados.",
            "Um tipo de sistema de arquivos usado por alguns sistemas operacionais.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "O que é a fragmentação de disco em um sistema operacional?",
          answers: [
            "Um método de criptografia de dados.",
            "Uma forma de organizar arquivos em pastas diferentes.",
            "Uma técnica para reunir todos os arquivos no mesmo local.",
            "Um processo onde arquivos são divididos em partes não contínuas no disco.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "O que são permissões de arquivo em sistemas operacionais?",
          answers: [
            "Regras que definem quem pode editar arquivos.",
            "Um tipo de criptografia para documentos importantes.",
            "Método para compactar arquivos.",
            "Uma ferramenta para limpar dados inúteis do disco rígido.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "O que é um sistema operacional de tempo real?",
          answers: [
            "Um sistema que responde a eventos dentro de um tempo definido.",
            "Um sistema que executa tarefas complexas rapidamente.",
            "Um sistema que prioriza apenas tarefas de alto consumo de CPU.",
            "Um sistema que roda aplicativos com tempos de inicialização muito rápidos.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "O que é a diferença entre sistemas operacionais de 32 bits e 64 bits?",
          answers: [
            "A quantidade de memória que o sistema pode suportar.",
            "A velocidade de processamento do sistema.",
            "A quantidade de processos que o sistema pode executar simultaneamente.",
            "A capacidade de armazenamento do disco rígido.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "O que é a paginação (paging) em sistemas operacionais?",
          answers: [
            "Um método para dividir o disco rígido em várias partições.",
            "Um método para aumentar a capacidade de armazenamento do disco rígido.",
            "Uma técnica de gerenciamento de memória virtual.",
            "Um método de compactação de arquivos do sistema.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é o processo de swapping em sistemas operacionais?",
          answers: [
            "Um método para trocar módulos do kernel do sistema operacional.",
            "Um processo para mover arquivos grandes para outra partição.",
            "Uma técnica de substituição de memória entre RAM e disco.",
            "Uma forma de compactar arquivos no disco rígido.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é a fragmentação interna em sistemas operacionais?",
          answers: [
            "Uma técnica para remover arquivos desnecessários do sistema.",
            "Uma situação em que a memória é dividida em várias partições.",
            "Uma situação em que a memória é desperdiçada devido ao tamanho fixo de alocação.",
            "Uma técnica para compactar dados no disco rígido.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é o objetivo do escalonamento de processos em sistemas operacionais?",
          answers: [
            "Reduzir o tempo de inicialização do sistema.",
            "Melhorar a velocidade de processamento da CPU.",
            "Distribuir o tempo de CPU equitativamente entre os processos.",
            "Priorizar apenas os processos de alta prioridade.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é um sistema de arquivos distribuído em sistemas operacionais?",
          answers: [
            "Um sistema que organiza arquivos por categorias.",
            "Um sistema que replica todos os arquivos para cada computador na rede.",
            "Um sistema que permite o compartilhamento de arquivos em uma rede.",
            "Um sistema que comprime arquivos para economizar espaço de armazenamento.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é um barramento (bus) em um sistema computacional?",
          answers: [
            "Uma trilha de conexão entre os discos rígidos.",
            "Uma estrada digital que transmite dados entre componentes do computador.",
            "Uma porta de comunicação em uma rede de computadores.",
            "Uma técnica de armazenamento em cache de processos frequentemente utilizados.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 2,
        },
        {
          predicate: "O que é o papel do firmware em um computador?",
          answers: [
            "Gerenciar a comunicação entre periféricos do computador.",
            "Armazenar permanentemente as configurações do sistema operacional.",
            "Controlar o comportamento e operação básica do hardware.",
            "Monitorar a integridade dos arquivos do sistema.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é a memória cache em um sistema operacional?",
          answers: [
            "Um tipo de memória principal de alta velocidade.",
            "Um tipo de memória secundária de alta capacidade.",
            "Um tipo de memória de leitura e escrita.",
            "Um tipo de memória utilizada para armazenar arquivos de sistema.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "O que é a técnica de segmentação de memória em sistemas operacionais?",
          answers: [
            "Dividir a memória em partições de tamanho variável para alocar processos.",
            "Reduzir a fragmentação interna da memória principal.",
            "Eliminar o processo de swapping para otimizar a memória.",
            "Comprimir os arquivos do sistema para economizar espaço.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "O que são os sistemas operacionais multiusuários?",
          answers: [
            "Sistemas que suportam vários dispositivos de entrada.",
            "Sistemas que permitem acesso a vários aplicativos simultaneamente.",
            "Sistemas que permitem que várias pessoas usem o computador ao mesmo tempo.",
            "Sistemas que possuem múltiplos discos rígidos para armazenamento.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "Qual é a função do algoritmo Round-Robin em escalonamento de processos?",
          answers: [
            "Priorizar processos de alta prioridade.",
            "Alocar memória de forma circular para os processos.",
            "Distribuir tempo de CPU equitativamente entre os processos.",
            "Executar os processos em intervalos regulares de tempo fixo.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é um dispositivo Plug and Play em sistemas operacionais?",
          answers: [
            "Um dispositivo que pode ser conectado e usado imediatamente, sem a necessidade de configuração manual.",
            "Um dispositivo que requer instalação manual de drivers para funcionar.",
            "Um dispositivo que pode ser conectado a qualquer porta USB.",
            "Um dispositivo que não é compatível com sistemas operacionais antigos.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "O que é o modo de kernel em sistemas operacionais?",
          answers: [
            "Um modo de operação que executa apenas aplicativos de nível do usuário.",
            "Um modo de operação que executa processos do kernel e de nível de usuário simultaneamente.",
            "Um modo de operação privilegiado que executa o núcleo do sistema operacional.",
            "Um modo de operação que prioriza tarefas de alto consumo de CPU.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "O que é a fragmentação de memória e como os sistemas operacionais lidam com ela?",
          answers: [
            "É a divisão da memória em pequenos blocos para alocar processos e os sistemas operacionais lidam com ela através de compactação.",
            "É o desperdício de memória não utilizada e os sistemas operacionais lidam com ela através da união de partições de memória.",
            "É a perda de dados na memória principal e os sistemas operacionais lidam com ela por meio de backups frequentes.",
            "É a ocupação excessiva de memória por processos e os sistemas operacionais lidam com ela por meio do algoritmo de substituição de páginas.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "Explique o conceito de swapping (trocando) em sistemas operacionais.",
          answers: [
            "É o ato de mudar entre diferentes sistemas operacionais em um único computador.",
            "É o método de transferir processos entre a memória principal e a memória secundária.",
            "É a troca de informações entre CPUs de sistemas em rede.",
            "É a prática de migrar programas para a nuvem.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "Qual é a diferença entre sistemas operacionais de 32 bits e 64 bits?",
          answers: [
            "Sistemas de 64 bits têm o dobro do desempenho dos sistemas de 32 bits.",
            "Sistemas de 32 bits são mais rápidos, mas menos estáveis que sistemas de 64 bits.",
            "Sistemas de 64 bits suportam maior quantidade de RAM e processamento de dados.",
            "Sistemas de 32 bits são mais econômicos e consomem menos energia.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
        {
          predicate: "O que é escalonamento de E/S (Entrada/Saída) em sistemas operacionais?",
          answers: [
            "É a técnica de priorização de dispositivos de E/S com base na velocidade.",
            "É o processo de troca de dispositivos de E/S entre diferentes computadores.",
            "É a organização de dispositivos de E/S em pilhas para acesso rápido.",
            "É a técnica de gerenciar e priorizar requisições de dispositivos de E/S.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "Explique o conceito de page fault (falha de página) em sistemas operacionais.",
          answers: [
            "É um erro de hardware que leva à corrupção de páginas de memória.",
            "É o congestionamento de solicitações para páginas de memória.",
            "É a página de memória corrompida devido a falhas elétricas.",
            "É a falha no acesso a uma página necessária, levando à sua busca no disco.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "O que é a técnica de preempção em sistemas operacionais?",
          answers: [
            "É um mecanismo que impede o acesso concorrente a determinados recursos.",
            "É um método para otimizar a transferência de processos entre diferentes CPUs.",
            "É a capacidade de interromper um processo em execução para dar prioridade a um processo mais importante.",
            "É um sistema que prevê os eventos antes de serem executados.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
        {
          predicate: "O que é o conceito de deadlock (impasse) em sistemas operacionais?",
          answers: [
            "É uma situação em que um recurso está em uso por mais tempo do que o previsto.",
            "É um estado em que um processo espera por um recurso que está sendo utilizado por outro processo.",
            "É um erro na lógica do programa que leva a um loop infinito.",
            "É um acidente crítico que leva a uma falha catastrófica no sistema.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "O que são threads em sistemas operacionais?",
          answers: [
            "São camadas adicionais de segurança usadas para proteger os processos uns dos outros.",
            "São pequenos processos que compartilham a mesma área de memória e recursos.",
            "São processos de inicialização que preparam o sistema para executar programas.",
            "São protocolos de rede usados para transmissão de dados entre sistemas.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "O que é o conceito de sistema de arquivos distribuídos?",
          answers: [
            "É um sistema que distribui dados de um único sistema para vários sistemas de arquivos locais.",
            "É um sistema que organiza os arquivos em múltiplos discos locais para acesso rápido.",
            "É um sistema que distribui os arquivos em vários discos para backup de dados.",
            "É um sistema que divide e distribui dados em diferentes locais de armazenamento conectados em rede.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "O que é um algoritmo de substituição de páginas em sistemas operacionais?",
          answers: [
            "É um algoritmo usado para evitar a corrupção de páginas de memória.",
            "É um método para reorganizar páginas de memória para acesso mais rápido.",
            "É um algoritmo que decide qual página de memória deve ser removida quando a memória está cheia.",
            "É um algoritmo que organiza páginas de memória em segmentos para evitar fragmentação.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
      ],
    },
  },
};
