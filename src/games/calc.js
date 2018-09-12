import { cons } from 'hexlet-pairs';
import random from '../random';
import game from '..';

const rules = 'What is the result of the expression?';

const question = () => {
  const randomNumber1 = random(0, 50);
  const randomNumber2 = random(0, 50);
  const operation = random(0, 2); // 0 +, 1 -, 2 *
  switch (operation) {
    case 0: {
      return cons(`${randomNumber1} + ${randomNumber2}`, `${randomNumber1 + randomNumber2}`);
    }
    case 1: {
      return cons(`${randomNumber1} - ${randomNumber2}`, `${randomNumber1 - randomNumber2}`);
    }
    default: {
      return cons(`${randomNumber1} * ${randomNumber2}`, `${randomNumber1 * randomNumber2}`);
    }
  }
};

export default () => game(question, rules);
