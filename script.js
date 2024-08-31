
// minimum 1

// const age = prompt('How old is you?')

// if (age >= 0 && age < 12) {
//     alert('You are children')
// } else if (age >= 12 && age < 19) {
//     alert('you are teenager')
// } else if (age >= 19 && age < 60) {
//     alert("ypu are adults")
// } else if (age >= 60){
//     alert('you are old')
// }else{
//     alert('you have mistake in your answer')
// }

// &2

// const number = prompt('insert number number from 0 to 9');

// switch (+number) {
//     case 0:
//         alert('you get )');
//         break;

//     case 1:
//         alert('you get !');
//         break;
//     case 2:
//         alert('you get @');
//         break;
//     case 3:
//         alert('you get #');
//         break;
//     case 4:
//         alert('you get $');
//         break;
//     case 5:
//         alert('you get %');
//         break;
//     case 6:
//         alert('you get ^');
//         break;
//     case 7:
//         alert('you get &');
//         break;
//     case 8:
//         alert('you get *');
//         break;
//     case 9:
//         alert('you get (');
//         break;

//     default:
//         alert('something wrong in your answer');
//         break;
// }

// &3

// const numbers = prompt('inser numbers with ","')

// const sum = getSum(numbers)

/*
 !+sum?alert('something wrong with numbers'):alert(`you get ${sum}`)
*/

// function getSum(array) {
//     const resultArray = array.split(",")
//     const result = resultArray.reduce((acc , item)=> acc + +item ,0)
//     return result
// }

// &4
// const numbers = prompt('insert 2 rundom numbers');

// alert(`yout ansver is ${getSum(numbers)}`);

// function getSum(numbers) {
//     const array = numbers.split(",");
//     const min = Math.min(...array);
//     const max = Math.max(...array);
//     let result = [];
//     if(!+min || !+max){
//         result='wrong information'
//     }else{
//         for (let i = 0; i < max; i++) {
//             if (+min % i === 0 && +max % i === 0) {
//                 result.push(i);
//             }
//         }
//     }

//     return Math.max(...result);
// };

// &5

// const number = prompt('insert rundom number');

// getdividers(number);

// function getdividers(number){
//     let result = "";

//     if(!+number){
//         result = "none"
//     }else{
//         for (let i = 0; i <= number; i++) {
//             number % i === 0 ? result += `${i} ` : result   
//         }
//     }


//     alert(result.trim())
// }

// normal 1



// definePolindrom()


// function definePolindrom() {
//     const number = prompt('insert rundom a five-digit number');

//     if(!+number && number.length <5){
//         alert('once more!')
//         definePolindrom()
//     }
//     else{
//         const result = number.split("").reverse().join("");
//         if(+result === +number){
//             alert("you got polindrom")
//         }else{
//             alert('once more!')
//             definePolindrom()
//         }
//     }
// }

// &2


// getPrice()

// function getPrice() {
//     const money = +prompt("insert your sum");
//     let pay;

//     if (money < 200) {
//         pay = money - money * 0.03;
//     } else if (money > 300) {
//         pay = money - money * 0.05;
//     } else if (money > 200) {
//         pay = money - money * 0.04;
//     } else {
//         pay = money;
//     }

//     alert(`You will pay ${pay}$`);

// }

// &3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// countNumbers()

// function countNumbers() {
//     const numbers = prompt("insert rundom numbers as you whont with ','");
//     // const numbers = '-1,2,3,4,5,0,0,0,2,2,-5,s';
//     let resultArray = {
//         positive: 0,
//         negative: 0,
//         zero: 0,
//         even: 0,
//         odd: 0,
//         errors: 0,
//         count: 0,
//     }
//     if (!numbers) {
//         alert('insert any numbers!!')
//         countNumbers()
//     } else if (numbers.length > 0) {
//         const splitNumbers = numbers.split(',');
//         for (let i = 0; i < splitNumbers.length; i++) {
//             resultArray.count += 1;
//             if (+splitNumbers[i] === 0) resultArray.zero += 1;
//             else if (!!+splitNumbers[i] && +splitNumbers[i] != 0) {
//                 if (+splitNumbers[i] % 2 === 0) {
//                     resultArray.even += 1;
//                     +splitNumbers[i] > 0 ? resultArray.positive += 1 : resultArray.negative += 1
//                 } else {
//                     resultArray.odd += 1;
//                     +splitNumbers[i] < 0 ? resultArray.positive += 1 : resultArray.negative += 1
//                 }
//             } else {
//                 resultArray.errors += 1;
//             }
//         }

//     }
//     console.table(resultArray)
// }
// &4 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// let day = 1;

// function showDays() {

//     alert(`${days[day -1]} , ${day}`)
//     day !== days.length? day++ : day = 1;
//     showDays()
// }
// showDays();

// maximum 



// function playGame() {
//     const rundomNumber = Math.floor(Math.random() * 100) + 1;
//     let count = 0;
//     console.log(rundomNumber);
//     let number = prompt("we have rundom from 1 to 100, find him");

//     (function choise(){
//         count++;
//         if(+rundomNumber > +number){
//             number = prompt("wrong, its biger ... try once more");
//             choise();
//         }else if(+rundomNumber < +number){
//             number = prompt("wrong, its less ... try once more");
//             choise();
//         }else if(rundomNumber === +number){
//             alert(`good job its ${rundomNumber}, and you try ${count} times`);
//         }else{
//             number = prompt("wrong, its not number ... try once more");
//             choise();
//         }
//     })()
// }
// playGame()

function playGame() {
    const rundomNumber = Math.floor(Math.random() * 100) + 1;
    let count = 0;
    let number;

    console.log(rundomNumber);

    while (true) {
        number = prompt("we have rundom from 1 to 100, find him");

        if (number === null) {
            alert("you give up");
            break;
        }

        number = +number;

        if (isNaN(number) || number < 1 || number > 100) {
            alert("insert normal number");
            continue;
        }

        count++;

        if (number < rundomNumber) {
            alert("wrong, its biger.");
        } else if (number > rundomNumber) {
            alert("wrong, its less");
        } else {
            alert(`good job its ${rundomNumber}, and you try ${count} times`);
            break;
        }
    }
}

playGame();