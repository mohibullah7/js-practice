let data  = [1,2,3,4,5,6,7,8,9,90,0,10,14]
const new1 = [...data];
new1.pop()
// console.log(new1)
// console.log(data);

data.forEach( (val)=>{
console.log(val+4/2*3);

})

const elem = document.querySelector('#colors');
elem.forEach((elem)=>{
  elem.style.color='blue';
})

const elements = document.querySelectorAll('.heading');
elements.forEach((element) => {
  element.style.color = 'blue';
});

//this is called spread opertaor 

if(data.length == 13){
  console.log('logic is working');
  
}
else {
  console.log('logc is not working');
  
}
let v1 = 'this is for loop '
for(let  i = 0 ; i <= 13 ; i ++){
  console.log('for loops is working');
  
}

const prop=()=>{
  return "i ma prop"
}

const v2 = ['khan',32,32,'loop',[3232,3232,32],(prop)];

v2.forEach((elem,index)=>{
    console.log(elem);
    
})