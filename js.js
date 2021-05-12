
   
function countSteps() {
    var val = document.getElementById("myInput").value
    var parsVal = parseInt(val)
    n =[]
        for(var i=1; i<=parsVal; i++){
            if(i==1 || i==2 || i==3){
                n.push(i);
            } if(i>3){
                n.push(n[n.length-1] + n[n.length-2])
            }
        }
        document.getElementById("myInput").value = ""
        var element = document.getElementById("forResult")
        element.innerHTML ="Combinations of climbing: " +  n[n.length-1]
        console.log(n[n.length-1])
    }

