function setDailyRhythm(wakeUpTime, bedTime){
    checkTimeMorning(wakeUpTime);
    checkTimeNight(bedTime);
};

const morning = () => console.log('Доброе утро, Вася!');
const night = () => console.log('Спокойной ночи, Вася!');

function setAlarm(time, callback){
    function result(sistemTime){
        sistemTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
        if (sistemTime === time){
            callback();
        };
    };
    return result;
};

const checkTimeMorning = setAlarm('07:00', morning);
const checkTimeNight = setAlarm('23:00', night);

console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);

setInterval(setDailyRhythm, 1000);
