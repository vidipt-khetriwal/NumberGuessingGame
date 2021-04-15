let count = 3;

function check() 
{
    let x = document.getElementById("inp").value;
    if (parseInt(x) === 8) 
    {
        document.getElementById(x).style.background = "green";
        let y=parseInt(x)+1
        document.getElementById(y).style.background = "black";
        document.getElementById("res").textContent = "Bravo! You guessed it right. This page will reload in 5 sec.";
        setTimeout(function() {
            location.reload();
          }, 5000);
    } 
    else
    {
        document.getElementById(x).style.background = "red";
        let y=parseInt(x)+1
        
        document.getElementById(y).style.background = "black";
        document.getElementById("res").textContent =
        "Sorry, wrong answer. Please try again! "+(count-1)+" chances left!";
        document.getElementById("inp").value = "";
        count--;

    }

    if (count === 0) 
    {
        document.getElementById("res").textContent =
        "Your 3 chances are over. The page will be reloaded in 5 sec.";
        setTimeout(function() {
            location.reload();
          }, 5000);
    }
}