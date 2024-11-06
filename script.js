const input=document.getElementById("input");
const result=document.getElementById("result");
const btn=document.getElementById("btn");
const head2=document.getElementById("head2");
const head1=document.getElementById("head1");
console.log(result);

btn.addEventListener("mousedown",(e)=>{
    console.log(e);
    let value=input.valueAsNumber;
    let seconds=value*60;
    console.log(seconds);
    result.innerHTML=`Seconds: ${seconds}`;

});



