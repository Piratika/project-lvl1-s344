import game from '..';
import { cons } from 'hexlet-pairs';
import random from '../random';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const questionAndRightAnswer = () => {
  const randomNumber = random(0, 500);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, rightAnswer);
};

export default () => game(questionAndRightAnswer, rules);
