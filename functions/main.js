let d, x1, x2;

function getSolutions(a, b, c){
  let result = new Object;

  d = Math.pow(b, 2) - 4 * a * c; 
  if (d < 0){
    result.D = d;

  } else if (d === 0){
    x1 = (-b) / (2 * a);
    result.D = d;
    result.roots = x1;

  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a); 
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    result.D = d;
    result.roots = [x1, x2];
  };

  return result;
};

function showSolutionsMessage(a, b, c){
  let result = getSolutions(a, b, c);
 
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n`);
  console.log('Значение дискриминанта: ' + d + '\n');

  if (result.roots.length == 0){
    console.log('Уравнение не имеет вещественных корней\n');

  } else if (result.roots.length == 1){
    console.log(`Уравнение имеет один корень X₁ = ${x1}\n`);

  } else if (result.roots.length == 2){
    console.log(`Уравнение имеет два корня: X₁ = ${x1}, X₂ = ${x2}\n`)
  };
};


function getPersonData(secretData){

  function truName(propValue){
      return (propValue === 0) ? 'Родриго' : 'Эмильо';
  };

  let firstName = truName(secretData.aaa), lastName = truName(secretData.bbb);
  
  let result = {
    firstName: firstName,
    lastName: lastName
  };
  
  return(console.log(result));
};


function getAverageScore(data){
  let result = new Object; i = 0; allMarksSum = 0;

//функция вычисления среднего балла
  function averageValue(arrayOfMarks){
    let sum = 0;
    for (let i = 0; i < arrayOfMarks.length; i ++){
  //суммируем оценки  
    sum = sum + arrayOfMarks[i];  
    };
  // вычисляем средний балл
    average = sum / arrayOfMarks.length;
    return (average);
    };

  for (let prop in data){
  //вычисляем средний балл для каждого предмета и записываем его в новый объект
    result[prop] = averageValue(data[prop]);
   //суммируем среднее значение всех предметов  
    allMarksSum += result[prop];  
    i ++;
  };  
//пушим средний балл за ВСЕ предметы в объект
  result.average = allMarksSum / i;
  return result;
  };