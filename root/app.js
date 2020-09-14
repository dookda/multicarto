// var a = 10;
// var i = 0;
// var b = [1, 2, 5, 3, 4, 8, 3, 5, 9, 0, 2, 6];

// for (i = 0; i < a; i++) {
//     console.log(i)
// }

// while (i < a) {
//     console.log(i)
//     i++;
// }

// for (x in b) {
//     console.log(x, b[x])
// }




// var k = prompt('กรอกจำนวนครั้ง')


// var b = Math.floor(Math.random() * 10)
// var i = 0;
// console.log(k, b)
// while (i <= k) {
//     var a = prompt('กรอกเลข')
//     lottery(a, b)
//     i++
// }

// function lottery(a, b) {
//     if (a == b) {
//         console.log('ถูก')
//     } else {
//         console.log('ผิด')
//     }
// }

// var a = document.getElementById('num').value

// document.getElementById('result').innerHTML = a


var a = 23345;
var b = "asdfghjkl"
var c = [1, 2, 3, 4, 5, 6,]

let car = {};

car.color = "red";
car.name = "lambo";
car.wheel = 17;
car["camera"] = "yes";

car = {
    start: function () {
        alert('lamboo start')
    }
}

car.break = function () {
    alert('break!!!!')
}

car.stop = () => alert('lambo stop');

console.log(car.stop());



