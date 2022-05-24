// console.log(localStorage.length);
// localStorage.setItem('firstname', 'Adam');
// localStorage.setItem('lastname', 'Smith');
// console.log(localStorage.getItem('lastname'));
// console.log(localStorage.length);
// localStorage.removeItem('lastname');
// console.log(localStorage.length);
// localStorage.clear();
// console.log(localStorage.length);

// console.log(sessionStorage.length);
// sessionStorage.setItem('firstname', 'Adam');
// sessionStorage.setItem('lastname', 'Smith');
// console.log(sessionStorage.getItem('lastname'));
// console.log(sessionStorage.length);
// sessionStorage.removeItem('lastname');
// console.log(sessionStorage.length);
// sessionStorage.clear();
// console.log(sessionStorage.length);

// const myObj = {
//     name: 'Angel',
//     age: 20,
// }

// localStorage.setItem('myData', JSON.stringify(myObj));

// const recoveredObj = JSON.parse(localStorage.getItem('myData'));
// console.log(recoveredObj);

let organization = {
    name: 'trybe',
    since: 2019,
}

let storage = localStorage;

storage.setItem('trybe', JSON.stringify(organization));
let org = JSON.parse(storage.getItem('trybe'));
console.log(org);

let classe = ['2019/set', '2019/oct'];
storage.setItem('classe', JSON.stringify(classe));
let cls = JSON.parse(storage.getItem('classe'));
console.log(cls);