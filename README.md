# 🛒 FlexCart – Modern E-Commerce Web App

- **Live Site:** [FlexCart](https://taoshif1.github.io/PH-A6.2-FlexCart/) 
- **API Used:** [Fake Store API](https://fakestoreapi.com)
---

## 🚀 Project Overview
FlexCart is a fully responsive, dynamic E-Commerce website built using **HTML, CSS & Vanilla JavaScript**. It simulates a real-world online shopping experience by fetching live product data & rendering it dynamically on the UI.

### Key Focus Areas:
*   Real API integration
*   Dynamic DOM manipulation
*   Asynchronous data handling
*   Cart state management
*   Clean UI/UX design

---

## 🧰 Technology Stack
*   **HTML5**
*   **CSS3 / Tailwind CSS**
*   **Vanilla JavaScript** (ES6+)
*   **Fake Store API**

---

## 🌐 API Endpoints Used
| Action | Endpoint |
| :--- | :--- |
| **Get All Products** | `https://fakestoreapi.com/products` |
| **Get All Categories** | `https://fakestoreapi.com/products/categories` |
| **Get Products by Category** | `https://fakestoreapi.com/products/category/${category}` |
| **Get Single Product** | `https://fakestoreapi.com/products/${id}` |

---

## 🎨 UI / UX Design Implementation
*   **Navbar:** Logo, responsive navigation links & a cart icon with a dynamic item count.
*   **Hero Section:** High-impact banner with a "Shop Now" Call-to-Action (CTA).
*   **Features Section:** Highlights Fast Delivery, Secure Payment, 24/7 Support & Premium Quality.
*   **Trending Section:** Displays top-rated products using real API rating data.
*   **Footer:** Newsletter subscription & social/quick links.

---

## ⚡ Dynamic Features & Functionalities
1.  **Category Loading:** Categories are fetched & generated dynamically.
2.  **Smart Filtering:** Clicking a category updates the grid & highlights the active button.
3.  **Interactive Product Cards:** Includes images, truncated titles, price badges & quick-action buttons.
4.  **Product Details Modal:** Fetches specific product data by ID to populate a detailed view.
5.  **Cart System:** 
    *   Add/Remove items.
    *   Dynamic Navbar count updates.
    *   Real-time price calculation using `reduce()`.
6.  **UX Enhancements:** Loading spinners during API calls & active state styling for navigation.

---

## 🧠 Problems & Difficulties Faced
*   **Asynchronous Behavior:** Managed `async/await` flows to ensure data was received before rendering.
*   **DOM Manipulation:** Optimized performance by using `forEach()` & reusable button creation functions instead of inline `onclick` handlers.
*   **State Management:** Solved cart duplication & total calculation issues by maintaining a central array state.
*   **Modal Sync:** Implemented dynamic population to ensure the correct product data was displayed upon clicking "Details."

---

## 📱 Responsiveness
The layout is fully mobile-responsive using Tailwind CSS utilities:
*   **Mobile:** 1 Column
*   **Tablet:** 2 Columns
*   **Desktop:** 3-4 Columns

---

## 📌 Rules Followed
- ✅ Meaningful commits
- ✅ No dummy text
- ✅ Real API integration
- ✅ Fully dynamic content

---

### 📚 Question-Answers

#### 1) What is the difference between `null` & `undefined`?

> undefined means a variable has been declared but has not been assigned a value yet.

> null means an intentional absence of value.

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```
---

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

`map()`

- Used to transform each element in an array.

- Returns a new array.

- Does not modify the original array.

`forEach()`

- Used to loop through elements.

- Does not return anything.

- Mainly used for side effects.

```js
const numbers = [1, 2, 3];

// map()
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// forEach()
numbers.forEach(num => console.log(num));
// Logs: 1 2 3
```
---

#### 3) What is the difference between `==` & `===`?

- `==` (double equals) checks value only & performs type conversion.

- `===` (triple equals) checks both value & data type (strict comparison).

```js
5 == 5;        // true
"5" == 5;      // true (type conversion happens)

5 === 5;       // true
"5" === 5;     // false (different data types)

```

> Always prefer `===` in modern JavaScript to avoid unexpected type coercion.

---

#### 4) What is the significance of `async`/`await` in fetching API data?

- `async` is used before a function to make it asynchronous.

- `await` pauses the execution of the function until a Promise resolves.

This makes asynchronous code look & behave like synchronous code, making it cleaner & easier to read.

```js
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
```

> `await` ensures the code waits for the data before moving to the next line.

---

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

`Global Scope`

- Variables declared outside any function or block.
- Accessible from anywhere in the program.
 
 ```js 
 let name = "Taoshif";
```

`Function Scope`

- Variables declared inside a function.
- Accessible only within that function.

```js
function greet() {
  let message = "Hello";
  console.log(message);
}
```

`Block Scope`

- Variables declared using let or const inside { }.
- Accessible only within that block.

```js
if (true) {
  let age = 22;
  console.log(age); // works
}

console.log(age); // Error
```

> `var` does NOT support block scope but `let` & `const` do.