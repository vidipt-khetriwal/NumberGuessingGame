const check = () =>
{
    let f=0;
    for (i=0;i<3;i++)
    {
        let x=document.getElementById("inp").value
        if (x == 6)
        {
            document.getElementById("res").textContent="Bravo! You guessed it right";
            f=1;
            break;
        }
        else
        {
            document.getElementById("res").textContent="Sorry, wrong answer. Please try again!";
            document.getElementById("inp").value="";
        }
        alert(i);
    }
    if (f == 0)
    {
        document.getElementById("res").textContent="Your 3 chances are over. The page will be reloaded now."
        // location.reload();
    }
}