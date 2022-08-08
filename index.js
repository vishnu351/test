var vehicles = ["van", "car","bus","train"]
var person = prompt("please enter name")
// if(person.length < 14){
//     alert("please enter name greater than 14 characters " )
// }else{
//     alert("greater than 14 characters " )
// }
alert(person.indexOf("vardhan"))
function myFunction(){
    let pas =document.getElementById("passangers").value

   const vechile = vechileType(pas)
   document.getElementById("demo").innerHTML="for "+pas+" passangers vechile suggested is "+vechile
}    

function vechileType(noofpassangers){
    if(noofpassangers <= 2){
        return "car"
    }else if(5 > noofpassangers > 2){
        return "van"
    }else if(24 > noofpassangers > 5){
        return "buses"
    }else {
        return "train"
    }
}