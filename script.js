// Ternary Operator

person = 'agi'

person == 'agi' ? console.log('ganteng') : console.log('jelek');

job = 'swimmer'

switch (job){
    case 'teacher':
        console.log(person + ' mengajar');
        break
    case 'student':
        console.log(person + ' belajar');
        break
    case 'swimmer':
        console.log(person + ' berenang');
        break
    case 'father':
        console.log(person + ' ayah');
        break
    default:
        console.log(person + ' nganggur');
}

console.log('======================================');

// falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values
var height
height = 0 ;

if (height || height === 0){
    console.log('variable is defined');
}else{
    console.log('variable has NOT been defined');
}

// function declaration/statement didn't produce immediate result
// function abc(){}

// function expression produce immediate result
// var temp = function(){}

console.log('======================================');

// array
var names = ['fakry', 'agi', 'witsqa']
var ages = new Array('muda', 'tua', 'bocah')

names[1] = 'joko'
names[names.length] = 'aji'
console.log(names);

idx = names.indexOf('witsqa')
console.log('index ke ' + idx);

var result = names.indexOf('agi') == 0 ? 'muncul awal' : 'salah';
console.log(result);

console.log('======================================');

// object
var person = {
    firstName: 'Raginda',
    lastName: 'Firdaus',
    birthYear: 1997,
    family: ['mama', 'papa', 'bio', 'abdan'],
    job: 'engineer',
    isMarried: false,
    countAge: function(){
        this.age = 2019 - this.birthYear
    }
}

console.log(person.firstName);
console.log(person['lastName']);
key = 'birthYear'
console.log(person[key]);
person.countAge()
console.log(person)

console.log('======================================');

// new object syntax
var school = new Object()
school.name = 'SMA Teladan Bandung Selata'
school.addres = 'Jl. takabur bin ajaib'
school.students = '12131'
school.subjects = ['IPA', 'IPS', 'SASTRA']
console.log(school);

console.log('======================================');

// looping and iterations
var item = ['bread', 'apple', false, 20, 0.91]
for (var i=0; i<item.length; i++){
    if(typeof item[i] !== 'string') continue
        console.log(item[i]);
}

console.log('======================================');

// callback function
function example(){
    alert('this function triggered')
}
document.querySelector('.btn-click-me').addEventListener('click', example)

// anonymous function
document.querySelector('.btn-click-me').addEventListener('click', function(){
    var randNumber = Math.floor(Math.random() * 6)
    alert(randNumber)
})

console.log('======================================');

// primitives
// number, string, boolean, undefined, null

// object
// Array, function, object, dates

// function constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// inheritance
Person.prototype.calculateAge = function(){
    console.log(2016-this.yearOfBirth);
}

var john = new Person('John', 1992, 'teacher');
var jane  = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// object.create
var personProto = {
    calculateAge2: function(){
        console.log(2016 - this.yearOfBirth);
    }
}

var john2 = Object.create(personProto);
john2.name = 'John'
john2.yearOfBirth = '1990'
john2.job = 'teacher'

var jean2 = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
})

console.log('======================================');

// primitive vs object

// primitive
var a = 23
var b = a
a = 46
console.log(a);
console.log(b);

// object
var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1
obj1.age = 30
console.log(obj1.age);
console.log(obj2.age);

// function
var age = 27
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj)
console.log(age);
console.log(obj.city);

console.log('======================================');

// passing function as arguments
// callback function
var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn) {
    var arrRes = []
    for (var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}

function calculateAge3(el){
    return 2016 - el
}

function isFullAge(el){
    return el >= 18
}

function rates(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el))
    }else{
        return -1
    }
}

var ages = arrayCalc(years, calculateAge3)
var fullAges = arrayCalc(ages,isFullAge)
var rates = arrayCalc(ages, rates)

console.log(ages);
console.log(fullAges);
console.log(rates);

console.log('======================================');

// function returning function
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if (job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach, ' + name + '?');
        }
    }else{
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John')

interviewQuestion('designer')('jean');

interviewQuestion('progammer')('agi');

console.log('======================================');

// Immediately Invoked Function Expression (IIFE) for data privacy

// function game(standard) {
//     var score = Math.random() * 10;
//     console.log(score >= standard);
// }
// game(5)

(function (standard) {
    var score = Math.random() * 10;
    console.log(score >= standard);
})(5);

console.log('======================================');

// closures
// inner function can access variables and parametes of its outer function, even after the outer function has returned
function interviewQuestion2(job){
    var greeting = 'hello! ' 
    return function(name){
        if (job === 'designer') {
            console.log(greeting + name + ', can you please explain what UX design is?');
        }else if (job === 'teacher') {
            console.log(greeting + 'what subject do you teach, ' + name + '?');
        }else{
            console.log(greeting + name + ', what do you do?');
        }
    }
}

interviewQuestion2('designer')('michael')
interviewQuestion2('teacher')('scofield')
interviewQuestion2('cop')('bellick')

console.log('======================================');

// bind, call, apply
var scofield = {
    name: 'scofield',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }else if (style === 'friendly'){
            console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
}

var emily = {
    name: 'emily',
    age: 35,
    job: 'designer'
}

scofield.presentation('formal', 'afternoon')

// method borrowing with .call
scofield.presentation.call(emily, 'friendly', 'evening')

// create a function with preset argument with .bind
var scofieldFriendly = scofield.presentation.bind(scofield, 'friendly')

scofieldFriendly('morning')
scofieldFriendly('dawn')

var emilyFormal = scofield.presentation.bind(emily, 'formal')
emilyFormal('night')

// study case
var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc2(arr, fn) {
    var arrRes = []
    for (var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}

function calculateAge4(el){
    return 2016 - el
}

function isFullAge2(limit, el){
    return el >= limit
}

var agesBind = arrayCalc2(years, calculateAge4)
var fullJapan = arrayCalc2(agesBind, isFullAge2.bind(this, 20))
console.log(agesBind);
console.log(fullJapan);

console.log('======================================');

// foreach
arr = ['agi', 'yogi', 'kunto', 90, true, false, 9123, 621, 'adalah']
arr.forEach((current, index, array) => {
    if (current === 9123) {
        console.log(index);
        console.log(current);
    }
})

console.log('======================================');

// DOM event target, event bubbling / event delegation
var container = document.querySelector('.container')
container.addEventListener('click', function(event){
    var itemId = event.target.parentNode.id
    if (itemId.match('id')){
        var splitId = itemId.split('_')
        console.log(splitId[1]);
        
    } 
    
})

console.log('======================================');

// splice to delete and indexOf
var idFind = 'id_7'
var data = {
    allItems: {
        exp: ['id_1','id_2','id_3'],
        inc: ['id_4','id_5','id_6', 'id_7']
    }
}
var type = 'inc'
var inc = data.allItems[type]
var idx = inc.indexOf(idFind)
data.allItems[type].splice(idx, 1)
console.log(data.allItems[type]);

console.log('======================================');

// convert type of data
var x = '2.98'
var y = '3'
console.log(typeof x);
x = parseInt(x)
console.log(x + 8);
if (y !== 3){
    console.log('benar');
}else{
    console.log('salah');
}

console.log('======================================');

// pembulatan beberapa angka setelah koma
var angka = +2.19283
angka = Math.abs(angka)
angka = angka.toFixed(3)
angka = parseFloat(angka)
console.log(angka);

console.log('======================================');

// handle angka format uang
var strRupiah, counter, angkaRupiah
strRupiah = 123456
strRupiah = strRupiah.toString()
counter = 0
angkaRupiah = ''

if (strRupiah.length > 3) {
    for (var i=strRupiah.length - 1; i>=0; i--){
        angkaRupiah += strRupiah[i]
        counter++
        if (counter == 3 && strRupiah[i-1] != null){
            angkaRupiah += '.'
            counter = 0
        }
    }
    angkaRupiah = "Rp." + angkaRupiah.split("").reverse().join("")    
}else{
    angkaRupiah = "Rp." + strRupiah
}

console.log(strRupiah);
console.log(angkaRupiah);

console.log('======================================');

// nyeleksi 2 element yg berbeda dgn querySelectorAll
var inputan, loop

loop = function(){
    inputan = document.querySelectorAll('#nama' + ',' + '#umur')    
    inputan.forEach((current) => {
        console.log(current.value);
        current.value = ''
    })
    inputan[0].focus()
}

// handle click
document.getElementById('resetForm').addEventListener('click', loop)

// handle keypress
document.querySelector('#umur').addEventListener('keypress',() => {
    if (event.keyCode === 13) {
        loop()
    }
})

console.log('======================================');

// get month and year
var now, months, month, year, date;

now = new Date()

months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des']

month = now.getMonth()
year = now.getFullYear()
date = now.getDate()

console.log(date, months[month], year);

console.log('======================================');
