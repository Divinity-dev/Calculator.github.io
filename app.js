let result=0
let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
document.getElementById("add").onclick=function(){
    let x=Number(input1.value)
    let y=Number(input2.value)
    result=x+y
    document.getElementById("result").textContent=result
    input1.value=""
    input2.value=""
}
document.getElementById("Sub").onclick=function(){
    let x=Number(input1.value)
    let y=Number(input2.value)
    result=x-y
    document.getElementById("result").textContent=result
    input1.value=""
    input2.value=""
}
document.getElementById("Mult").onclick=function(){
    let x=Number(input1.value)
    let y=Number(input2.value)
    result=x*y
    document.getElementById("result").textContent=result
    input1.value=""
    input2.value=""
}
document.getElementById("Div").onclick=function(){
    let x=Number(input1.value)
    let y=Number(input2.value)
    result=x/y
    document.getElementById("result").textContent=result
    input1.value=""
    input2.value=""
}

