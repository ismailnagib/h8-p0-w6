/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

// PSEUDOCODE
  // STORE 'number' with any number
  // STORE 'string' with STRINGIFIED 'number'
  // STORE 'arr' with empty array
  // STORE 'reduction' with value EQUALS 3
  // STORE 'i' with LENGTH OF 'string' MINUS 1
  // WHILE 'i' IS GREATER THAN OR EQUALS 0
  //   UNSHIFT INDEX 'i' OF 'string' to 'arr'
  //   IF 'i' NOT EQUALS 0 AND 'i' EQUALS LENGTH OF 'string' MINUS 'reduction' THEN
  //     UNSHIFT "." to 'arr'
  //     ADD 'reduction' by 3
  //   END IF
  // END LOOP
  // RETURN "Rp" PLUS JOINED 'arr' PLUS ", 00"


// CODE
function formatUang(number) {
  var string = String(number);
  var arr = [];
  var reduction = 3;
  for (var i = string.length - 1; i >= 0; i--) {
    arr.unshift(string[i]);
    if (i !== 0 && i === string.length - reduction) {
      arr.unshift(".");
      reduction += 3;
    }
  }
  return "Rp" + arr.join("") + ",00";
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
