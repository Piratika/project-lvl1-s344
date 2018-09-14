import { car, cdr } from 'hexlet-pairs';
import ask from './ask';
import choose from './choose';
import { getName } from './greeting';

const numberAsks = 3;

export default (taskAndAnswer, rules) => {
  console.log(`\n${rules}\n`);
  for (let i = 0; i < numberAsks; i += 1) {
    const questionAnswer = taskAndAnswer();
    console.log('Question:', car(questionAnswer));
    const rightAnswer = cdr(questionAnswer);
    const answer = ask('Your answer:');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
      console.log(`Let's try again, ${getName()}!\n`);
      choose();
      return;
    }
  }
  console.log(`Congratulations, ${getName()}!`);
  choose();
};
