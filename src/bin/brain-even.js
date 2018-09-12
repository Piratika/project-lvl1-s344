#!/usr/bin/env node
import game from '..';
import { cons } from 'hexlet-pairs';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = number => number % 2 === 0;

const question = () => {
  const randomNumber = generateRandomNumber(0, 500);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, rightAnswer);
};

game(question, rules);
