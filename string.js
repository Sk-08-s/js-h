const name="op";
const repo =50;
console.log(name + repo + "thug"); // "op"
// string interpolation using backticks
console.log(`Hello, ${name}! You have ${repo} new messages.`); // "Hello, op! You have 50 new messages."
// template literals
const game = new String("chess");
/*String {'Ark'}0: "A"1: "r"2: "k"length: 3
[[Prototype]]: String anchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""
[[PrimitiveValue]]: "Ark"*/
console.log(game); // String {'Ark'}
console.log(game.length);
console.log(game[0]); // "A"
console.log(game.charAt(1));
//__proto__: String is the prototype of String
console.log(game.__proto__); // String {constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
console.log(game.__proto__ === String.prototype); // true
// String.prototype is the prototype of String
console.log(String.prototype); // String {constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
console.log(game.toUpperCase()); // "CHESS"
console.log(game.toLowerCase()); // "chess"
console.log(game.includes("he")); // true
console.log(game.startsWith("ch")); // true
console.log(game.endsWith("ss")); // true
console.log(game.indexOf("es")); // 2
console.log(game.lastIndexOf("s")); // 3
console.log(game.slice(0, 2)); // "ch"
console.log(game.substring(0, 2)); // "ch"
console.log(game.substr(0, 2)); // "ch"
console.log(game.repeat(3)); // "chesschesschess"
console.log(game.split("e"));
const game2 = game.substring(0,3);
console.log(game2); 

console.log(game.repeat(5));
const newst = "    rajesh    "; 
console.log(newst);
console.log(newst.trim()); // "rajesh"
console.log(newst.trimStart()); // "rajesh    "
console.log(newst.trimEnd()); // "    rajesh"
console.log(newst.replace("rajesh", "Sahil")); // "    Sahil    "
console.log(newst.replaceAll("rajesh", "Sahil")); // "    Sahil    "
console.log(newst.replace(/rajesh/g, "Sahil")); // "    Sahil    " g means global search it will replace all occurrences
console.log(newst.replace(/rajesh/i, "Sahil")); // "    Sahil    " i means case insensitive search
console.log(newst.replace(/rajesh/gi, "Sahil")); // "    Sahil    "gi means global and case insensitive search
console.log(newst.match(/rajesh/g)); // ["rajesh"] here it is case sensitive
console.log(newst.match(/rajesh/i)); // ["rajesh"] g means replace all occurrences, i means case insensitive
const url = "https://www.example.com/path?query=string#hash"; 
console.log(url.includes("example")); // true
console.log(newst.split("j")); // ["    ra", "esh    "] as split(separator,limit) it will split the string into an array
//__ptoto__: String is the prototype of String 
console.log(newst.__proto__);






