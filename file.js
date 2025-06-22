//1

// let a = "some string";

// let b = "other string";

// [a,b] = [b,a];

// console.log(a, b);

//2

// const grid = [
//   ["X", "x", "", "", ""],
//   ["",  "X", "", "x", ""],
//   ["x", "",  "X", "", ""],
//   ["",  "",  "",  "x", "X"],
//   ["X", "",  "",  "", ""],
// ];

// let count = 0;

// for (let row = 0; row < grid.length; row++){
//     for(let col = 0; col < grid[row].length; col++){
//         if(grid[row][col] === "X"){
//             count++;
//         }
//     }
// }

// console.log(`X appears ${count} times`);

//3

// let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };

// console.log(family.children[2].name);


// let sibilings = family.children.map( c => c.name).join(", ")

// console.log(sibilings)

//4

let arr = [ 1 ,2 ,3 ,4];
let arr2 = [];

for(i =arr.length; i > 0; i--){
    arr2.push(i)

}

console.log(arr2)

//5

const mixedArray = [42, "hello", true, { name: "Ali" }, false, "world", 99, {}, null, [1, 2, 3]];

const typecount = {}

for(let item of mixedArray){
    let type = typeof item 

    typecount[type] = (typecount[type] || 0) +1
}

console.log(typecount)