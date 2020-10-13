//print out a text 10 times
const chorus: string = 'This is my name. <br>';
//set timeout function for 5 sec
setTimeout(() => {
document.getElementsByClassName("container")[0].innerHTML +=(`NAme: <br> ${chorus.repeat(10)}`);
 }, 5000);

 