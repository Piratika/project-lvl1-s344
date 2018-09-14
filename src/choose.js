import balance from './games/balance';
import calc from './games/calc';
import even from './games/even';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';
import ask from './ask';

const choose = () => {
  console.log('\n1. Balance\n2. Calc\n3. Even\n4. Gcd\n5. Prime\n6. Progression\n\n7. Exit');
  const chooseGame = ask('\nYou want to play ... ');
  switch (chooseGame) {
    case '1': balance(); break;
    case '2': calc(); break;
    case '3': even(); break;
    case '4': gcd(); break;
    case '5': prime(); break;
    case '6': progression(); break;
    case '7': return;
    default: {
      console.log('\nWrong. Let\'s try again');
      choose();
    }
  }
};

export default choose;
