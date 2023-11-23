# ComputaShow Game Project Report

## Project Overview

### Development Environment

- **Framework:** The project is developed using Next.js version 13, a meta-framework built on top of React.js. It leverages Next.js' Page Router for navigation and page management.
- **Styling:** TailwindCSS is used for styling the application, providing a utility-first approach for designing the interface.
- **Dependency Management:** To install dependencies, the command `pnpm install` is used. For development purposes, `pnpm dev` is the go-to command. For detailed usage and features, referring to the official documentation of these tools is recommended.

### Implementation Highlights

- The game is designed to mimic the format of the popular "Millionaire" quiz show. In Brazil, the show is known as "Show do Milhão".
- Players face multiple-choice questions. Here, we don't use monetary values because of two items:
  - Currency values are temporal and are affected by inflation.
  - The game is not limited to a single country.
    Instead, we use a point system, where the player's score is determined by the number of questions answered correctly.
- The difficulty of questions increases as the player progresses, with higher stakes involved.

## Areas for Improvement

### Application State Management

- **Issue:** Current implementation involves a re-render every second due to the way the remaining time state is handled. This is caused by passing variables as parameters from parent to child components.
- **Solution:** Refactor state management to use a more efficient approach, such as using React's Context API or a state management library like Redux.

### Content Expansion

- **Addition of Topics/Disciplines:** Introduce more variety in questions by including different topics or academic disciplines.
- **Dynamic Rendering in TailwindCSS:** TailwindCSS needs adjustment to dynamically render colors. The current method uses classes like `bg-yellow`, limiting flexibility.

### Feature Enhancements

- **Language Support:** Implement multilingual support to cater to a broader audience.
- **Multiplayer Mode:** Introduce a multiplayer feature to allow competition among multiple players.
- **Global Ranking:** Implement a global ranking system to encourage competition and engagement.
- **Answer Security:** Enhance the security of the correct answer to prevent easy prediction or cheating.
- **Desktop Application:** Consider porting the application to desktop platforms using frameworks like Tauri or Electron.
- **Hints:** Features like lifelines or hints are potentially interesting additions to the game.

### Conclusion

The ComputaShow game project demonstrates a interactive quiz application, closely resembling the popular "Show do Milhão" game format. While the current version showcases a basic foundation, the outlined improvements are crucial for enhancing user experience, broadening the game's appeal, and ensuring its long-term success.

### Developed by

| Gustavo Becelli | Lucas Voltera |
| :-------------: | :-----------: |
| ![Gustavo Becelli](https://github.com/becelli.png?size=100) | ![Lucas Voltera](https://github.com/lucasvoltera.png?size=100) |
| [GitHub](https://github.com/becelli) | [GitHub](https://github.com/lucasvoltera) |