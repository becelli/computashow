import { Translation } from "~/i18n";

export const en: Translation = {
  gameName: "ComputaShow",
  home: {
    welcomeMessage: "Welcome to ComputaShow!",
    singlePlayer: "Play",
    projectDevelopedBy: "This project was developed by ",
    forTheDisciplineOfFPGA: " for the FPGA discipline.",
  },
  inGame: {
    loading: "Loading...",
    gameState: {
      over: "Incorrect answer!",
      won: "You won!",
      playing: "Time's up!",
    },
    actions: {
      stop: "Stop",
      hit: "Hit",
      miss: "Miss",
    },
    questionLabel: "Question #",
    questionsComputerArchitecture: [
      {
        question: "What is a digital circuit?",
        answer: [
          "A circuit that operates with analog signals",
          "A circuit that operates with digital signals",
          "A circuit that operates with continuous signals",
          "A circuit that operates with discrete signals"
        ]
      },
      {
        question: "Which numerical system is most commonly used in digital circuits?",
        answer: [
          "Decimal system",
          "Binary system",
          "Hexadecimal system",
          "Octal system"
        ]
      },
      {
        question: 'What is a "logical gate" in digital circuits?',
        answer: [
          "A device to control the flow of current",
          "A component to convert digital signals to analog",
          "A device that performs a logical operation",
          "A type of battery"
        ]
      },
      {
        question: 'Which logic gate represents the "AND" operation?',
        answer: [
          "OR",
          "AND",
          "NOT",
          "XOR"
        ]
      },
      {
        question: 'What is the result of the "Exclusive OR" (XOR) operation when both operands are equal?',
        answer: [
          "1",
          "0",
          "Depends on the operands' values",
          "2"
        ]
      },
      {
        question: "What is a flip-flop in digital circuits?",
        answer: [
          "A memory device that stores a single bit of information",
          "A device used to generate square waves",
          "A type of transistor",
          "A device to generate analog signals"
        ]
      },
      {
        question: "What is the purpose of an encoder in digital circuits?",
        answer: [
          "Convert analog signals to digital signals",
          "Convert digital signals to analog signals",
          "Convert a set of data into a simpler code",
          "Control the current in the circuit"
        ]
      },
      {
        question: 'What does the term "clock" represent in digital circuits?',
        answer: [
          "A device to measure time",
          "A component used to synchronize operations in circuits",
          "A type of battery",
          "A type of memory"
        ]
      },
      {
        question: "What is the commonly used unit of measure to represent the clock speed in digital circuits?",
        answer: [
          "Megabytes",
          "Hertz",
          "Watts",
          "Volts"
        ]
      },
      {
        question: "What is the Central Processing Unit (CPU) in a computer?",
        answer: [
          "The part of the computer responsible for executing instructions and processing data",
          "The part of the computer where input devices are connected",
          "The main memory of the computer",
          "The computer's graphics card"
        ]
      },
      {
        question: "What is the main function of RAM in a computer?",
        answer: [
          "Store data and instructions temporarily so the CPU can access them quickly",
          "Permanently store system and user data",
          "Control all computer operations",
          "Process graphics and images in the computer"
        ]
      },
      {
        question: "What is a system bus in Computer Architecture?",
        answer: [
          "A device used to convert digital signals to analog",
          "A unit specialized in processing graphics and images",
          "The part of the processor that coordinates and controls instruction execution",
          "A set of communication lines that allow data transfer between computer components"
        ]
      },
      {
        question: "What is a bit in terms of Computer Architecture?",
        answer: [
          "A unit of processor speed measurement",
          "A set of instructions in a program",
          "The most basic unit of information, representing a binary digit (0 or 1)",
          "A unit of data storage"
        ]
      },
      {
        question: "What is the function of the Hard Disk Drive (HDD) in a computer?",
        answer: [
          "Control the execution of processor instructions",
          "Permanently store system and user data even when the computer is turned off",
          "Display information on the computer screen",
          "Regulate the flow of energy in the computer"
        ]
      },
      {
        question: "What is the Von Neumann Architecture?",
        answer: [
          "A computer architecture model that uses multiple processors.",
          "A computer architecture model that does not use RAM.",
          "A computer architecture model that uses only analog devices.",
          "A computer architecture model that separates memory storing data and instructions from the processor performing operations."
        ]
      },
      {
        question: "What is the Control Unit (CU) in a processor?",
        answer: [
          "The part of the processor that coordinates and controls instruction execution, ensuring all operations are performed at the right time.",
          "The part of the processor responsible for processing graphics and images.",
          "The main memory of the computer.",
          "The part of the processor that stores data and instructions temporarily."
        ]
      },
      {
        question: "What is the difference between RAM and Cache Memory in a computer?",
        answer: [
          "RAM is slower and has random access, while Cache Memory is faster and has direct access.",
          "RAM is smaller and more expensive, while Cache Memory is larger and cheaper.",
          "RAM is used only to store temporary data, while Cache Memory is used to store permanent data.",
          "RAM is slower and has random access, while Cache Memory is faster and has direct access."
        ]
      },
      {
        question: "What is the Instruction Pipeline in Computer Architecture?",
        answer: [
          "A type of memory used to store operating system instructions.",
          "A processing model that allows parallel execution of multiple instructions.",
          "A type of bus used exclusively to transfer instructions.",
          "A component that controls the flow of data between the CPU and main memory."
        ]
      },
      {
        question: "In 32-bit architecture, how many bytes are needed to represent a memory address?",
        answer: [
          "4 bytes",
          "8 bytes",
          "16 bytes",
          "32 bytes"
        ]
      },
      {
        question: "What is the function of the Instruction Register in a processor?",
        answer: [
          "Temporarily store the data being processed.",
          "Store the instructions that will be executed by the processor.",
          "Control the processor's control unit.",
          "Manage communication between the CPU and input/output devices."
        ]
      },
      {
        question: "What is the Fetch-Decode-Execute cycle in a processor?",
        answer: [
          "A cycle that transfers data between the CPU and RAM.",
          "An operation cycle used only in processors with CISC architecture.",
          "A cycle that fetches, decodes, and executes instructions stored in memory.",
          "An operation cycle used only in processors with RISC architecture."
        ]
      },
      {
        question: "What does SIMD (Single Instruction, Multiple Data) architecture consist of?",
        answer: [
          "An architecture that uses a reduced set of complex instructions.",
          "An architecture that allows parallel execution of multiple instructions.",
          "An architecture with multiple processors performing different tasks.",
          "An architecture that allows a single instruction to be applied to multiple data simultaneously."
        ]
      },
      {
        question: "What is the Floating Point Unit (FPU) in a processor?",
        answer: [
          "A specialized unit for processing graphics and images.",
          "The part of the processor responsible for storing system and user data.",
          "The part of the processor that coordinates and controls instruction execution.",
          "The unit that performs mathematical operations involving floating-point numbers."
        ]
      },
      {
        question: "What is a Multiplexer (MUX) in digital circuits?",
        answer: [
          "A device used to convert analog signals to digital signals.",
          "A device used to select among several inputs and direct one of them to the output.",
          "A device used to permanently store system and user data.",
          "A circuit that performs multiplication operations on binary numbers."
        ]
      },
      {
        question: "What is a binary counter in digital circuits?",
        answer: [
          "A circuit that counts electrical pulses in an analog system.",
          "A device that controls the current in a digital circuit.",
          "A circuit that performs counting operations on decimal numbers.",
          "A circuit that sequentially counts in binary according to clock pulses."
        ]
      },
      {
        question: 'What is the output of an "OR" gate if both inputs are 0 (low logic level)?',
        answer: ["1", "0", "Depends on the values of other gates.", "It cannot be predicted."]
      },
      {
        question: 'What is the output of an "AND" gate if both inputs are 1 (high logic level)?',
        answer: ["1", "0", "Depends on the values of other gates.", "It cannot be predicted."]
      },
      {
        question: 'What is a "NAND" (NOT AND) logic gate?',
        answer: [
          "A gate that performs the Exclusive OR (XOR) operation between two inputs.",
          "A gate that performs the NOT Exclusive (XNOT) operation on a single input.",
          "A gate that performs the AND operation and then inverts the result.",
          "A gate that performs the NOR operation and then inverts the result."
        ]
      },
      {
        question: 'What is an "XNOR" (NOR Exclusive) logic gate?',
        answer: [
          "A gate that performs the Exclusive OR (XOR) operation and then inverts the result.",
          "A gate that performs the Exclusive AND (XAND) operation between two inputs.",
          "A gate that performs the NOR Exclusive (NXOR) operation between two inputs.",
          "A gate that performs the NOT Exclusive (XNOT) operation on a single input."
        ]
      },
      {
        question: "What are the functional units of a processor?",
        answer: [
          "Units responsible for transferring data between the CPU and memory.",
          "Units responsible for controlling instruction execution.",
          "Units responsible for processing mathematical and logical operations.",
          "Units responsible for temporarily storing data."
        ]
      },
      {
        question: "What is the concept of data dependency in program instructions?",
        answer: [
          "A situation where an instruction depends on the results of other instructions to be executed.",
          "A technique using encrypted data to increase information security.",
          "A situation where two instructions compete for the same hardware resource.",
          "A technique allowing the execution of multiple instructions in parallel."
        ]
      },
      {
        question: "What is the concept of branch prediction in processors?",
        answer: [
          "A technique predicting the number of branches a program will execute.",
          "A technique predicting the memory addresses that will be accessed.",
          "A technique predicting the results of complex mathematical operations.",
          "A technique predicting the instructions that will be executed after a conditional jump."
        ]
      },
      {
        question: "What is Out-of-Order Execution in processors?",
        answer: [
          "A technique that allows the processor to execute instructions in parallel, without following the program order.",
          "A technique that reorders program instructions to optimize execution time.",
          "A technique that allows the processor to execute multiple instructions simultaneously.",
          "A technique that executes complex instructions outside the normal sequence of operations."
        ]
      },
      {
        question: "What is the Karnaugh map minimization method in digital circuits?",
        answer: [
          "A circuit simplification method using Boolean algebra.",
          "A method for optimizing digital circuits using statistical techniques.",
          "A circuit optimization method using machine learning algorithms.",
          "A method for converting analog signals to digital signals."
        ]
      },
      {
        question: "What are sequential circuits in digital circuits?",
        answer: [
          "Circuits that have no memory and process only real-time information.",
          "Circuits that do not use clock signals for synchronization.",
          "Circuits that have memory and use information from previous states to make decisions.",
          "Circuits that use only logical gates and have no memory elements."
        ]
      },
      {
        question: "What is the Field-Programmable Gate Array (FPGA) architecture?",
        answer: [
          "An architecture that uses programmable logic gates to perform mathematical operations.",
          "An architecture that has multiple parallel processors.",
          "An architecture that uses logic gates sequentially to execute instructions.",
          "An architecture that allows the user to program its logic gates to implement specific circuits."
        ]
      },
      {
        question: "What is an adder in digital circuits?",
        answer: [
          "A circuit that performs addition operations on binary numbers.",
          "A circuit that performs multiplication operations on binary numbers.",
          "A circuit that performs subtraction operations on binary numbers.",
          "A circuit that performs comparison operations between binary numbers."
        ]
      },
      {
        question: "What are synchronous and asynchronous circuits in digital circuits?",
        answer: [
          "Circuits that use only clock signals for synchronization.",
          "Circuits that do not use clock signals for synchronization.",
          "Circuits that have no memory elements.",
          "Circuits that use only basic logic gates."
        ]
      }
    ],
  },
  questionsOperatingSystems: [
    {
      question: "What are device drivers?",
      answer: [
        "Bus drivers",
        "Programs that enable a device to function",
        "Memory modules",
        "Network interfaces"
      ]
    },
    {
      question: "What is an operating system?",
      answer: [
        "A program that manages resources and provides services to application programs",
        "A hardware device that stores user data",
        "A network of interconnected computers",
        "A text editing program"
      ]
    },
    {
      question: "What is the main function of an operating system?",
      answer: [
        "Control and allocate hardware resources and provide services to programs",
        "Display images on the computer screen",
        "Manage Internet traffic routing",
        "Perform complex mathematical calculations"
      ]
    },
    {
      question: "What is a file in an operating system?",
      answer: [
        "A central processing unit of the system",
        "A graphical user interface",
        "A storage unit for data",
        "Security software"
      ]
    },
    {
      question: "What are common types of operating systems?",
      answer: [
        "Windows, Mac, and Linux",
        "Browsers, Antivirus, and Text Editors",
        "Word, Excel, and PowerPoint",
        "Mouse, Keyboard, and Monitor"
      ]
    },
    {
      question: "What is a process in an operating system?",
      answer: [
        "A document describing user interaction with the system",
        "A running task, such as a word processing program",
        "A security feature",
        "An essential hardware component"
      ]
    },
    {
      question: "What is RAM in an operating system?",
      answer: [
        "Permanent storage of user data",
        "Memory used to store the operating system",
        "Temporary memory used to store data while the system is running",
        "A type of graphics processor"
      ]
    },
    {
      question: "What is the Command Line Interface (CLI) in an operating system?",
      answer: [
        "An area for storing system files",
        "A programming language",
        "A graphical user interface",
        "An interface that accepts text commands to interact with the system"
      ]
    },
    {
      question: "What is a file system in an operating system?",
      answer: [
        "A network functionality to transfer files between computers",
        "A folder in the system for temporary files",
        "An organizational structure to store and retrieve data on a disk",
        "A hardware device for permanent storage"
      ]
    },
    {
      question: "What is multitasking in an operating system?",
      answer: [
        "A system that allows the execution of multiple tasks simultaneously",
        "A cloud storage unit",
        "A method for automatically saving documents",
        "A security function of the operating system"
      ]
    },
    {
      question: "What is the function of a scheduler in an operating system?",
      answer: [
        "Manage the system's RAM memory",
        "Choose and control the execution of processes",
        "Create automatic backups of files",
        "Control the operation of the hard drive"
      ]
    },
    {
      question: "What is a File Allocation Table (FAT) file system?",
      answer: [
        "A file system specific for storing images",
        "An open-source operating system",
        "A method for creating compressed files",
        "A type of file system used by some operating systems"
      ]
    },
    {
      question: "What is disk fragmentation in an operating system?",
      answer: [
        "A method of data encryption",
        "A way to organize files in different folders",
        "A technique to gather all files in the same location",
        "A process where files are divided into non-contiguous parts on the disk"
      ]
    },
    {
      question: "What are file permissions in operating systems?",
      answer: [
        "Rules that define who can edit files.",
        "A type of encryption for important documents.",
        "A method for compressing files.",
        "A tool to clean unnecessary data from the hard drive."
      ]
    },
    {
      question: "What is a real-time operating system?",
      answer: [
        "A system that responds to events within a defined time.",
        "A system that executes complex tasks quickly.",
        "A system that prioritizes only high CPU-consuming tasks.",
        "A system that runs applications with very fast boot times."
      ]
    },
    {
      question: "What is the difference between 32-bit and 64-bit operating systems?",
      answer: [
        "The amount of memory the system can support.",
        "The system's processing speed.",
        "The number of processes the system can run simultaneously.",
        "The hard disk storage capacity."
      ]
    },
    {
      question: "What is paging in operating systems?",
      answer: [
        "A method to divide the hard disk into multiple partitions.",
        "A method to increase the hard disk's storage capacity.",
        "A virtual memory management technique.",
        "A method to compress system files."
      ]
    },
    {
      question: "What is the swapping process in operating systems?",
      answer: [
        "A method to exchange system kernel modules.",
        "A process to move large files to another partition.",
        "A memory replacement technique between RAM and disk.",
        "A way to compress files on the hard disk."
      ]
    },
    {
      question: "What is internal fragmentation in operating systems?",
      answer: [
        "A technique to remove unnecessary files from the system.",
        "A situation where memory is divided into multiple partitions.",
        "A situation where memory is wasted due to fixed allocation size.",
        "A technique to compact data on the hard drive."
      ]
    },
    {
      question: "What is the purpose of process scheduling in operating systems?",
      answer: [
        "Reduce the system's boot time.",
        "Improve the CPU processing speed.",
        "Equitably distribute CPU time among processes.",
        "Prioritize only high-priority processes."
      ]
    },
    {
      question: "What is a distributed file system in operating systems?",
      answer: [
        "A system that organizes files by categories.",
        "A system that replicates all files to every computer in the network.",
        "A system that allows file sharing on a network.",
        "A system that compresses files to save storage space."
      ]
    },
    {
      question: "What is a bus in a computer system?",
      answer: [
        "A connection track between hard drives.",
        "A digital highway that transmits data between computer components.",
        "A communication port in a computer network.",
        "A cache storage technique for frequently used processes."
      ]
    },
    {
      question: "What is the role of firmware in a computer?",
      answer: [
        "Manage communication between computer peripherals.",
        "Permanently store system settings.",
        "Control basic hardware behavior and operation.",
        "Monitor the integrity of system files."
      ]
    },
    {
      question: "What is cache memory in an operating system?",
      answer: [
        "A type of high-speed main memory.",
        "A type of high-capacity secondary memory.",
        "A type of read-write memory.",
        "A type of memory used to store system files."
      ]
    },
    {
      question: "What is the memory segmentation technique in operating systems?",
      answer: [
        "Dividing memory into variably sized partitions to allocate processes.",
        "Reduce internal fragmentation in main memory.",
        "Eliminate the swapping process to optimize memory.",
        "Compress system files to save space."
      ]
    },
    {
      question: "What are multi-user operating systems?",
      answer: [
        "Systems that support various input devices.",
        "Systems that allow access to multiple applications simultaneously.",
        "Systems that enable multiple people to use the computer at the same time.",
        "Systems that have multiple hard drives for storage."
      ]
    },
    {
      question: "What is the function of the Round-Robin algorithm in process scheduling?",
      answer: [
        "Prioritize high-priority processes.",
        "Allocate memory circularly to processes.",
        "Equitably distribute CPU time among processes.",
        "Execute processes at regular fixed time intervals."
      ]
    },
    {
      question: "What is a Plug and Play device in operating systems?",
      answer: [
        "A device that can be connected and used immediately without manual configuration.",
        "A device that requires manual driver installation to function.",
        "A device that can be connected to any USB port.",
        "A device that is not compatible with older operating systems."
      ]
    },
    {
      question: "What is kernel mode in operating systems?",
      answer: [
        "An operating mode that executes only user-level applications.",
        "An operating mode that runs kernel and user-level processes simultaneously.",
        "A privileged operation mode that executes the operating system kernel.",
        "An operating mode that prioritizes high CPU consumption tasks."
      ]
    },
    {
      question: "What is memory fragmentation and how do operating systems deal with it?",
      answer: [
        "It is the division of memory into small blocks to allocate processes, and operating systems deal with it through compression.",
        "It is the waste of unused memory, and operating systems deal with it by merging memory partitions.",
        "It is data loss in main memory, and operating systems deal with it through frequent backups.",
        "It is the excessive occupation of memory by processes, and operating systems deal with it through the page replacement algorithm."
      ]
    },
    {
      question: "Explain the concept of swapping in operating systems.",
      answer: [
        "It is the act of switching between different operating systems on a single computer.",
        "It is the method of transferring processes between main memory and secondary memory.",
        "It is the exchange of information between networked CPUs.",
        "It is the practice of migrating programs to the cloud."
      ]
    },
    {
      question: "What is the difference between 32-bit and 64-bit operating systems?",
      answer: [
        "64-bit systems have twice the performance of 32-bit systems.",
        "32-bit systems are faster but less stable than 64-bit systems.",
        "64-bit systems support larger RAM and data processing.",
        "32-bit systems are more economical and consume less energy."
      ]
    },
    {
      question: "What is I/O (Input/Output) scheduling in operating systems?",
      answer: [
        "It is the technique for prioritizing I/O devices based on speed.",
        "It is the process of swapping I/O devices between different computers.",
        "It is the organization of I/O devices in stacks for quick access.",
        "It is the technique of managing and prioritizing I/O device requests."
      ]
    },
    {
      question: "Explain the concept of page fault in operating systems.",
      answer: [
        "It is a hardware error that leads to memory page corruption.",
        "It is the congestion of requests for memory pages.",
        "It is the corrupted memory page due to electrical faults.",
        "It is the failure to access a required page, leading to its retrieval from the disk."
      ]
    },
    {
      question: "What is the preemption technique in operating systems?",
      answer: [
        "It is a mechanism that prevents concurrent access to specific resources.",
        "It is a method to optimize the transfer of processes between different CPUs.",
        "It is the ability to interrupt a running process to give priority to a more important process.",
        "It is a system that predicts events before they are executed."
      ]
    },
    {
      question: "What is the concept of deadlock in operating systems?",
      answer: [
        "It is a situation where a resource is in use longer than expected.",
        "It is a state where a process waits for a resource being used by another process.",
        "It is an error in the program logic leading to an infinite loop.",
        "It is a critical accident leading to catastrophic system failure."
      ]
    },
    {
      question: "What are threads in operating systems?",
      answer: [
        "They are additional security layers used to protect processes from each other.",
        "They are small processes that share the same memory area and resources.",
        "They are boot processes that prepare the system to run programs.",
        "They are network protocols used for data transmission between systems."
      ]
    },
    {
      question: "What is the concept of distributed file systems in operating systems?",
      answer: [
        "It is a system that distributes data from a single system to various local file systems.",
        "It is a system that organizes files on multiple local disks for quick access.",
        "It is a system that distributes files across multiple disks for data backup.",
        "It is a system that divides and distributes data across different network-connected storage locations."
      ]
    },
    {
      question: "What is a page replacement algorithm in operating systems?",
      answer: [
        "It is an algorithm used to avoid memory page corruption.",
        "It is a method to rearrange memory pages for faster access.",
        "It is an algorithm that decides which memory page to remove when the memory is full.",
        "It is an algorithm that organizes memory pages into segments to avoid fragmentation."
      ],
    },
  ],
};
