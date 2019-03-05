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
  let aaa, bbb;
  secretData = new Object;
  
    function truName(prop){
      
      if (secretData[prop] == 0){
        secretData[prop] = 'Родриго';
      } else {
        secretData[prop] = 'Эмильо';
      };
      
      return secretData[prop];
    };
  
    secretData.aaa = truName(aaa);
    secretData.bbb = truName(bbb);
  
    console.log(`firstName: ${secretData.aaa}, lastName: ${secretData.bbb}`);
    return;
  };