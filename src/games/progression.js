import { cons } from 'hexlet-pairs';
import random from '../random';
import game from '..';

const rules = 'What number is missing in this progression?';

const progressionToString = (start, arg, amt) => {
  if (amt === 0) return '';
  return `${start} ${progressionToString(start + arg, arg, amt - 1)}`;
};

const question = () => {
  const randomStart = random(1, 20);
  const arg = random(2, 6);
  const position = random(0, 9);
  return cons(`${progressionToString(randomStart, arg, position)} .. ${progressionToString(randomStart + arg * (position + 1), arg, 9 - position)}`, `${randomStart + arg * position}`);
};

export default () => game(question, rules);
