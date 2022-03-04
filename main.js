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
/*listOne.map(getAverage);

function getAverage(number){
    return [number.grade];
};

console.log(average);*/

for(let i = 0; i < listOne.length; i++){
    console.log(listOne[i].name);
};

for(let i = 0; i < listOne.length; i++){
    console.log(listOne[i].grade);
};

for(let i = 0; i < listTwo.length; i++){
    console.log(listTwo[i].grade);
};

