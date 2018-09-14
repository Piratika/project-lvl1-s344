import ask from './ask';

const userName = ask('\nWelcome to the Brain Games!\n\nMay I have your userName? ');
export const getName = () => userName;
const greeting = () => {
  console.log(`Hello, ${getName()}!`);
};

export default () => greeting();
