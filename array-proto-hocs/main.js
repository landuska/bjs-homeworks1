function compareArrays(arr1, arr2){
    //создадим переменную, которая будет хранить булевые значения проверки двух массивов
    const repository = [];

    // проверяем все эдементы массивов на соответсвие значений и индексов
    for (let i = 0; i < arr1.length; i ++){
        (arr2.includes(arr1[i]) && ((arr1.indexOf(arr1[i])) === (arr2.indexOf(arr1[i])))) ? (repository.push(true)) : (repository.push(false));
    };
    //проверяем, был ли хоть один false  в сравнении массивов
    return (repository.includes(false)) ? false : true;
};    

function memoize(compareArrays, limit){
    //создадим массив, куда будем записывать значения вычислений и параметр, который будет хранить историю вызовов возвращаемой memoize функции
    let results = {
        args: [arr1, arr2], // массив аргументов, с которыми была вызывана функция
        result: compareArrays(arr1, arr2) // результат работы
    };
    
    if (results.args !== undefined){
        return results.result;
    } else {
        let boolingValue = compareArrays(arr1, arr2);
        //Добавляем результат вычислений и вырезаем массив от 0 элемента до 10
        results[result].push(boolingValue).slice(0, limit);
        return compareArrays(arr1, arr2);
    };    
};
