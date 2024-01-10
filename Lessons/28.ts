type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  function makeTurn(direction: string) {
    let turtleIndex;
    if (direction === 'left') {
      state.forEach((item) => {
        if (item === 'turtle') {
          turtleIndex = state.indexOf(item);
        };
      })
      if (turtleIndex === 0) {
        throw new Error;
      } else {
        state[turtleIndex] = null;
        state[turtleIndex - 1] = 'turtle';
      }
    }

    if (direction === 'right') {
      state.forEach((item) => {
        if (item === 'turtle') {
          turtleIndex = state.indexOf(item);
        };
      })
      if (turtleIndex === state.length - 1) {
        throw new Error;
      } else {
        state[turtleIndex] = null;
        state[turtleIndex + 1] = 'turtle';
      }
    }
  }

  return { makeTurn, state };
};
