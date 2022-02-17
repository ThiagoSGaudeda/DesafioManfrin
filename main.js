const listOne = [
    {
        name: "Thiago", 
        grade: 9
    },
    
    {
        name: "Felipe", 
        grade: 10
    },
    {
        name: "Rafael", 
        grade: 8
    },
    
    {
        name: "Giovanna", 
        grade: 7
    },
    {
        name: "Francisco", 
        grade: 6
    },
    
    {
        name: "Manuela", 
        grade: 10
    },
];
const listTwo = [
    {
        name: "Thiago", 
        grade: 7
    },
    
    {
        name: "Felipe", 
        grade: 8
    },
    {
        name: "Rafael", 
        grade: 9
    },
    
    {
        name: "Giovanna", 
        grade: 10
    },
    {
        name: "Francisco", 
        grade: 9
    },
    
    {
        name: "Manuela", 
        grade: 9
    }
];

//console.log (listOne[0].name)

//const listAvg = listOne.map( (s, i) => ({name : s, average : listOne[i].grade}) );

let student = listOne.find(listOne => listOne.name === 'Thiago');

console.log(student)



