/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga){

  var ketersediaanUang = [
      { nominal: 100000, jumlah: 5},
      { nominal: 50000, jumlah: 5},
      { nominal: 20000, jumlah: 5 },
      { nominal: 10000, jumlah: 5},
      { nominal: 5000, jumlah: 5}
  ];

  if (bayar < harga) {
    return "Uang tidak cukup";
  }
  var forOutput = [];
  var kembalian = bayar - harga;
  for (var i = 0; i < ketersediaanUang.length;) {
    if (kembalian >= ketersediaanUang[i].nominal && ketersediaanUang[i].jumlah !== 0) {
      ketersediaanUang[i].jumlah--;
      forOutput.push(ketersediaanUang[i].nominal);
      kembalian -= ketersediaanUang[i].nominal;
    } else {
      i++;
    }
  }
  forOutput.sort();
  var output = {};
  for (var j = 0; j < forOutput.length; j++) {
    if (forOutput[j] !== "done") {
      var counter = 1;
      for (var k = j + 1; k < forOutput.length; k++) {
        if (forOutput[k] === forOutput[j]) {
          counter++;
          forOutput[k] = "done";
        }
      }
      output[forOutput[j]] = counter;
    }
  }
  return output;
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup


