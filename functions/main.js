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
  let firstPirateName, lastPirateName;
  
  secretData = {
  firstName: firstPirateName,
  lastName: lastPirateName,
  };
  
  if (firstPirateName !== 0){
    secretData.firstName = 'Эмильо';
    
  } else {
    secretData.firstName = 'Родриго';
  };
  
  if (lastPirateName !== 0){
    secretData.lastName = 'Эмильо';
    
  } else {
    secretData.lastName = 'Родриго';
  };
  
  return (secretData);
  };