//array with names
var ArrayNames : Array<string>=["Steve","Alfred","James","Zuse","Hermes","Platos","Madusa","Nike","Athena","John"];

//for in preferst to print out the type or index 
for (let prop in ArrayNames){
    //print out the index
    console.log(prop);
    //print out type (string in our case)
    console.log(typeof(prop));
    //print out values. We need to call apon the arrayNames properties
    console.log(`Names: ${ArrayNames[prop]}`);
}

//print out the value. For of lets you print out the values directly
for (let i of ArrayNames){
    console.log(i);
}

