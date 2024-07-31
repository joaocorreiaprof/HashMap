import "./style.css";
import HashMap from "./modules/hash";

const myTable = new HashMap();
myTable.set("firstName", "João");
myTable.set("apple", "red");
myTable.set("banana", "yellow");
myTable.set("carrot", "orange");
myTable.set("dog", "brown");
myTable.set("elephant", "gray");
myTable.set("frog", "green");
myTable.set("grape", "purple");
myTable.set("hat", "black");
myTable.set("ice cream", "white");
myTable.set("jacket", "blue");
myTable.set("kite", "pink");
myTable.set("lion", "golden");

console.log(myTable);

console.log(myTable.keys());
console.log(myTable.values());
console.log(myTable.entries());
