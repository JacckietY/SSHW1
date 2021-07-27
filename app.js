// T A S K  1
let length;
let width;
let height;
let walls;
let cellfloor;
let square;
let amountOfBuckets;
let output1 = document.querySelector('.output1');
let outputpaint1 = document.querySelector('.outputpaint1')
let calcResult = document.querySelector('.calculation1');
let calculateFunction1 = () => {
    length = document.querySelector('.length1').value;
    width = document.querySelector('.width1').value;
    height = document.querySelector('.height1').value;
    if(length<=1000 && width<=1000 && height<=1000
        && length>=1 && width>=1 && height>=1){
        walls = length*height*4;
        cellfloor=length*width*2;
        square=walls+cellfloor;
        amountOfBuckets=Math.ceil(square/16);
        output1.value=`площадь покраски помещения = ${square}`;
        outputpaint1.value=`необходимое количество ведер с краской = ${amountOfBuckets}`;
        console.log(square);
    }else{
        alert('Введите числа от 1 до 1000!');
    }
};
calcResult.addEventListener('click',calculateFunction1);

// T A S K  2
console.log('T A S K  2')
const A1 = 67;
const A2 = 34;
const A3 = 57;

const B1 = 23;
const B2 = 39;
const B3 = 71;

let results = [];

let calcResults2 = () => {
    if(A1<=100 && A2<=100 && A3<=100 && B1<=100 && B2<=100 && B3<=100){
        results[0] = A1*B1 + A2*B2 + A3*B3;
        results[1] = A1*B1 + A2*B3 + A3*B2;
        results[2] = A2*B1 + A1*B2 + A3*B3;
        results[3] = A2*B1 + A1*B3 + A3*B2;
        results[4] = A3*B1 + A1*B2 + A2*B3;
        results[5] = A3*B1 + A1*B3 + A2*B2;
    }else alert('Введите числа не превышающие 100');

}
calcResults2(results);
console.log(results);
console.log(`Best profit ${Math.max(...results)} variant ${results.indexOf(Math.max(...results))+1}`);

// T A S K  3
console.log('T A S K  3')
let ticketnumber = 385916;
let numbers = [];
while ( ticketnumber > 0 ){
    numbers.push(ticketnumber % 10);
    ticketnumber = parseInt(ticketnumber / 10);
}
numbers.reverse();
console.log(`your numbers are ${numbers}`);

if(numbers[0] + numbers[1] + numbers[2] == numbers[3] + numbers[4] + numbers[5])console.log('YES');
else console.log('NO');