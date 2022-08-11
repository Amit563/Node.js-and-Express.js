const bioData = 
{
    name:"Amit",
    age:18,
    channel:" Amit technical ",
};

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);