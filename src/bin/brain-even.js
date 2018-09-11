#!/usr/bin/env node
import game from '..';
import { cons } from 'hexlet-pairs';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const generateRandomNumber = () => {
  const min = 0;
  const max = 500;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = number => number % 2 === 0;

const taskAndAnswer = () => {
  const randomNumber = generateRandomNumber();
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, rightAnswer);
};

export default () => game(taskAndAnswer, rules);
