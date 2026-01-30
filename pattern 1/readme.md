# 🧠 Pattern 1 – Build Frequency Map

Count how many times each element appears in an array or string.

---

## 📌 Problem Type
Problems where you need to **count occurrences**.

Example:


Input:  [1, 2, 2, 3, 1, 1] Output: {1:3, 2:2, 3:1}

---

## 🧠 Pattern Recognition
If the problem says:
- “Count frequency”
- “How many times does X appear”
- “Most frequent / least frequent element”
- “Check duplicates / unique elements”

👉 Think: **Frequency Map**

---

## 🔍 Core Idea
1. Create a map
2. Traverse the array
3. For each element:
   - Get existing count (or 0)
   - Add 1
4. Store back in map

---

## 💻 JavaScript Template

```javascript
function buildFrequency(arr) {
    const freq = new Map();

    for (let x of arr) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    return freq;
}

##

##🧪 Example

const arr = [1, 2, 2, 3, 1, 1];
const freq = buildFrequency(arr);

console.log(freq);
// Map { 1 => 3, 2 => 2, 3 => 1 }


##🧩 Mental Recall

Traverse array
Get count or 0
Add 1
Store back


##🗝️ Key Logic


freq[x] = (freq[x] || 0) + 1


##🔗 Used As Base For
Min / Max by Frequency
Frequency Conditions (==k, >1, unique)
Anagram / Ransom Note
Majority Element
Top-K Frequent Elements