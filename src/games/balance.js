import { cons } from 'hexlet-pairs';
import random from '../random';
import game from '..';

const rules = 'Balance the given number.';

const sumOfNumbers = (num) => {
  if (num === 0) return 0;
  return (num % 10) + sumOfNumbers((num - (num % 10)) / 10);
};

const numOfSymbNum = num => String(num).length;

const balance = (reference) => {
  const iter = (sum, num) => {
    if (sum === 0) return 0;
    const middle = Math.floor(sum / num);
    return middle * (10 ** (num - 1)) + iter(sum - middle, num - 1);
  };
  return iter(sumOfNumbers(reference), numOfSymbNum(reference));
};

const question = () => {
  const randomNumber = random(111, 9999);
  return cons(`${randomNumber}`, `${balance(randomNumber)}`);
};

export default () => game(question, rules);
