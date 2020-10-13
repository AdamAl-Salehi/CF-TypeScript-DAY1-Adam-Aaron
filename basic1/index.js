var ArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = "";
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
for (var _i = 0, ArrayNumbers_1 = ArrayNumbers; _i < ArrayNumbers_1.length; _i++) {
    var i = ArrayNumbers_1[_i];
    for (var _a = 0, ArrayNumbers_2 = ArrayNumbers; _a < ArrayNumbers_2.length; _a++) {
        var j = ArrayNumbers_2[_a];
        document.getElementsByClassName('result')[0].innerHTML += i + " * " + j + "=" + i * j + " <br>";
    }
    document.getElementsByClassName('result')[0].innerHTML += "<hr>";
}
