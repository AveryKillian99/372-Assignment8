# 372-Assignment8

## Setup
1. npm install

2. npm run dev


## Project Structure
- `public/images/` : put `rock.PNG`, `paper.PNG`, `scissors.PNG`, `question-mark.PNG`
- `src/` : components and styles (CSS modules)

---

## Notes on Implementation

- Uses React functional components and hooks (`useState`, `useEffect`) for managing game state and animation timers.
- The computer "shuffles" through moves every 500ms for 3 seconds before revealing its final choice.
- Player input is disabled during the computer's shuffle to prevent multiple selections.
- ScoreBoard component tracks wins, losses, and ties across rounds.
- Reset button clears the score and resets the game state to its initial state.
- Fully keyboard accessible (`tabIndex`, `onKeyDown` for Enter/Space) and uses semantic HTML.
- CSS modules scope styles locally to prevent global conflicts.
- All 9 possible combinations of player vs computer moves are handled correctly.
- The app is structured into modular components: `PlayerThrow`, `ComputerThrow`, `ResultDisplay`, `ScoreBoard`, and `ResetButton`.

## Demo Link
https://uncg-my.sharepoint.com/:v:/g/personal/alkillian_uncg_edu/IQAyQhQA7n6FQKFvGm5L4l5kAVfQ4ah9ln3Kv1r3ThE5dMc?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=MPCnRv
