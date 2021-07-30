var ArrayNumbers : Array<Number>=[1,2,3,4,5,6,7,8,9,10];
var res="";
// function table(data?: Number){
//     for(let i=0; i<10; i++){
//         // let y = i;
//         for(let j=0; j<10; j++){
//         //    let x= j;
//            res+=`${ArrayNumbers[i]} * ${ArrayNumbers[j]}=${ArrayNumbers[i]*ArrayNumbers[j]} <br>`;

//         }res+=`<hr>`
//     }
//     document.getElementsByClassName('result')[0].innerHTML=res;
// }
// table();
for(let i of ArrayNumbers){
    for(let j of ArrayNumbers){
         document.getElementsByClassName('result')[0].innerHTML+=`${i} * ${j}=${i * j} <br>`;
     }
    document.getElementsByClassName('result')[0].innerHTML+=`<hr>`;
}