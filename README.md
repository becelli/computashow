# ComputaShow Game Project

## How to run

After cloning the repository, run the following commands:

```bash
pnpm install
pnpm dev
```

## Report

### Game Description

ComputaShow is a quiz-based game where players tackle multiple-choice questions within a given time limit. It draws inspiration from the "Millionaire" quiz format, known in Brazil as "Show do Milhão", but utilizes a point system rather than monetary values to suit an international audience. The game features:

- **Time Limit:** Each question must be answered within 30 seconds, adding urgency and pace. If the player fails to answer within the time limit, the game ends.
- **Skip Option:** Players can skip up to three questions per game, though skipping does not earn points. This feature is intended as a last resort.
- **Question Difficulty:** Fifteen questions of escalating difficulty are presented, with difficulty levels not disclosed to players. The player's score is determined by the number of questions answered correctly.
- **Randomization:** Questions and answer options are randomized to prevent memorization. However, this is a temporary solution, as a database of questions and answers would be more effective.
- **Internationalization:** The game supports Portuguese, English, and Spanish. The language is changed automatically based on the browser's language settings, but can also be changed manually on the URL.
- **Responsive Design:** The game is responsive and can be played on mobile devices, tablets, and desktops.
- **Rules:** The game features a rules popup, which explains the game's mechanics and scoring system.

### Technical Framework

- **Framework:** Developed with Next.js version 13. Utilizes Next.js' Page Router for navigation and page management.
- **Styling:** TailwindCSS for a utility-first design approach.
- **Dependency Management:** Utilizes `pnpm` for dependency management.

### Development Challenges and Solutions

- **Unique UI Design:** Struggled to create a distinct and appealing UI. We initially tried a minimalist approach, but it did not look good. We ended up using the Catppuccino color palette, which is visually pleasing, and tried to make the UI resemble a retro game show.
- **Question Curation:** Time-consuming selection and curation of diverse questions, with some ending up too similar or ambiguously phrased. A database of existing questions and answers would be more effective. However, this would require a backend, which is not currently implemented and it helped us to learn more about the topics of the questions.
- **Time Limit Implementation:** We tried implementing the timer with `setTimeout` and `setInterval`. However, as we faced problems, we adopted `useEffect` for the timer, which unfortunately causes re-render issues and button focus problems. This forced us to remove any hover effects or animations from the buttons.

### Areas for Improvement

#### State Management

- **Issue:** Frequent re-renders due to time state handling, caused by passing variables as parameters from parent to child components. This is a result of the current implementation.
- **Solution:** Implement efficient state management, possibly with React's Context API or Redux library. This would reduce the number of re-renders or eliminate them entirely.

#### Content Enhancement

- **Topics Expansion:** Introduce a wider range of questions and topics. We suggest the use of a database of questions and answers.
- **TailwindCSS Adjustment:** Improve dynamic color rendering capabilities. The current implementation has issues with dynamic color rendering, as it uses classes like `bg-yellow` and TailwindCSS can remove these tags during build time.

#### Feature Additions

- **Language Support:** Implement multilingual capabilities, to cater to a wider audience. Currently, the game supports Portuguese, English, and Spanish.
- **Multiplayer Mode and Global Ranking:** To foster competition and engagement. This would require a backend, which is not currently implemented. We suggest the use of a database to store player scores.
- **Answer Security:** Strengthen security against cheating or easy prediction of the correct answer. For example, the current implementation leaks the correct answer in the HTML source code, although it is obfuscated.
- **Desktop Application:** Consider expansion to desktop platforms. This would require the use of frameworks like Tauri or Electron, but would allow for a more native and offline experience.
- **Gameplay Elements:** Introduce lifelines or hints to enhance gameplay. This would significantly increase the complexity of the game, but would also make it more engaging.

### Internationalization

- **Implementation:** Utilized Next.js i18n library; initial support for Portuguese, English, and Spanish.
- **Challenges:** Difficulties in translating questions and UI elements accurately. We used Google Translate and ChatGPT to translate questions and answers, but the results are not perfect. We also had to manually translate UI elements.

## Conclusion

The ComputaShow project, while currently offering a solid quiz game experience, has significant potential for enhancement. The identified improvements are essential for elevating the user experience, expanding its reach for learning purposes.

### Developed by

|                       Gustavo Becelli                       |                         Lucas Voltera                          |
| :---------------------------------------------------------: | :------------------------------------------------------------: |
| ![Gustavo Becelli](https://github.com/becelli.png?size=100) | ![Lucas Voltera](https://github.com/lucasvoltera.png?size=100) |
|            [GitHub](https://github.com/becelli)             |           [GitHub](https://github.com/lucasvoltera)            |
