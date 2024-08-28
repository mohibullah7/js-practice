let data  = [1,2,3,4,5,6,7,8,9,90,0,10,14]
const new1 = [...data];
new1.pop()
console.log(new1)
console.log(data);

//this is called spread opertaor 

if(data.length == 13){
  console.log('logic is working');
  
}
else {
  console.log('logc is not working');
  
}
// let v1 = 'this is for loop '
for(let  i = 0 ; i <= 13 ; i ++){
  console.log('for loops is working');
  
}

let func =()=>(
   {
    name:'mohib',
    khan:920192
  }
  console.log(obj.name);
  
)

