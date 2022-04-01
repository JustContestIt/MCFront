function solve(){
    console.log("Works")
    a = document.getElementById("solution")
    a.innerHTML = "Got this!"
}

function colorSquare(){
    var square = document.getElementsByClassName("square")[0]
    square.style.backgroundColor = "blue"
}

var square = document.getElementsByClassName("square")[0]
var l = 0

function moveSquare(){
    l += 30
    square.style.left = l + "px"
    if(l <= 900){
        setTimeout(moveSquare, 20)
    }
}



function CoolFunction(a, x){
    console.log("I'm cool")
    console.log(typeof(a))
    for(var i = 1; i <= 100; i++){
        if(i % 7 == 0 && i % 3 != 0) console.log(i)
        else console.log(i + " не подходит")
    }
}