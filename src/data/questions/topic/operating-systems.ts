import { Question } from "~/data/questions/question";
import { QuestionDifficulty } from "~/data/questions/question-difficulty";

export const operatingSystemsQuestions: Question[] = [
  {
    predicate: "O que é são os drivers de dispositivos?",
    answers: ["Motoristas de ônibus", "Programas que permitem o funcionamento de um dispositivo", "Módulos de memória", "Interfaces de rede"],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 1,
  },
  {
    predicate: "O que é um sistema operacional?",
    answers: [
      "Um programa que gerencia recursos e fornece serviços aos programas de aplicativos.",
      "Um dispositivo de hardware que armazena dados do usuário.",
      "Uma rede de computadores interconectados.",
      "Um programa de edição de texto."
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
      "Realizar cálculos matemáticos complexos."
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
      "Um software de segurança."
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 3,
  },
  {
    predicate: "Quais são os tipos comuns de sistemas operacionais?",
    answers: [
      "Windows, Mac, e Linux.",
      "Browsers, Antivírus, e Editores de Texto.",
      "Word, Excel, e PowerPoint.",
      "Mouse, Teclado, e Monitor."
    ],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 1,
  },
  {
    predicate: "O que é um processo em um sistema operacional?",
    answers: [
      "Um documento que descreve a interação do usuário com o sistema.",
      "Uma tarefa em execução, tal como um programa de processamento de texto.",
      "Uma funcionalidade de segurança.",
      "Um componente de hardware essencial."
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
      "Um tipo de processador de gráficos."
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
      "Uma interface que aceita comandos de texto para interagir com o sistema."
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
      "Um dispositivo de hardware para armazenamento permanente."
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
      "Uma função de segurança do sistema operacional."
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
      "Controlar o funcionamento do disco rígido."
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
      "Um tipo de sistema de arquivos usado por alguns sistemas operacionais."
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
      "Um processo onde arquivos são divididos em partes não contínuas no disco."
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
      "Uma ferramenta para limpar dados inúteis do disco rígido."
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
      "Um sistema que roda aplicativos com tempos de inicialização muito rápidos."
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
      "A capacidade de armazenamento do disco rígido."
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
      "Um método de compactação de arquivos do sistema."
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
      "Uma forma de compactar arquivos no disco rígido."
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
      "Uma técnica para compactar dados no disco rígido."
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
      "Priorizar apenas os processos de alta prioridade."
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
      "Um sistema que comprime arquivos para economizar espaço de armazenamento."
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
      "Uma técnica de armazenamento em cache de processos frequentemente utilizados."
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
      "Monitorar a integridade dos arquivos do sistema."
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
      "Um tipo de memória utilizada para armazenar arquivos de sistema."
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
      "Comprimir os arquivos do sistema para economizar espaço."
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
      "Sistemas que possuem múltiplos discos rígidos para armazenamento."
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
      "Executar os processos em intervalos regulares de tempo fixo."
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
      "Um dispositivo que não é compatível com sistemas operacionais antigos."
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
      "Um modo de operação que prioriza tarefas de alto consumo de CPU."
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
      "É a ocupação excessiva de memória por processos e os sistemas operacionais lidam com ela por meio do algoritmo de substituição de páginas."
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
      "É a prática de migrar programas para a nuvem."
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
      "Sistemas de 32 bits são mais econômicos e consomem menos energia."
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
      "É a técnica de gerenciar e priorizar requisições de dispositivos de E/S."
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
      "É a falha no acesso a uma página necessária, levando à sua busca no disco."
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
      "É um sistema que prevê os eventos antes de serem executados."
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
      "É um acidente crítico que leva a uma falha catastrófica no sistema."
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
      "São protocolos de rede usados para transmissão de dados entre sistemas."
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
      "É um sistema que divide e distribui dados em diferentes locais de armazenamento conectados em rede."
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
      "É um algoritmo que organiza páginas de memória em segmentos para evitar fragmentação."
    ],
    difficulty: QuestionDifficulty.hard,
    correctResponse: 3,
  },
];
