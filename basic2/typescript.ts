//print out a text 10 times
const chorus: string = 'This is my name. <br>';
//set timeout function for 5 sec
setTimeout(() => {
document.getElementsByClassName("container")[0].innerHTML +=(`Name: <br> ${chorus}`);
 }, 1000);

 /*setInterval(() => {
     document.getElementsByClassName("container")[0].innerHTML +=(`${chorus.repeat(10)}`);
 }, 500);
 */
