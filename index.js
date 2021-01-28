
const express=require("express")
const app=express()
app.use("/",express.static(__dirname+"/"))
app.listen(3000, ()=>
{
    console.log("The server is running")
})
function clicked()
{
    var num=document.getElementById("answer")
    input=document.getElementById("number")
    console.log(input.value)
    var answer1=document.createElement("P")
    answer1.id="ans"
    answer1.innerText="Square of " +parseInt(input.value)+ " is "  +parseInt(input.value)*parseInt(input.value)
    num.appendChild(answer1)
}