# JavaScript Notes 📝

---

## 01. Variables
- var → function scoped, can be redeclared
- let → block scoped, cannot be redeclared
- const → block scoped, cannot be reassigned

---

## 02. Data Types
- 7 primitive types: string, number, boolean, null, undefined, bigint, symbol
- typeof operator → checks data type
- Tricky: typeof null = "object" (JS bug)
- null vs undefined:
  - null = intentionally empty
  - undefined = never assigned
---

## 03. Conditionals
- if/else → basic decision making
- else if → multiple conditions check
- Ternary → shorthand: condition ? true : false
- Switch → multiple exact value matching
- Always use === not == (strict equality)
- break in switch is mandatory to stop fall-through
---

## 04. Type Conversions
- Implicit conversion → JS automatically converts types
- Explicit conversion → developer manually converts
- String to Number: Number("10") → 10
- Number to String: String(10) → "10"
- Falsy values: 0, "", null, undefined, NaN, false
- Truthy values: everything else
- Tricky: Number("") → 0, Number(null) → 0, Number(undefined) → NaN

----

## 05. Stack vs Heap Memory
- Primitive types → stored in Stack (copy by value)
  - let a = 10; let b = a; b = 20; → a stays 10
- Non-primitive types → stored in Heap (copy by reference)
  - let obj1 = {val:10}; let obj2 = obj1;
  - obj2.val = 20 → obj1.val also becomes 20
  - Both variables point to SAME memory location in heap
- Key rule: Objects/Arrays are always passed by reference


## 06. Arrays
- Array = ordered collection of elements
- Index starts from 0
- const arr = [1,2,3] → still mutable (const means reference fixed)
- Spread operator: [...arr1, ...arr2] → merge arrays
- arr.flat(Infinity) → flattens nested arrays completely
- Array.isArray(val) → checks if value is array
- Array.from("Ayushi") → creates array from string
- Array.of(s1,s2,s3) → creates array from values