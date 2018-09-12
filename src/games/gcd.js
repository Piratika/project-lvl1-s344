import { cons } from 'hexlet-pairs';
import random from '../random';
import game from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const findfcd = (number1, number2) => {
  if (number1 === 0 || number2 === 0) return number1 + number2;
  if (number1 > number2) {
    return findfcd(number2, number1 % number2);
  } return findfcd(number1, number2 % number1);
};

const question = () => {
  const randomNumber1 = random(1, 100);
  const randomNumber2 = random(1, 100);
  return cons(`${randomNumber1} ${randomNumber2}`, `${findfcd(randomNumber1, randomNumber2)}`);
};

export default () => game(question, rules);
