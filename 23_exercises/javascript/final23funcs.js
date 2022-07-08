/* 2. Write a JavaScript function that returns true if the provided predicate function returns 
true for all elements in a collection, false otherwise.*/

const arr = [9, 30, 40, 35, 57];
let evr = arr.every(myFunc1);

document.getElementById("display1").innerHTML = evr;

function myFunc1(value) {
    return value > 10;
}

/* Number 2: Class correction from CHAO */

// i will use the array.prototype.every()
let all = (arr, fn, Boolean) => arr.every(fn);
console.log(all([4, 2, 3], x => x > 1))
//output: true

/* 3. Write a JavaScript program to split values of two given arrays into two groups. 
If an element in filter is truthy, the corresponding element in the collection belongs 
to the first group; otherwise, it belongs to the second group.  */
/* Number 3: Class correction from CHAO */

//method 1(Chao): I will use the reduce and push
let program = (arr, filter) => arr.reduce((ac, val, i) => (ac[filter[i] ? 0 : 1].push(val), ac, [[], []])


//method 2(Zeldris): I will use the split and splice
function Split(arr, filter) {
        let newArr = [[], []];
        for (let i = 0; i < arr.length; i++) {
            if (filter[i]) {
                newArr[0].push(arr[i])
            } else {
                newArr[1].push(arr[i])
            }
        }
        return newArr;
    }

//method 3(Teacher): I will use the map
let classify = (arr1, filter) => [
    [...arr1.filter((item, i) => filter[i])],
    [...arr.filter((item, i) => !filter[i])]
]
console.log(program([1, 2, 3, 4, 5], [0, 1, false, true, null]));
console.log(split([1, 2, 3, 4, 5], [0, 1, false, true, null]));
console.log(classify([1, 2, 3, 4, 5], [0, 1, false, true, null]));

/* 4. Write a JavaScript program to remove specified elements from the left of a given array of elements.*/

let lefRem = arr.shift();
document.getElementById("display2").innerHTML = lefRem + " was just removed from the left of the collection";

function myFunc2() {
    return lefRem;
}

// Class corretion. (removes only 1)
let arr1 = [9, 20, 30];
function remLeft(x) {
    let leftRem = x.shift()
}
console.log(remLeft(arr1))

//method 2(Chao): Removes universally
function removeFromLeft(arr, n = 1) {
    return arr.slice(n);
}
console.log([1, 3, 5, 2]);
//Output: [3, 5, 2]



/* 5. Write a JavaScript program to remove specified elements from the right of a given array of elements. */

let rightRem = arr.pop();
document.getElementById("display3").innerHTML = rightRem + " was just removed from the right of the collection";

function myFunc3() {
    return rightRem;
}


//Method 1:
function myFruits(a){
    let newAr = [];
    newAr = a.pop()
    return newAr
}

/* 7. Write a JavaScript program to get every nth element in a given array.  */

let num = [];
let ninf = Number.POSITIVE_INFINITY;
document.getElementById("display4").innerHTML = ninf;


/* 10. Write a JavaScript program to dcapitalize the first letter of a string.  */
function decapFirst(str){
    //let str =inp;
    let extrt = str.charAt(0);
    let str2 = extrt.toLowerCase();
    newStr = str2 + str.slice(1);
    return newStr;
    }
    decapFirst();
console.log(newStr);
document.getElementById("display5").innerHTML = newStr;


/* 12. Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no.  */

let boolVal = [["y/yes", "n/no"], ["n/no", "n/no"]];
let res = boolVal.some(myFunc4);
document.getElementById("display6").innerHTML = res;
function myFunc4() {
    return boolVal;
}


/* 15. Write a JavaScript program to convert a value to a safe integer.  */

let x = 9.8564;
y = x.parseInt();
document.getElementById("display7").innerHTML = y + " is the integer derived from";