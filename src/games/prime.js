import { cons } from 'hexlet-pairs';
import random from '../random';
import game from '..';

const rules = 'Is this number prime?';

const prime = (number) => {
  const maxDiff = Math.floor(number ** (1 / 2));
  const iter = (num, diff) => {
    if (diff === 1) return true;
    if (num % diff === 0) {
      return false;
    } return iter(num, diff - 1);
  };
  return iter(number, maxDiff);
};

const questionAndRightAnswer = () => {
  const randomNumber = random(2, 233);
  return cons(`${randomNumber}`, `${prime(randomNumber) ? 'yes' : 'no'}`);
};

export default () => game(questionAndRightAnswer, rules);
