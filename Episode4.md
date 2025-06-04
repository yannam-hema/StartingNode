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


## Nested Modules
 
 Certainly, Hema! Here's a clean `.md` (Markdown) file that **explains only the concept of nested modules** in your Node.js project — focusing on how modules are organized and imported.

---

### 📄 `nested-modules.md`

## 📁 Folder Structure

```

StartingNode/
├── app.js
└── module-one/
├── index.js
├── subtract.js
└── divide.js

````

---

## 🔄 What Are Nested Modules?

Nested modules refer to organizing reusable code into multiple files (modules) inside a directory (e.g., `module-one/`) and using an `index.js` file to re-export them for clean and centralized access.

---

## 🔧 How It Works

### 1. **Inner Modules** (`subtract.js`, `divide.js`)

Each file contains a single function and exports it:

#### `subtract.js`
```js
function subtract(a, b) {
    return a - b;
}

module.exports = { subtract };
````

#### `divide.js`

```js
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Cannot divide by zero';
    }
}

module.exports = { divide };
```

---

### 2. **Central Export File** (`index.js`)

This file acts as an aggregator and re-exports the functions:

```js
const { subtract } = require('./subtract');
const { divide } = require('./divide');

module.exports = { subtract, divide };
```

This way, other files only need to import from the folder (`./module-one`) without worrying about internal file paths.

---

### 3. **Importing in Main File** (`app.js`)

Instead of importing each module separately:

```js
const { subtract, divide } = require('./module-one');
```

Node.js automatically looks for `index.js` inside the folder and uses the exported object.

---

## ✅ Benefits of Nested Modules

* Better **code organization**
* Easy to **scale** with more functions
* Cleaner **import paths**
* Encourages **separation of concerns**

---

## 🧠 Summary

Nested modules use a folder (like `module-one`) to group related modules, and the `index.js` file simplifies exporting and importing them in other parts of the app.

```

