/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum ( arr ) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== " ") {
        arr2.push(arr[i][j]);
      }
    }
  }
  arr2.sort(function(a,b) { return +a > +b});
  var stop = arr2[arr2.length-1] - arr2[0];
  var output = [];
  for (var l = 1; l < stop; l++) {
    if (arr2[l] - arr2[l-1] !== 1) {
      output.push(arr2[l-1] + 1)
      arr2.splice(l, 0, arr2[l-1] + 1);
    }
  }
  return output;
}


console.log(missingNum([[3,' ', 5], [1,' ', 7], [9,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[ 2,' '], [' ',5]])) // [ 3, 4 ]
console.log(missingNum([[11,' ', 13], [17,' ', 19], [' ',16,' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3,' ', 5, 15], [1,' ', 7, 13], [9,' ',' ', 12], [' ', 16,' ',' ']])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []