function setDailyRhythm(wakeUpTime, bedTime){
    if (new Date().getUTCHours() == wakeUpTime){
        return (console.log(`Доброе утро, Вася!`));
    } else if (new Date().getUTCHours() == bedTime){
        return (console.log(`Спокойной ночи, Вася!`));
    } else{
        console.log('ошибка')
    }
};    

const setAlarm = (time, setDailyRhythm) => setDailyRhythm(time);

console.log(new Date().getUTCHours(), new Date().getUTCMinutes())

setTimeout(setDailyRhythm, 1000);
