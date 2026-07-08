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