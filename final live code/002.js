/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/
// PSEUDOCODE
  // STORE 'sentence' with any string
  // STORE 'words' with any string
  // STORE 'arr' with empty array
  // STORE 'temp' with empty string
  // STORE 'i' with 0
  // WHILE 'i' IS LESS THAN THE LENGTH OF 'sentence'
  //   IF INDEX 'i' OF 'sentence' EQUALS " " THEN
  //     PUSH 'temp' to 'arr'
  //     CHANGE 'temp' to ""
  //   ELSE THEN
  //     ADD 'temp' by INDEX 'i' OF 'sentence'
  //   END IF
  //   IF 'i' EQUALS THE LENGTH OF 'sentence' MINUS 1 THEN
  //     PUSH 'temp' to 'arr'
  //   END IF
  //   ADD 'i' by 1
  // END LOOP
  // STORE 'asterisk' with empty string
  // STORE 'j' with 0
  // WHILE 'j' IS LESS THAN THE LENGTH OF 'arr'
  //   IF THE LENGTH OF INDEX 'j' OF 'arr' EQUALS THE LENGTH OF 'words' OR INDEX 0 TO INDEX LENGTH - 2 OF INDEX 'j' OF 'arr' EQUALS 'words' THEN
  //     STORE 'k' with 0
  //     WHILE 'k' < THE LENGTH OF INDEX 'j' OF 'arr'
  //       ADD 'asterisk' by "*"
  //     END LOOP
  //     CHANGE INDEX 'j' OF 'arr' to 'asterisk'
  //     CHANGE 'asterisk' to ""
  //   END IF
  //   ADD 'j' by 1
  // END LOOP
  // STORE 'output' with empty string
  // STORE 'l' with 0
  // WHILE 'l' IS LESS THAN THE LENGTH OF 'arr'
  //   STORE 'm' with 0
  //   WHILE 'm' IS LESS THAN THE LENGTH OF INDEX 'l' OF 'arr'
  //     ADD 'output' by INDEX 'm' OF INDEX 'l' OF 'arr'
  //     ADD 'm' by 1
  //   END LOOP
  //   ADD 'output' by " "
  //   ADD 'l' by 1
  // END LOOP
  // RETURN 'output'


// CODE
function sensorSentence ( sentence, words ) {
  var arr = [];
  var temp = "";
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      arr.push(temp);
      temp = "";
    } else {
      temp += sentence[i];
    }
    if (i === sentence.length -1) {
      arr.push(temp);
    }
  }
  var asterisk = "";
  for (var j = 0; j < arr.length; j++) {
    if ((arr[j].length === words.length && arr[j] === words) || (arr[j].slice(0, arr[j].length - 1) === words)) {
      for (var k = 0; k < arr[j].length; k++) {
        asterisk += "*"
      }
      arr[j] = asterisk;
      asterisk = "";
    }
  }
  var output = "";
  for (var l = 0; l < arr.length; l++) {
    for (var m = 0; m < arr[l].length; m++) {
      output += arr[l][m];
    }
    output += " ";
  }
  return output;
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
