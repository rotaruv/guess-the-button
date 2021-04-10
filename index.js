
const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(randomNumber)

document.addEventListener("click", function(event) {
    console.log(Number(event.srcElement.id))
    const clickedButton = Number(event.srcElement.id);
    if (randomNumber === clickedButton) {
        document.getElementById(randomNumber).style.backgroundColor = "green";
        console.log("Ai ghicit")
    } else if (clickedButton === 4) {
        window.location.reload();
    }
    else {
        document.getElementById(clickedButton).style.backgroundColor = "red";
        console.log("mai incearca") 
    }
    
})

