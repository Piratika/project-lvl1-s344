import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const ask = question => readlineSync.question(question);
const numberAsks = 3;

export default (taskAndAnswer, rules) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${rules}`);
  const userName = ask('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < numberAsks; i += 1) {
    const questionAnswer = taskAndAnswer();
    console.log('Question:', car(questionAnswer));
    const rightAnswer = cdr(questionAnswer);
    const answer = ask('Your answer:');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
