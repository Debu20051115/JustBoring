const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  const outcome=document.querySelector('#outcome')
  const l=18

  if(height===''||isNaN(height)||height<0){
    results.innerHTML=`the given value ${results} is invalid`
  }else if(weight===''||isNaN(weight)||weight<0){
    results.innerHTML=`the given value ${results} is invalid`
  }else{const bmi=(weight/((height*height)/10000)).toFixed(2)
  results.innerHTML=`answer ${bmi}`
return bmi}

  (l)=>{if(results<l){outcome.innerHTML='hello'}}
  console.log(l())
  

})