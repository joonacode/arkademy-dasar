const mtk = prompt("Masukan nilai Matematika");
const bahasaIndonesia = prompt("Masukan nilai Bahasa Indonesia");
const bahasaInggris = prompt("Masukan nilai Bahasa Inggris");
const ipa = prompt("Masukan nilai IPA");
const total = (Number(mtk) + Number(bahasaIndonesia) + Number(bahasaInggris) + Number(ipa)) / 4;

const option = [{nilai: 90,message: "A"},{nilai: 80,message: "B"},{nilai: 70,message: "C"},{nilai: 60,message: "D"},{nilai: 0,message: "E"}];

const nilaiArr = [Number(mtk), Number(bahasaIndonesia), Number(bahasaInggris), Number(ipa)];

const checkNilai = nilaiArr.every((v) => v <= 100 && v >= 0 && typeof v === "number");

if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
    alert("Semua mapel harus di isi");
} else if(!checkNilai) {        
    alert("Error: Nilai tidak boleh lebih dari 100 atau kurang dari 0 dan nilai harus berupa angka");
}else{
    const x = option.find((v) => total >= v.nilai);
    alert(`Rata-rata = ${total} \nGrade = ${x.message}`);
}

const lagi = confirm("Hitung lagi ?");
lagi ? window.location.reload() : false;