//array with names
var ArrayNames = ["Steve", "Alfred", "James", "Zuse", "Hermes", "Platos", "Madusa", "Nike", "Athena", "John"];
//for in preferst to print out the type or index 
for (var prop in ArrayNames) {
    //print out the index
    console.log(prop);
    //print out type (string in our case)
    console.log(typeof (prop));
    //print out values. We need to call apon the arrayNames properties
    console.log("Names: " + ArrayNames[prop]);
}
//print out the value. For of lets you print out the values directly
for (var _i = 0, ArrayNames_1 = ArrayNames; _i < ArrayNames_1.length; _i++) {
    var i = ArrayNames_1[_i];
    console.log(i);
}
