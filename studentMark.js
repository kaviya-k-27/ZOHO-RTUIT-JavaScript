function storeData(){
    var n=Number(document.getElementById("number").value);
    var sum=0;
    var total="<table border=1>"
    total+="<tr><td><strong>"+" Subject "+ "</strong></td>"+"<td><strong>"+" Mark "+"</strong></td></tr>"
    var j=0;
      for(var i=1 ;i<=n; i++){
        var mark = Number(prompt("Enter the Mark : " + i));
          if(mark>=0&&mark<=100){
            sum+=mark;
           }
         total+="<tr><td>Subject : "+ i +"</td><td>"+ mark+"</td></tr>"    
        }
    total+="<tr><td>TotalMark : </td><td>"+sum+"</td></tr>"  
    total+="<tr><td>Average : </td><td>"+(sum/n)+"</td></tr>"  
    total+="</table>"
    document.getElementById("output").innerHTML = total;
}