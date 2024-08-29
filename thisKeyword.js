//global this key wordc value 

console.log(this);

function abcd(){
  console.log(this);
  
}
abcd();

//this value i mehtod acatuallay a method is a function inside a object

let obj = {
  name:'khan',
  abcd :function (){
    console.log(this);
    function child(){
      console.log(this);
      
    }
    child();
  }
}
obj.abcd();

// lets check constructor why we need it and why we use it by the folloeing and maintain the good work and also you can use it as well where all those working expeiences and most likely to

function trckt (){
// console.log('hello this is constructor function ');
console.log(this);

}
let val =new trckt();
