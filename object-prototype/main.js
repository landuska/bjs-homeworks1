function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
  let now = +new Date();
  let oneMoreDate = +new Date(birthday);
  let diff = now - oneMoreDate;
  let oneYearMs = 31556926 * 1000;
  let age = diff / oneYearMs;
  return ((age > 18) ? 1 : 0);
};

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
  let sound = Object.assign({}, animal);
  return ((animal === undefined) ? null : sound.sound);
};

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < marks.length; i ++){
  sum += parseFloat(marks[i]);  
  };
  average = sum / marks.length;
  let roundedAverage = Math.round(average);
  return roundedAverage;
};