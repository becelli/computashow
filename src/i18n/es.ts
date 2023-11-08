import { Translation } from "~/i18n";

export const es: Translation = {
  gameName: "ComputaShow",
  home: {
    welcomeMessage: "¡Bienvenido/a a ComputaShow!",
    singlePlayer: "Jugar",
    projectDevelopedBy: "Este proyecto fue desarrollado por ",
    forTheDisciplineOfFPGA: " para la disciplina de FPGA.",
  },
  inGame: {
    loading: "Cargando...",
    gameState: {
      over: "¡Respuesta incorrecta!",
      won: "¡Ganaste!",
      playing: "¡Se acabó el tiempo!",
    },
  },
  questionsComputerArchitecture: [
    {
      question: "¿Qué es un circuito digital?",
      answer: [
        "Un circuito que opera con señales analógicas",
        "Un circuito que opera con señales digitales",
        "Un circuito que opera con señales continuas",
        "Un circuito que opera con señales discretas"
      ]
    },
    {
      question: "¿Qué sistema numérico se usa más comúnmente en los circuitos digitales?",
      answer: [
        "Sistema decimal",
        "Sistema binario",
        "Sistema hexadecimal",
        "Sistema octal"
      ]
    },
    {
      question: '¿Qué es una "puerta lógica" en circuitos digitales?',
      answer: [
        "Un dispositivo para controlar el flujo de corriente",
        "Un componente para convertir señales digitales en analógicas",
        "Un dispositivo que realiza una operación lógica",
        "Un tipo de batería"
      ]
    },
    {
      question: '¿Qué puerta lógica representa la operación "Y"?',
      answer: [
        "O",
        "Y",
        "NO",
        "XOR"
      ]
    },
    {
      question: '¿Cuál es el resultado de la operación "O Exclusivo" (XOR) cuando ambos operandos son iguales?',
      answer: [
        "1",
        "0",
        "Depende de los valores de los operandos",
        "2"
      ]
    },
    {
      question: "¿Qué es un flip-flop en circuitos digitales?",
      answer: [
        "Un dispositivo de memoria que almacena un solo bit de información",
        "Un dispositivo utilizado para generar ondas cuadradas",
        "Un tipo de transistor",
        "Un dispositivo para generar señales analógicas"
      ]
    },
    {
      question: "¿Cuál es el propósito de un codificador en circuitos digitales?",
      answer: [
        "Convertir señales analógicas a señales digitales",
        "Convertir señales digitales a señales analógicas",
        "Convertir un conjunto de datos en un código más simple",
        "Controlar la corriente en el circuito"
      ]
    },
    {
      question: '¿Qué representa el término "reloj" en circuitos digitales?',
      answer: [
        "Un dispositivo para medir el tiempo",
        "Un componente utilizado para sincronizar operaciones en circuitos",
        "Un tipo de batería",
        "Un tipo de memoria"
      ]
    },
    {
      question: "¿Cuál es la unidad de medida comúnmente utilizada para representar la velocidad del reloj en circuitos digitales?",
      answer: [
        "Megabytes",
        "Hertz",
        "Watts",
        "Volts"
      ]
    },
    {
      question: "¿Qué es la Unidad Central de Procesamiento (CPU) en una computadora?",
      answer: [
        "La parte de la computadora responsable de ejecutar instrucciones y procesar datos",
        "La parte de la computadora donde se conectan los dispositivos de entrada",
        "La memoria principal de la computadora",
        "La tarjeta gráfica de la computadora"
      ]
    },
    {
      question: "¿Cuál es la función principal de la RAM en una computadora?",
      answer: [
        "Almacenar datos e instrucciones temporalmente para que la CPU pueda acceder a ellos rápidamente",
        "Almacenar permanentemente los datos del sistema y del usuario",
        "Controlar todas las operaciones de la computadora",
        "Procesar gráficos e imágenes en la computadora"
      ]
    },
    {
      question: "¿Qué es un bus del sistema en la Arquitectura de Computadoras?",
      answer: [
        "Un dispositivo utilizado para convertir señales digitales en analógicas",
        "Una unidad especializada en procesar gráficos e imágenes",
        "La parte del procesador que coordina y controla la ejecución de instrucciones",
        "Un conjunto de líneas de comunicación que permiten la transferencia de datos entre los componentes de la computadora"
      ]
    },
    {
      question: "¿Qué es un bit en términos de Arquitectura de Computadoras?",
      answer: [
        "Una unidad de medida de la velocidad del procesador",
        "Un conjunto de instrucciones en un programa",
        "La unidad más básica de información, que representa un dígito binario (0 o 1)",
        "Una unidad de almacenamiento de datos"
      ]
    },
    {
      question: "¿Cuál es la función del Disco Duro (HDD) en una computadora?",
      answer: [
        "Controlar la ejecución de las instrucciones del procesador",
        "Almacenar permanentemente los datos del sistema y del usuario incluso cuando la computadora está apagada",
        "Mostrar información en la pantalla de la computadora",
        "Regular el flujo de energía en la computadora"
      ]
    },
    {
      question: "¿Qué es la Arquitectura de Von Neumann?",
      answer: [
        "Un modelo de arquitectura de computadoras que utiliza múltiples procesadores.",
        "Un modelo de arquitectura de computadoras que no utiliza RAM.",
        "Un modelo de arquitectura de computadoras que utiliza solo dispositivos analógicos.",
        "Un modelo de arquitectura de computadoras que separa la memoria que almacena datos e instrucciones del procesador que realiza operaciones."
      ]
    },
    {
      question: "¿Qué es la Unidad de Control (CU) en un procesador?",
      answer: [
        "La parte del procesador que coordina y controla la ejecución de instrucciones, asegurando que todas las operaciones se realicen en el momento adecuado.",
        "La parte del procesador responsable de procesar gráficos e imágenes.",
        "La memoria principal de la computadora.",
        "La parte del procesador que almacena datos e instrucciones temporalmente."
      ]
    },
    {
      question: "¿Cuál es la diferencia entre la RAM y la Memoria Caché en una computadora?",
      answer: [
        "La RAM es más lenta y tiene acceso aleatorio, mientras que la Memoria Caché es más rápida y tiene acceso directo.",
        "La RAM es más pequeña y más cara, mientras que la Memoria Caché es más grande y más barata.",
        "La RAM se usa solo para almacenar datos temporales, mientras que la Memoria Caché se usa para almacenar datos permanentes.",
        "La RAM es más lenta y tiene acceso aleatorio, mientras que la Memoria Caché es más rápida y tiene acceso directo."
      ]
    },
    {
      question: "¿Qué es el Pipeline de Instrucciones en la Arquitectura de Computadoras?",
      answer: [
        "Un tipo de memoria utilizada para almacenar instrucciones del sistema operativo.",
        "Un modelo de procesamiento que permite la ejecución paralela de múltiples instrucciones.",
        "Un tipo de bus utilizado exclusivamente para transferir instrucciones.",
        "Un componente que controla el flujo de datos entre la CPU y la memoria principal."
      ]
    },
    {
      question: "En arquitectura de 32 bits, ¿cuántos bytes se necesitan para representar una dirección de memoria?",
      answer: [
        "4 bytes",
        "8 bytes",
        "16 bytes",
        "32 bytes"
      ]
    },
    {
      question: "¿Cuál es la función del Registro de Instrucciones en un procesador?",
      answer: [
        "Almacenar temporalmente los datos que se están procesando.",
        "Almacenar las instrucciones que serán ejecutadas por el procesador.",
        "Controlar la unidad de control del procesador.",
        "Gestionar la comunicación entre la CPU y los dispositivos de entrada/salida."
      ]
    },
    {
      question: "¿Qué es el ciclo Fetch-Decode-Execute en un procesador?",
      answer: [
        "Un ciclo que transfiere datos entre la CPU y la RAM.",
        "Un ciclo de operación utilizado solo en procesadores con arquitectura CISC.",
        "Un ciclo que busca, decodifica y ejecuta las instrucciones almacenadas en la memoria.",
        "Un ciclo de operación utilizado solo en procesadores con arquitectura RISC."
      ]
    },
    {
      question: "¿En qué consiste la arquitectura SIMD (Single Instruction, Multiple Data)?",
      answer: [
        "Una arquitectura que utiliza un conjunto reducido de instrucciones complejas.",
        "Una arquitectura que permite la ejecución paralela de múltiples instrucciones.",
        "Una arquitectura con múltiples procesadores realizando tareas diferentes.",
        "Una arquitectura que permite que una sola instrucción se aplique a múltiples datos simultáneamente."
      ]
    },
    {
      question: "¿Cuál es la Unidad de Punto Flotante (FPU) en un procesador?",
      answer: [
        "Una unidad especializada en procesar gráficos e imágenes.",
        "La parte del procesador responsable de almacenar datos del sistema y del usuario.",
        "La parte del procesador que coordina y controla la ejecución de instrucciones.",
        "La unidad que realiza operaciones matemáticas con números en formato de punto flotante."
      ]
    },
    {
      question: "¿Qué es un Multiplexor (MUX) en circuitos digitales?",
      answer: [
        "Un dispositivo utilizado para convertir señales analógicas en señales digitales.",
        "Un dispositivo utilizado para seleccionar entre varias entradas y dirigir una de ellas hacia la salida.",
        "Un dispositivo utilizado para almacenar permanentemente los datos del sistema y del usuario.",
        "Un circuito que realiza operaciones de multiplicación en números binarios."
      ]
    },
    {
      question: "¿Qué es un contador binario en circuitos digitales?",
      answer: [
        "Un circuito que cuenta pulsos eléctricos en un sistema analógico.",
        "Un dispositivo que controla la corriente en un circuito digital.",
        "Un circuito que realiza operaciones de conteo en números decimales.",
        "Un circuito que cuenta secuencialmente en binario según los pulsos del reloj."
      ]
    },
    {
      question: '¿Cuál es la salida de una compuerta "OR" si ambas entradas son 0 (nivel lógico bajo)?',
      answer: ["1", "0", "Depende de los valores de otras compuertas.", "No se puede predecir."]
    },
    {
      question: '¿Cuál es la salida de una compuerta "AND" si ambas entradas son 1 (nivel lógico alto)?',
      answer: ["1", "0", "Depende de los valores de otras compuertas.", "No se puede predecir."]
    },
    {
      question: '¿Qué es una compuerta lógica "NAND" (NO Y)?',
      answer: [
        "Una compuerta que realiza la operación OR Exclusivo (XOR) entre dos entradas.",
        "Una compuerta que realiza la operación NOT Exclusivo (XNOT) en una sola entrada.",
        "Una compuerta que realiza la operación AND y luego invierte el resultado.",
        "Una compuerta que realiza la operación NOR y luego invierte el resultado."
      ]
    },
    {
      question: '¿Qué es una compuerta lógica "XNOR" (NOR Exclusivo)?',
      answer: [
        "Una compuerta que realiza la operación OR Exclusivo (XOR) y luego invierte el resultado.",
        "Una compuerta que realiza la operación AND Exclusivo (XAND) entre dos entradas.",
        "Una compuerta que realiza la operación NOR Exclusivo (NXOR) entre dos entradas.",
        "Una compuerta que realiza la operación NOT Exclusivo (XNOT) en una única entrada."
      ]
    },
    {
      question: "¿Cuáles son las unidades funcionales de un procesador?",
      answer: [
        "Unidades responsables de transferir datos entre la CPU y la memoria.",
        "Unidades responsables de controlar la ejecución de instrucciones.",
        "Unidades responsables de procesar operaciones matemáticas y lógicas.",
        "Unidades responsables de almacenar temporalmente datos."
      ]
    },
    {
      question: "¿Cuál es el concepto de dependencia de datos en instrucciones de programas?",
      answer: [
        "Una situación en la que una instrucción depende de los resultados de otras instrucciones para ser ejecutada.",
        "Una técnica que utiliza datos encriptados para aumentar la seguridad de la información.",
        "Una situación en la que dos instrucciones compiten por el mismo recurso de hardware.",
        "Una técnica que permite la ejecución de múltiples instrucciones en paralelo."
      ]
    },
    {
      question: "¿Qué es el concepto de predicción de saltos (branch prediction) en procesadores?",
      answer: [
        "Una técnica que predice la cantidad de saltos que un programa ejecutará.",
        "Una técnica que predice las direcciones de memoria que se accederán.",
        "Una técnica que predice los resultados de operaciones matemáticas complejas.",
        "Una técnica que predice las instrucciones que se ejecutarán después de un salto condicional."
      ]
    },
    {
      question: "¿Qué es la ejecución fuera de orden (Out-of-Order Execution) en procesadores?",
      answer: [
        "Una técnica que permite que el procesador ejecute instrucciones en paralelo, sin seguir el orden del programa.",
        "Una técnica que reordena las instrucciones del programa para optimizar el tiempo de ejecución.",
        "Una técnica que permite que el procesador ejecute múltiples instrucciones simultáneamente.",
        "Una técnica que ejecuta instrucciones complejas fuera de la secuencia normal de operaciones."
      ]
    },
    {
      question: "¿Cuál es el método de minimización de mapas de Karnaugh en circuitos digitales?",
      answer: [
        "Un método de simplificación de circuitos utilizando álgebra booleana.",
        "Un método para optimizar circuitos digitales utilizando técnicas estadísticas.",
        "Un método de optimización de circuitos utilizando algoritmos de aprendizaje automático.",
        "Un método para convertir señales analógicas a señales digitales."
      ]
    },
    {
      question: "¿Qué son los circuitos secuenciales en circuitos digitales?",
      answer: [
        "Circuitos que no tienen memoria y procesan solo información en tiempo real.",
        "Circuitos que no usan señales de reloj para sincronización.",
        "Circuitos que tienen memoria y usan información de estados anteriores para la toma de decisiones.",
        "Circuitos que usan solo compuertas lógicas y no tienen elementos de memoria."
      ]
    },
    {
      question: "¿Qué es la arquitectura de Field-Programmable Gate Array (FPGA)?",
      answer: [
        "Una arquitectura que utiliza compuertas lógicas programables para realizar operaciones matemáticas.",
        "Una arquitectura que tiene múltiples procesadores en paralelo.",
        "Una arquitectura que utiliza compuertas lógicas en secuencia para ejecutar instrucciones.",
        "Una arquitectura que permite al usuario programar sus compuertas lógicas para implementar circuitos específicos."
      ]
    },
    {
      question: "¿Qué es un sumador en circuitos digitales?",
      answer: [
        "Un circuito que realiza operaciones de adición en números binarios.",
        "Un circuito que realiza operaciones de multiplicación en números binarios.",
        "Un circuito que realiza operaciones de resta en números binarios.",
        "Un circuito que realiza operaciones de comparación entre números binarios."
      ]
    },
    {
      question: "¿Qué son circuitos síncronos y asíncronos en circuitos digitales?",
      answer: [
        "Circuitos que utilizan solo señales de reloj para sincronización.",
        "Circuitos que no usan señales de reloj para sincronización.",
        "Circuitos que no tienen elementos de memoria.",
        "Circuitos que usan solo compuertas lógicas básicas."
      ],
    },
  ],
  questionsOperatingSystems: [
    {
      question: "¿Qué son los controladores de dispositivos?",
      answer: [
        "Controladores de autobús",
        "Programas que permiten el funcionamiento de un dispositivo",
        "Módulos de memoria",
        "Interfaces de red"
      ]
    },
    {
      question: "¿Qué es un sistema operativo?",
      answer: [
        "Un programa que gestiona recursos y proporciona servicios a programas de aplicaciones",
        "Un dispositivo de hardware que almacena datos de usuario",
        "Una red de computadoras interconectadas",
        "Un programa de edición de texto"
      ]
    },
    {
      question: "¿Cuál es la función principal de un sistema operativo?",
      answer: [
        "Controlar y asignar recursos de hardware y proporcionar servicios a los programas",
        "Mostrar imágenes en la pantalla de la computadora",
        "Gestionar el enrutamiento del tráfico en Internet",
        "Realizar cálculos matemáticos complejos"
      ]
    },
    {
      question: "¿Qué es un archivo en un sistema operativo?",
      answer: [
        "Una unidad central de procesamiento del sistema",
        "Una interfaz gráfica de usuario",
        "Una unidad de almacenamiento para datos",
        "Software de seguridad"
      ]
    },
    {
      question: "¿Cuáles son los tipos comunes de sistemas operativos?",
      answer: [
        "Windows, Mac y Linux",
        "Navegadores, Antivirus y Editores de texto",
        "Word, Excel y PowerPoint",
        "Ratón, Teclado y Monitor"
      ]
    },
    {
      question: "¿Qué es un proceso en un sistema operativo?",
      answer: [
        "Un documento que describe la interacción del usuario con el sistema",
        "Una tarea en ejecución, como un programa de procesamiento de texto",
        "Una funcionalidad de seguridad",
        "Un componente de hardware esencial"
      ]
    },
    {
      question: "¿Qué es la RAM en un sistema operativo?",
      answer: [
        "Almacenamiento permanente de datos de usuario",
        "Memoria utilizada para almacenar el sistema operativo",
        "Memoria temporal utilizada para almacenar datos mientras el sistema está en ejecución",
        "Un tipo de procesador gráfico"
      ]
    },
    {
      question: "¿Qué es la Interfaz de Línea de Comandos (CLI) en un sistema operativo?",
      answer: [
        "Un área para almacenar archivos del sistema",
        "Un lenguaje de programación",
        "Una interfaz gráfica de usuario",
        "Una interfaz que acepta comandos de texto para interactuar con el sistema"
      ]
    },
    {
      question: "¿Qué es un sistema de archivos en un sistema operativo?",
      answer: [
        "Una funcionalidad de red para transferir archivos entre computadoras",
        "Una carpeta en el sistema para archivos temporales",
        "Una estructura organizativa para almacenar y recuperar datos en un disco",
        "Un dispositivo de hardware para almacenamiento permanente"
      ]
    },
    {
      question: "¿Qué es la multitarea en un sistema operativo?",
      answer: [
        "Un sistema que permite la ejecución de múltiples tareas simultáneamente",
        "Una unidad de almacenamiento en la nube",
        "Un método para guardar documentos automáticamente",
        "Una función de seguridad del sistema operativo"
      ]
    },
    {
      question: "¿Cuál es la función de un planificador en un sistema operativo?",
      answer: [
        "Gestionar la memoria RAM del sistema",
        "Elegir y controlar la ejecución de procesos",
        "Crear copias de seguridad automáticas de archivos",
        "Controlar el funcionamiento del disco duro"
      ]
    },
    {
      question: "¿Qué es el sistema de archivos File Allocation Table (FAT)?",
      answer: [
        "Un sistema de archivos específico para almacenar imágenes",
        "Un sistema operativo de código abierto",
        "Un método para crear archivos comprimidos",
        "Un tipo de sistema de archivos utilizado por algunos sistemas operativos"
      ]
    },
    {
      question: "¿Qué es la fragmentación de disco en un sistema operativo?",
      answer: [
        "Un método de encriptación de datos",
        "Una forma de organizar archivos en diferentes carpetas",
        "Una técnica para reunir todos los archivos en el mismo lugar",
        "Un proceso en el que los archivos se dividen en partes no contiguas en el disco"
      ]
    },
    {
      question: "¿Qué son los permisos de archivo en sistemas operativos?",
      answer: [
        "Reglas que definen quién puede editar archivos",
        "Un tipo de encriptación para documentos importantes",
        "Un método para comprimir archivos",
        "Una herramienta para limpiar datos innecesarios del disco duro"
      ]
    },
    {
      question: "¿Qué es un sistema operativo en tiempo real?",
      answer: [
        "Un sistema que responde a eventos dentro de un tiempo definido",
        "Un sistema que ejecuta tareas complejas rápidamente",
        "Un sistema que prioriza solo tareas que consumen mucha CPU",
        "Un sistema que ejecuta aplicaciones con tiempos de arranque muy rápidos"
      ]
    },
    {
      question: "¿Cuál es la diferencia entre sistemas operativos de 32 bits y 64 bits?",
      answer: [
        "La cantidad de memoria que el sistema puede admitir",
        "La velocidad de procesamiento del sistema",
        "La cantidad de procesos que el sistema puede ejecutar simultáneamente",
        "La capacidad de almacenamiento del disco duro"
      ]
    },
    {
      question: "¿Qué es la paginación en sistemas operativos?",
      answer: [
        "Un método para dividir el disco duro en múltiples particiones",
        "Un método para aumentar la capacidad de almacenamiento del disco duro",
        "Una técnica de gestión de memoria virtual",
        "Un método para comprimir archivos del sistema"
      ]
    },
    {
      question: "¿Cuál es el proceso de intercambio en sistemas operativos?",
      answer: [
        "Un método para intercambiar módulos del kernel del sistema operativo",
        "Un proceso para mover archivos grandes a otra partición",
        "Una técnica de reemplazo de memoria entre RAM y disco",
        "Una forma de comprimir archivos en el disco duro"
      ]
    },
    {
      question: "¿Qué es la fragmentación interna en sistemas operativos?",
      answer: [
        "Una técnica para eliminar archivos innecesarios del sistema",
        "Una situación en la que la memoria se divide en múltiples particiones",
        "Una situación en la que se desperdicia memoria debido al tamaño fijo de asignación",
        "Una técnica para compactar datos en el disco duro"
      ]
    },
    {
      question: "¿Cuál es el propósito de la programación de procesos en sistemas operativos?",
      answer: [
        "Reducir el tiempo de arranque del sistema",
        "Mejorar la velocidad de procesamiento de la CPU",
        "Distribuir equitativamente el tiempo de CPU entre los procesos",
        "Priorizar solo los procesos de alta prioridad"
      ]
    },
    {
      question: "¿Qué es un sistema de archivos distribuido en sistemas operativos?",
      answer: [
        "Un sistema que organiza archivos por categorías",
        "Un sistema que replica todos los archivos en cada computadora de la red",
        "Un sistema que permite compartir archivos en una red",
        "Un sistema que comprime archivos para ahorrar espacio de almacenamiento"
      ]
    },
    {
      question: "¿Qué es un bus en un sistema informático?",
      answer: [
        "Una pista de conexión entre discos duros",
        "Una vía digital que transmite datos entre componentes de la computadora",
        "Un puerto de comunicación en una red de computadoras",
        "Una técnica de almacenamiento en caché para procesos utilizados con frecuencia"
      ]
    },
    {
      question: "¿Cuál es el papel del firmware en una computadora?",
      answer: [
        "Gestionar la comunicación entre periféricos de la computadora.",
        "Almacenar permanentemente la configuración del sistema.",
        "Controlar el comportamiento básico y la operación del hardware.",
        "Supervisar la integridad de los archivos del sistema."
      ]
    },
    {
      question: "¿Qué es la memoria caché en un sistema operativo?",
      answer: [
        "Un tipo de memoria principal de alta velocidad.",
        "Un tipo de memoria secundaria de alta capacidad.",
        "Un tipo de memoria de lectura y escritura.",
        "Un tipo de memoria utilizada para almacenar archivos del sistema."
      ]
    },
    {
      question: "¿Cuál es la técnica de segmentación de memoria en sistemas operativos?",
      answer: [
        "Dividir la memoria en particiones de tamaño variable para asignar procesos.",
        "Reducir la fragmentación interna en la memoria principal.",
        "Eliminar el proceso de intercambio para optimizar la memoria.",
        "Comprimir archivos del sistema para ahorrar espacio."
      ]
    },
    {
      question: "¿Qué son los sistemas operativos multiusuario?",
      answer: [
        "Sistemas que admiten varios dispositivos de entrada.",
        "Sistemas que permiten el acceso a múltiples aplicaciones simultáneamente.",
        "Sistemas que permiten que varias personas usen la computadora al mismo tiempo.",
        "Sistemas que tienen múltiples discos duros para almacenamiento."
      ]
    },
    {
      question: "¿Cuál es la función del algoritmo Round-Robin en la programación de procesos?",
      answer: [
        "Priorizar procesos de alta prioridad.",
        "Asignar memoria circularmente a los procesos.",
        "Distribuir equitativamente el tiempo de la CPU entre los procesos.",
        "Ejecutar procesos a intervalos regulares de tiempo fijo."
      ]
    },
    {
      question: "¿Qué es un dispositivo Plug and Play en sistemas operativos?",
      answer: [
        "Un dispositivo que se puede conectar y utilizar de inmediato sin configuración manual.",
        "Un dispositivo que requiere la instalación manual de controladores para funcionar.",
        "Un dispositivo que se puede conectar a cualquier puerto USB.",
        "Un dispositivo que no es compatible con sistemas operativos antiguos."
      ]
    },
    {
      question: "¿Qué es el modo kernel en sistemas operativos?",
      answer: [
        "Un modo de operación que ejecuta solo aplicaciones a nivel de usuario.",
        "Un modo de operación que ejecuta procesos del kernel y a nivel de usuario simultáneamente.",
        "Un modo de operación privilegiado que ejecuta el núcleo del sistema operativo.",
        "Un modo de operación que prioriza tareas de alto consumo de CPU."
      ]
    },
    {
      question: "¿Qué es la fragmentación de memoria y cómo los sistemas operativos la manejan?",
      answer: [
        "Es la división de la memoria en bloques pequeños para asignar procesos, y los sistemas operativos la manejan mediante la compresión.",
        "Es el desperdicio de memoria no utilizada, y los sistemas operativos la manejan fusionando particiones de memoria.",
        "Es la pérdida de datos en la memoria principal, y los sistemas operativos la manejan a través de copias de seguridad frecuentes.",
        "Es la ocupación excesiva de memoria por procesos, y los sistemas operativos la manejan a través del algoritmo de reemplazo de páginas."
      ]
    },
    {
      question: "Explique el concepto de swapping en sistemas operativos.",
      answer: [
        "Es el acto de cambiar entre diferentes sistemas operativos en una sola computadora.",
        "Es el método de transferir procesos entre la memoria principal y la memoria secundaria.",
        "Es el intercambio de información entre CPUs en red.",
        "Es la práctica de migrar programas a la nube."
      ]
    },
    {
      question: "¿Cuál es la diferencia entre sistemas operativos de 32 bits y 64 bits?",
      answer: [
        "Los sistemas de 64 bits tienen el doble de rendimiento que los sistemas de 32 bits.",
        "Los sistemas de 32 bits son más rápidos pero menos estables que los sistemas de 64 bits.",
        "Los sistemas de 64 bits admiten una RAM y procesamiento de datos más grandes.",
        "Los sistemas de 32 bits son más económicos y consumen menos energía."
      ]
    },
    {
      question: "¿Qué es la programación de E/S (Entrada/Salida) en sistemas operativos?",
      answer: [
        "Es la técnica para priorizar dispositivos de E/S según la velocidad.",
        "Es el proceso de intercambiar dispositivos de E/S entre diferentes computadoras.",
        "Es la organización de dispositivos de E/S en pilas para un acceso rápido.",
        "Es la técnica de administrar y priorizar las solicitudes de dispositivos de E/S."
      ]
    },
    {
      question: "Explique el concepto de falta de página en sistemas operativos.",
      answer: [
        "Es un error de hardware que lleva a la corrupción de páginas de memoria.",
        "Es la congestión de solicitudes de páginas de memoria.",
        "Es la página de memoria corrupta debido a fallas eléctricas.",
        "Es la falla al acceder a una página requerida, lo que conlleva a su recuperación desde el disco."
      ]
    },
    {
      question: "¿Cuál es la técnica de preempción en sistemas operativos?",
      answer: [
        "Es un mecanismo que evita el acceso concurrente a recursos específicos.",
        "Es un método para optimizar la transferencia de procesos entre diferentes CPUs.",
        "Es la capacidad de interrumpir un proceso en ejecución para dar prioridad a un proceso más importante.",
        "Es un sistema que predice eventos antes de que se ejecuten."
      ]
    },
    {
      question: "¿Cuál es el concepto de un punto muerto (deadlock) en los sistemas operativos?",
      answer: [
        "Es una situación en la que un recurso está en uso durante más tiempo de lo esperado.",
        "Es un estado en el que un proceso espera un recurso que está siendo utilizado por otro proceso.",
        "Es un error en la lógica del programa que lleva a un bucle infinito.",
        "Es un accidente crítico que lleva a una falla catastrófica del sistema."
      ]
    },
    {
      question: "¿Qué son los hilos (threads) en los sistemas operativos?",
      answer: [
        "Son capas de seguridad adicionales utilizadas para proteger los procesos entre sí.",
        "Son pequeños procesos que comparten la misma área de memoria y recursos.",
        "Son procesos de inicio que preparan el sistema para ejecutar programas.",
        "Son protocolos de red utilizados para la transmisión de datos entre sistemas."
      ]
    },
    {
      question: "¿Cuál es el concepto de sistemas de archivos distribuidos en sistemas operativos?",
      answer: [
        "Es un sistema que distribuye datos de un único sistema a varios sistemas de archivos locales.",
        "Es un sistema que organiza archivos en múltiples discos locales para un acceso rápido.",
        "Es un sistema que distribuye archivos en varios discos para respaldo de datos.",
        "Es un sistema que divide y distribuye datos en diferentes ubicaciones de almacenamiento conectadas en red."
      ]
    },
    {
      question: "¿Qué es un algoritmo de reemplazo de páginas en sistemas operativos?",
      answer: [
        "Es un algoritmo utilizado para evitar la corrupción de páginas de memoria.",
        "Es un método para reorganizar páginas de memoria para un acceso más rápido.",
        "Es un algoritmo que decide qué página de memoria eliminar cuando la memoria está llena.",
        "Es un algoritmo que organiza páginas de memoria en segmentos para evitar la fragmentación."
      ],
    },
  ],
};
