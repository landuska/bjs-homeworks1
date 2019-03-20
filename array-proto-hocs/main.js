function compareArrays(arr1, arr2){
    //сравниваем массивы
    if (arr1.length === arr2.length){
        return arr1.every((item, index) => item === arr2[index]);
    }else{
        return false;
    };    
};       

function memoize(sum, limit){
    let results = {
        args : [], // аргументы вызова возвращаемой функции fn
        result : []// результат работы
    };

    let arrayOfResults = [];

    function fn(a, b){
        if (arrayOfResults.length === 0){
            results.args =  [a, b];
            results.result = sum(a, b);
            arrayOfResults.push(results);
            return console.log(results.result);
        }else{    
            if (compareArrays(results.args, [a, b])){
                return console.log('Результат берется из памяти \n' + results.result);
            }else{ 
                results.args =  [a, b];
                results.result = sum(a, b);
                arrayOfResults.push(results);
                return console.log('Функция вызвана не из памяти\n' + results.result); 
            };
        };    
    };

    return fn;
};

const sumfn = (a, b) => a + b;

sumfn (3, 4)
const mSum = memoize(sumfn, 10)

mSum(3, 4)
mSum(4, 5)
mSum(3, 4)
mSum(2, 4)