
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

const number = prompt('insert rundom number');

getdividers(number);

function getdividers(number){
    let result = "";

    if(!+number){
        result = "none"
    }else{
        for (let i = 0; i <= number; i++) {
            number % i === 0 ? result += `${i} ` : result   
        }
    }


    alert(result.trim())
}