let obj = {
  name:'khan',
  age :'budaa',
  num :'',
  data : 312312,
  image :"",
  calc :()=>{
      let a = 200;
      let b = 400;
     console.log(a+b);
     
  },
  arr1: [212,2313,3123,313,'khan'],
  arr2:[2,3,4,5,5,66,7,7,88,44,44,4232]
}

obj.arr2.forEach((elem)=>{
  console.log(elem, obj.name,obj.age);
  console.log(obj.calc());
  
  
})