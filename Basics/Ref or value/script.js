"use strict";

let a = 5,
    b = a;

// console.log(a);
// console.log(b);

const obj = {
    a: 5,
    b: 1,
};

// const objCopy = obj; // reference

// objCopy.a = 10;

// console.log(obj);
// console.log(objCopy);

// custom function to copy objects
function createObjCopy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

// method to clone objects
// const clone = Object.assign({}, obj);
// clone.a = 10;

// console.log(obj);
// console.log(clone);

let oldArr = [1,2,3,4];
let newArr = oldArr.slice();
newArr[0] = 20;
// console.log(oldArr, newArr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(...internet);

// spread operator copy
newArr = [...oldArr];
let newObj = {...obj};
console.log(newArr, newObj);