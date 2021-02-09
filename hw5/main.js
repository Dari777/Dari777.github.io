// Написать код, который должен угадать задуманный цвет (цвет хранится строкой в константе) с 3 попыток. 
// По итогу соответствующее сообщение пользователю (угадал / не угадал).

const word = 'red';

console.log(word);

wordUser = prompt('Угадай задуманный цвет');

  for (let i = 0; i < wordUser.length; i++) {
    let temp = wordUser[i];
        
    for (let j = 0; j < word.length; j++) {
      let temp2 = word[j];
     
      if (temp == temp2) {
        alert('Ты угадал слово');
        break;
      } else {
        alert('У тебя есть три попытки');
        wordUser = prompt('Угадай задуманный цвет');
      }
    }
  }