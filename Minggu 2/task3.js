const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArr) => {
  return typeof nilaiAwal == 'number' && typeof nilaiAkhir == 'number'
    ? nilaiAwal < nilaiAkhir
      ? dataArr.length >= 5
        ? dataArr.filter((v) => v > nilaiAwal && v < nilaiAkhir).sort((a, b) => a - b)
        : 'Jumlah angka dalam dataArr harus lebih dari 5'
      : 'Nilai akhir harus lebih besar dari nilai awal'
    : 'Nilai awal dan nilai akhir harus angka';
};

console.log(seleksiNilai(2, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai('', 20, [2, 25, 4]));
console.log(seleksiNilai(10, 1, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(4, 20, [2, 25, 4]));