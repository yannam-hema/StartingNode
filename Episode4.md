# 🧠 Node.js 

## ✅ 1. Setting Up and Running Node.js Code

- We started with **VS Code**.
- Created a file named `app.js`.
- Ran the code using the command:

node app.js

- Node.js executed the JavaScript code in that file.

## ✅ 2. Writing Clean and Maintainable Code

- In production-grade applications, we **don’t write everything in one file**.
- To make the code **cleaner and more modular**, we **split it across multiple files**.

---

## ✅ 3. Understanding `require`, `module.exports`, and Modular Code

### 🧩 Problem:
If we split code into multiple files, how do we make functions or variables from one file available in another?

### 💡 Solution:
Use Node.js' **CommonJS module system**:
- `require()` to **import** code.
- `module.exports` or `exports` to **export** code.

###  Example:

**math.js**

```js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply
};
```

**app.js**

```js
const math = require('./math');

console.log(math.add(2, 3));       // Output: 5
console.log(math.multiply(4, 5));  // Output: 20
```

---

## ✅ 4. Key Takeaways

- `require('./filename')`: Used to import another file.
- `module.exports`: Used to share functions or variables from a file.
- This pattern helps in **maintaining** and **scaling** Node.js applications.
