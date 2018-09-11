import readlineSync from 'readline-sync';

const ask = () => {
  console.log('Hello,', readlineSync.question('May I have your name? '), '!');
};
export default ask;
