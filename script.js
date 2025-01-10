const params=new URLSearchParams(window.location.search);
const value1=params.get('param1');
const value2=params.get('param2');
const value3=params.get('param3');
const value4=params.get('param4');
document.getElementById("targa").innerText='12345';
document.getElementById("name").innerText='ማንደፍሮ ወንዴ';
document.getElementById("kebele").innerText='13';
document.getElementById("phone").innerText='964677018';
if(params.has('param1')){
  document.getElementById("targa").innerText=value1;
  document.getElementById("name").innerText=value2;
  document.getElementById("kebele").innerText=value3;
  document.getElementById("phone").innerText=value4;
}

scrollTo(150,8900);
  
