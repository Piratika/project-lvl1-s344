import readlineSync from 'readline-sync';
export const ask = () => {
    console.log('Hello,', readlineSync.question('May I have your name? '), '!');
}