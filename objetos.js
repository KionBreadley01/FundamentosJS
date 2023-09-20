// objectos de una colecion de datos 
//  a traves de Key/values llave / valor

const alumno ={
    name: `Steave`,
    age: 19,
    city: 'milla',
    calications: [10, 10 , 8],
    career:'TIdsm',
    'last name':'juan',
    'Manuel':'Hernandez'

}

console.log(alumno);
console.log(alumno.name);
console.log(alumno.city);
console.log(alumno['calications']);
console.log(alumno['last name']);

alumno.height =1.75;
console.log(alumno);
// crear objecto 

const group = {
    name: '4A DSM',
    career: 'TADSM',
    classroom: 'Lab redes 1', 
    subjects: ['Aplicaciones','Modelo', 'Data Bases'],
    alumns:[alumno,alumno,alumno]
}
console.log(group);
