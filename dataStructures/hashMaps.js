// Hash Map

const nameMap = new Map([
  [1, 'John'],
  [2, 'Jack'],
  [3, 'Jill'],
]);

const myFunction = () => {};
const myObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'my function'],
  [myObj, 'my object'],
]);

// get values
console.log(nameMap.get(1));
console.log(map2.get(myFunction));
console.log(map2.get(myObj));

// set values
nameMap.set(4, 'Mike');
nameMap.set(5, 'Sara');
console.log(nameMap);

// check values
console.log(nameMap.has(1));
console.log(nameMap.has(10));

// remove values
nameMap.delete(1);
console.log(nameMap.has(1));

// get size
console.log(nameMap.size);

// iterating over a map
for (let [key, value] of nameMap) {
  console.log(key, value);
}

nameMap.forEach((value, key) => console.log(key, value));

// get keys - map iterator
console.log(nameMap.keys());

// get values - map iterator
console.log(nameMap.values());

// clear
nameMap.clear();
console.log(nameMap.size);

// challenge 1: word frequency
const wordFrequency = (str) => {
  const words = str.toLowerCase().split(/\W+/);

  const wordFrequency = new Map();

  //   for (const word of words) {
  //     if (word === '') continue;
  //     if (wordFrequency.has(word)) {
  //       wordFrequency.set(word, wordFrequency.get(word) + 1);
  //     } else {
  //       wordFrequency.set(word, 1);
  //     }
  //   }

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') continue;
    if (wordFrequency.has(words[i])) {
      wordFrequency.set(words[i], wordFrequency.get(words[i]) + 1);
    } else {
      wordFrequency.set(words[i], 1);
    }
  }

  return wordFrequency;
};

const result1 = wordFrequency('Hello Hi Hey Hey');
console.log('word frequency: ', result1);

const phoneNumbers = [
  'John:111-111-1111',
  'Jane:222-222-2222',
  'Joe:333-333-3333',
];

// challenge 2: phone directory
const phoneDirectory = (numbers) => {
  const directory = new Map();
  //   let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    // newArray = numbers[i].split(':');
    // directory.set(newArray[0], newArray[1]);

    // array destructuring
    const [name, phoneNumber] = numbers[i].split(':');
    directory.set(name, phoneNumber);
  }

  return directory;
};

const result2 = phoneDirectory(phoneNumbers);
console.log('phone directory: ', result2);
console.log(result2.get('Joe'));
