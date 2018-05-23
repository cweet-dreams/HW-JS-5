// Функция.Задачи
//6

function newString(arr, func) {
    let result = 'New value:';

    for (let i = 0; i < arr.length; i++) {

        result += func(arr[i]);
    }
    return result;
}

function camelCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += i === 0 ? str[i].toUpperCase() : str[i];
    }

    return result;
}
function multiplyFunc(element) {
    return ' ' + element * 10 + ',';
}
function personAge(value) {
    return ' ' + value.name + ' ' + 'is' + ' ' + value.age + ',';
}
function reverseFunc(str) {
    res = ' ';

    for (let i = str.length-1; i >= 0; i--) {
        res += str[i];
    }

    return res + ',';
}
function strNum(number) {
    return ' ' + number + 5 + ',';
}

console.log(newString(['my', 'name', 'is', 'Trinity'], camelCase));
console.log(newString([10, 20, 30], multiplyFunc));
console.log(newString([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], personAge));
console.log(newString(['abc', '123'], reverseFunc));
console.log(newString([1, 2, 3], strNum));

//every
let users = [
    {
        name: 'Denis',
        age: 29,
        balance: 250
    },
    {
        name: 'Ivan',
        age: 16,
        balance: 100
    }
];

function every(arr, func) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i]);
            if (newArr.length !== 0) {
                return true
            }
        }
        else {
            return false
        }
    }
}

let customFil = every(users, (item, i, arr) => item.age < 18);
console.log(customFil);

// some
function some(arr, func) {
    let newArr = [];
    let someRes = '';

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
        someRes = newArr.length > 0;
    }

    return someRes;
}

function handler(user, i, arr) {
    if (user.age >= 18) {
        return arr[i]
    }
}

console.log(some(users, handler));


//some

//Массивы.Задачи
//2
let numberArr = [2, 4, 7, 1, -2, 10, -9];
numberArr.sort((prev, next) => next - prev);
console.log(numberArr);

//3
function getNewArray(arr, a, b) {
    return arr.slice(a, b + 1);
}

console.log(getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4));

//8

function arrSorted(arr) {
    let resultStr = '';
    let indexArr = [];

    for (i = 0; i < arr.length; i++) {
        resultStr += arr[i].length;
        indexArr = resultStr.split('');
        indexArr.sort((prev, next) => prev - next);
    }

    return indexArr;
}

console.log(arrSorted([[14, 45], [1], ['a', 'c', 'd']]));

//10
coreArray = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'amd', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'amd', info: {cores: 4, cache: 2}},
];

coreArray.sort((prev, next) => prev.info.cores - next.info.cores);

console.log(coreArray);

//11
const products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(arr, a, b) {
    let filterRes = arr.filter(product => product.price >= a && product.price <= b);
    return filterRes.sort((prev, next) => prev - next);
}
console.log(filterCollection(products, 15, 30));

//Массивы ES-5
//2

let array = [1, 2, 3, 5, 8, 9, 10];

let mapResult = array.map(function (element) {
    element = {
        digit: element
    };
    element['odd'] = element.digit % 2 === 1 ? true : false;

    return element;
});
console.log(mapResult);

//5

let arrStart = [{char: "a", index: 12}, {char: "w", index: 8}, {char: "Y", index: 10}, {
    char: "p",
    index: 3
}, {char: "p", index: 2},
    {char: "N", index: 6}, {char: " ", index: 5}, {char: "y", index: 4}, {char: "r", index: 13}, {
        char: "H",
        index: 0
    },
    {char: "e", index: 11}, {char: "a", index: 1}, {char: " ", index: 9}, {char: "!", index: 14}, {
        char: "e",
        index: 7
    }];

function func(arr) {
    arr.sort((prev, next) => prev.index - next.index);
    return arr.reduce((sum, current) => sum + current.char, '');
}

console.log(func(arrStart));
