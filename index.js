let count = 3;

function check() 
{
    let x = document.getElementById("inp").value;
    if (parseInt(x) === 9) 
    {
        document.getElementById("res").textContent = "Bravo! You guessed it right";
    } 
    else
    {
        document.getElementById("res").textContent =
        "Sorry, wrong answer. Please try again!";
        document.getElementById("inp").value = "";
        count--;
    }

    if (count === 0) 
    {
        document.getElementById("res").textContent =
        "Your 3 chances are over. The page will be reloaded in 3 sec.";
        setTimeout(function() {
            location.reload();
          }, 3000);
    }
}