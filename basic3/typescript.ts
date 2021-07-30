//array with names
var ArrayNames : Array<string>=["Steve","Alfred","James","Zuse","Hermes","Platos","Madusa","Nike","Athena","John"];

//print out the value. For of lets you print out the values directly
document.getElementsByClassName("container")[0].innerHTML = (`ArrayNames: (`);
for (let i of ArrayNames){
    console.log(i);
    document.getElementsByClassName("container")[0].innerHTML += (` ${i},`);
}
document.getElementsByClassName("container")[0].innerHTML += (`) <br>`);

//for in preferst to print out the type or index 
for (let prop in ArrayNames){
    //print out the index
    document.getElementsByClassName("container")[0].innerHTML += ("Index: " + prop + ", ");
    console.log(prop);
    //print out type (string in our case)
    document.getElementsByClassName("container")[0].innerHTML += ( "Type: " + typeof(prop) + ", ");
    console.log(typeof(prop));
    //print out values. We need to call apon the arrayNames properties
    document.getElementsByClassName("container")[0].innerHTML += (` Names: ${ArrayNames[prop]}, <br>`);
    console.log(`Names: ${ArrayNames[prop]}`);
}



