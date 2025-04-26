function findAdd(){
    var num1=Number(document.getElementById("getData1").value);     
    var num2=Number(document.getElementById("getData2").value);     
    document.getElementById("outputData").value="The Answer is : "+" "+num1 +"+"+ num2 +"="+(num1+num2);                                                
}
function findSub(){
    var num1=Number(document.getElementById("getData1").value);     
    var num2=Number(document.getElementById("getData2").value);     
    document.getElementById("outputData").value="The Answer is : "+" "+num1 +"-"+ num2 +"="+(num1-num2);                                                   
}
function findMul(){
    var num1=Number(document.getElementById("getData1").value);     
    var num2=Number(document.getElementById("getData2").value);     
    document.getElementById("outputData").value="The Answer is : "+" "+num1 +"*"+ num2 +"="+(num1*num2);                                              
}
function findDiv(){
    var num1=Number(document.getElementById("getData1").value);     
    var num2=Number(document.getElementById("getData2").value);     
    document.getElementById("outputData").value="The Answer is : "+" "+num1 +"/"+ num2 +"="+(num1/num2);  
}
