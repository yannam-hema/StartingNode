let a = 10;
let b=20;
console.log("Hi , This is the demo of sync and async functions in JavaScript");

// setting a timer

setTimeout(()=>{
    console.log("This is the setTimeout function")
}, 5000);

// file reading operation

fs.readFile("./sum.js", "utf-8", (err, data) => {
    console.log("File Data;",data);
});

// sync function

function subtract(x, y) {
    return x - y;
}

const result = subtract(a, b);

console.log("Subtraction", result);
