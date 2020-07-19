const mtk = prompt('Masukan nilai Matematika');
const bahasaIndonesia = prompt('Masukan nilai Bahasa Indonesia');
const bahasaInggris = prompt('Masukan nilai Bahasa Inggris');
const ipa = prompt('Masukan nilai IPA');
const total = (Number(mtk) + Number(bahasaIndonesia) + Number(bahasaInggris) + Number(ipa)) / 4;
if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
    alert('Semua mata pelajar harus mempunyai nilai !!!')
} else {
    if (total > 100) {
        alert('Nilai tidak boleh lebih dari 100')
    } else if (total < 0) {
        alert('Nilai tidak boleh kurang dari 0')
    } else if (total >= 90) {
        alert(`Rata-rata: ${total} \nGrade: A`)
    } else if (total >= 80) {
        alert(`Rata-rata: ${total}  \nGrade: B`)
    } else if (total >= 70) {
        alert(`Rata-rata: ${total} \nGrade: C`)
    } else if (total >= 60) {
        alert(`Rata-rata: ${total} \nGrade: D`)
    } else if (total < 60) {
        alert(`Rata-rata: ${total} \nGrade: E`)
    } else {
        alert('Nilai harus berupa angka')
    }
}

let cek = confirm('Hitung lagi ?');
cek ? window.location.reload() : false;