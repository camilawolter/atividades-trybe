const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
    [9, 8, 10, 7, 5],
    [10, 9, 9, 10, 8],
    [10, 7, 10, 8, 9]
];

function studentAverage() {
   const nomeEMedias = students.map((student, index) => ({
    nome: student,
    media: (grades[index].reduce((acc, atual) => acc + atual ,0) / grades[index].length)
   }))
   return nomeEMedias;
}
console.log(studentAverage());