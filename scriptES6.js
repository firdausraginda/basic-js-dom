// var vs let vs const

// var = function-scope
// let & const = block-scope

// ES5
function func5(param) {
    if (param) {
        var a = 'agi'
        var b = 1998 
    }
    console.log(a, b);
}

func5(true)

// ES6
function func6(param) {
    let a
    const b = 1998 
    if (param) {
         a = 'agi'
    }
    console.log(a, b);
}

func6(true)

console.log('======================================');

// immediate invoked function expression in ES5
(function(param){
    var f = 2
})('hallo')


// immediate invoked function expression in ES6
{
    const a = 12
    let b = 2
}

console.log('======================================');

let a = 'John'
let b = 'Smith'
const c = 1997

function calcAge(year){
    return 2019 - year
}

// ES5
console.log('This is ' + a + ' ' + b + '. He was born in ' + c + '. Today he is ' + calcAge(c) + ' years old.');

// ES6
console.log(`This is ${a} ${b}. He was born in ${c}. Today he is ${calcAge(c)} years old.`);

const n = `${a} ${b}`
console.log(n.startsWith('Jo'));
console.log(n.endsWith('ith'));
console.log(n.includes('oh'));
console.log(`${a} `.repeat(5));

console.log('======================================');

// forEach vs map
let arrFE = [1, 2, 3, 4, 5];
let arrM = [1, 2, 3, 4, 5];

arrFE.forEach((num, index) => {
    arrFE[index] = num * 2;
});
console.log(arrFE);

let doubled = arrM.map(num => {
    return num * 2;
});
console.log(doubled);

// map lebih cepet 70% dari foreach
// forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out
// map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)

console.log('======================================');

// arrow function

const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el
})
console.log(ages5);

// ES6
// 1 parameter and 1 line of code
let ages6 = years.map(el => 2016 - el)
console.log(ages6);

// 2 parameters and 1 line of code
ages6 = years.map((el, index) => `Age element ${index+1}: ${2016 - el}`)
console.log(ages6);

// 2 parameters and more than 1 lines of code
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear()
    const age = now - el
    return `Age element ${index+1}: ${age}`
})
console.log(ages6);

console.log('======================================');

// destructuring
// ES5
var john = ['john', 46]
var name = john[0]
var age = john[1]

// ES6
const [name6, year] = ['john', 46]

console.log(name6);
console.log(year);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj
console.log(firstName);
console.log(lastName);

const{firstName: fn, lastName: ln} = obj
console.log(fn);
console.log(ln);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year
    return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1990)
console.log(age2);
console.log(retirement);

console.log('======================================');

// arrays
const boxes = document.querySelectorAll('.box')

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes)

// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue'
// })

// ES6
boxes.forEach(el => el.style.backgroundColor = 'yellow')

// -----------------

// ES5
// for(var i=0; i<boxes.length; i++) {
//     if(boxes[i].className === 'box blue'){
//         continue;
//     }
//     boxes[i].textContent = "I'm changed to blue!"
// }

// ES6
// array in ES6 which can operate continue and break
for (const cur of boxes) {
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = "I'm changed to yel!"
}

// -----------------

// ES5
var ages = [12, 17, 8, 21, 14, 11]
var full = ages.map(function(cur){
    return cur >= 18
})
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
let idxFind = ages.findIndex(cur => cur >= 18)
let findEl = ages.find(cur => cur >= 18)
console.log(idxFind);
console.log(findEl);

console.log('======================================');

// the spread operator
agesAgain = [18, 30, 12, 21]
function addFourAges(a,b,c,d) {
    return a+b+c+d
}

// ES5
var hasilSum5 = addFourAges.apply(null, agesAgain)
console.log(hasilSum5);

// ES6
const hasilSum6 = addFourAges(...agesAgain)
console.log(hasilSum6);

const familySmith = ['john', 'jane', 'mark']
const familyMiller = ['marry', 'bob', 'ann']

const bigFamStr = familySmith + 'lily,' + familyMiller
const bigFamArr = [...familySmith, 'lily', ...familyMiller]

console.log(bigFamStr);
console.log(bigFamStr.length);

console.log(bigFamArr);
console.log(bigFamArr.length);

const h = document.querySelector('h1')
const boxes2 = document.querySelectorAll('.box')
const allEl = [h, ...boxes2]

allEl.forEach(cur => cur.style.fontStyle = 'italic')
allEl.forEach(cur => cur.style.color = 'brown')

console.log('======================================');

// rest parameters

// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1)
    console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log(2016 - cur);
        console.log((2016 - cur) >= limit);
    })
}

isFullAge5(30, 1990, 1999, 1965, 2016, 1987)

// ES6
function isFullAge6(limit, ...years6){
    years6.forEach(cur => {
        console.log(2016-cur);
        console.log((2016-cur) >= limit)
    })
}

isFullAge6(30, 1990, 1999, 1965, 2016, 1987)

console.log('======================================');

// default parameters
// ES6
function person(a, b='Smith'){
    console.log(a + ' ' + b);
}

person('john')
person('agi', 'bambang')

console.log('======================================');

// maps
const question = new Map()
question.set('question', 'what is the official name of the latest major JS version?')
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('correct', 3)
question.set(true, 'Correct answer')
question.set(false, 'Wrong, please try again!')

console.log(question);
console.log(question.get('question'));
console.log(question.size);

// question.has(4) ? question.delete(4) : console.log('tidak ada key 4');

// question.clear()

question.forEach((value, key) => console.log(`This is ${key}, and it's set to: ${value}`))

const ans = parseInt(prompt('Write the correct answer: '))
console.log(question.get(ans === question.get('correct')));

console.log('======================================');
