let a = +prompt("Введите первое число:")
let b= +prompt("Введите второе число:")
function numb(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
let result = numb(a, b)
alert(`Ответ: ${result}`)

let n = +prompt("Введите число:");
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result2 = 1;
    for (let i = 2; i <= n; i++) {
      result2 *= i;
    }
    return result2;
  }
}
let result2 = factorial(n);
alert(`Ответ: ${result2}`);


let numb1 = +prompt("Введите первую цифру:");
let numb2 = +prompt("Введите вторую цифру:");
let numb3 = +prompt("Введите третью цифру:");
let result3 = `${numb1}${numb2}${numb3}`;
alert(`Отримане число: ${result3}`);

let length = +prompt("Введите длинну:");
let width = +prompt("Введите ширину:");
function calcul(length, width) {
    if (width === undefined) {
      return length * length;
    } else {
      return length * width;
    }
  }
  let area = calcul(length, width);
  alert(`Площдь: ${area}`);


let numb4 = +prompt("Введите число:");
let isPerfect = PerfectNumber(numb4); 
function PerfectNumber(numb4) {
    let sum = 0;
  for (let i = 1; i < numb4; i++) {
      if (numb4 % i === 0) {
        sum += i;
      }
    }
  
    return sum === numb4;
  }
if (isPerfect) {
    alert("Число натуральное.");
  } else {
    alert("Число не натуральное.");
  }
  

let min = +prompt("Введите минимальное число диапазона:");
let max = +prompt("Введите максимальное число диапазона:");
function isPerfectNumber(number) {
  let sum = 0;
for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
}
function printPerfectNumbers(min, max) {
  let perfectNumbers = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }

  return perfectNumbers;
}
let perfectNumbersInRange = printPerfectNumbers(min, max);
alert(`Натуральные числа от ${min} до ${max}: ${perfectNumbersInRange.join(", ")}`);


let hours = +prompt("Введите часы:");
let minutes = +prompt("Введите минуты:");
let seconds = +prompt("Введите секунды:");
function formatTime(hours, minutes, seconds) {
    if (minutes === undefined) {
      minutes = "00";
    } else {
      minutes = String(minutes).padStart(2, "0");
    }
    if (seconds === undefined) {
      seconds = "00";
    } else {
      seconds = String(seconds).padStart(2, "0");
    }
    return hours + ":" + minutes + ":" + seconds;
  }
let formattedTime = formatTime(hours, minutes, seconds);
alert(`Время: ${formattedTime}`);


let hours1 = +prompt("Введите часы:");
let minutes1 = +prompt("Введите минуты:");
let seconds1 = +prompt("Введите секунды:");
function timeSec(hours1, minutes1, seconds1) {
    const totalSeconds = (hours1 * 3600) + (minutes1 * 60) + seconds1;
    return totalSeconds;
  }
let secTime = timeSec(hours1, minutes1, seconds1);
alert(`Время в секундах: ${secTime}`); 
  

let seconds2 = +prompt("Введите секунды:");
function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${hours}:${padNumber(minutes)}:${padNumber(remainingSeconds)}`;
  return formattedTime;
}
function padNumber(number) {
  return String(number).padStart(2, '0');
}
let timeString = secondsToTime(seconds2);
alert(`Время: ${timeString}`);

let hours3 = +prompt("Введите часы (первое время):");
let minutes3 = +prompt("Введите минуты (первое время):");
let seconds3 = +prompt("Введите секунды (первое время):");
let hours4 = +prompt("Введите часы (второе время):"); 
let minutes4 = +prompt("Введите минуты (второе время):");
let seconds4 = +prompt("Введите секунды (второе время):");

function formatTime(hours, minutes, seconds) {
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

function Difference(hours3, minutes3, seconds3, hours4, minutes4, seconds4) {
  const totalSeconds1 = convertToSeconds(hours3, minutes3, seconds3);
  const totalSeconds2 = convertToSeconds(hours4, minutes4, seconds4);
  
  const differenceSeconds = Math.abs(totalSeconds1 - totalSeconds2);
  
  const hours = Math.floor(differenceSeconds / 3600);
  const minutes = Math.floor((differenceSeconds % 3600) / 60);
  const seconds = differenceSeconds % 60;
  
  return formatTime(hours, minutes, seconds);
}

function convertToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

function padNumber(number) {
  return String(number).padStart(2, '0');
}

let differenceResult = Difference(hours3, minutes3, seconds3, hours4, minutes4, seconds4);
alert(`Різниця між датами: ${differenceResult}`);




  