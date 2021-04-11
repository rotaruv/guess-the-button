//Save an integer between 1 and 3
const randomNumber = Math.floor(Math.random() * 3 + 1);

/*
1.Add a click event listener;
2.Store the id number in clickedButton var;
3.If the clickedButton id equal with the randomNumber change the button color in green;
4.Otherwise, change the button color in red;
*/
document.addEventListener("click", function(event) {
    const clickedButton = Number(event.target.id);
    if (randomNumber === clickedButton) {
        document.getElementById(clickedButton).style.backgroundColor = "green";
    }
    //clickedButton>0 to avoid the case when the click is outside the buttons;
    else if (randomNumber !== clickedButton && clickedButton > 0) {
        document.getElementById(clickedButton).style.backgroundColor = "red";
    }
})

//Refresh the page after 1s
setTimeout(function(){ 
    window.location.reload();; 
}, 1000);