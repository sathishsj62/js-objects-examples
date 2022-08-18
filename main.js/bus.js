// let myBus= {
//     brand:'tata',
//     nmae :'bus',
//     type :'diseal',
//     color :'red'

// }
// console.log(myBus);
// alert('hii')
function thayakatta(){
let x=[1,2,3,4,5,6];
let y=Math.floor(Math.random()*x.length);
let z=x[y];
console.log(z);
document.getElementById('thayam').innerHTML=z;

}
let button=document.getElementById('btn');
button.addEventListener('click',thayakatta)