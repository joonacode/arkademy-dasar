// Task 1
const biodata = {
    name: 'Cep Guna Widodo',
    age: 18,
    hobbies: ['Bersepeda', 'Main Bola'],
    isMaried: false,
    schoolList: [
        {
            name: 'SDN Cangkring 01',
            yearIn: 2008,
            yearOut: 2014,
            major: null
        }, {
            name: 'SMPN 2 Baleendah',
            yearIn: 2014,
            yearOut: 2017,
            major: null
        }, {
            name: 'SMKN 7 Baleendah',
            yearIn: 2017,
            yearOut: 2020,
            major: 'Rekyasa Perangkat Lunak'
        }
    ],
    skills: [
        {
            skillName: 'CSS',
            level: 'Beginner'
        }, {
            skillName: 'Javascript',
            level: 'Beginner'
        }, {
            skillName: 'PHP',
            level: 'Beginner'
        }, {
            skillName: 'Codeigniter',
            level: 'Beginner'
        }, {
            skillName: 'Laravel',
            level: 'Beginner'
        }, {
            skillName: 'MySQL',
            level: 'Beginner'
        }
    ],
    interestInCoding: true
}

console.log(biodata)

const {name, age, hobbies, isMaried, schoolList, skills, interestInCoding} = biodata;
document.getElementById('nama').innerHTML = name;
document.getElementById('umur').innerHTML = age+' tahun';
document.getElementById('hobi').innerHTML = hobbies.join(', ');
document.getElementById('isMaried').innerHTML = isMaried ? 'Sudah' : 'Belum';
document.getElementById('sekolah').innerHTML = `<ul>${schoolList.map(v => 
    `<li>${v.name}</li>
    <ul>
        <li>Tahun Masuk: ${v.yearIn}</li>
        <li>Tahun Keluar: ${v.yearOut}</li>
        <li>Major: ${v.major ? v.major : '-'}</li>
    </ul>`
).join('')}</ul>`;
document.getElementById('skill').innerHTML = `<ul>${skills.map(v => 
    `<li>${v.skillName}</li>
    <ul>
        <li>${v.level}</li>
    </ul>
    `
).join('')}</ul>`;
document.getElementById('interestInCoding').innerHTML = interestInCoding  ? 'Iya' : 'Tidak';
