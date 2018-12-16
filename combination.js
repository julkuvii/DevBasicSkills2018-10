function factorial(a)
{
    var output = a;
    while ( a > 1 )
    {
        a--;
        output *= a;
    }
    return output;
}

function combination()
{
    var n = Number(document.getElementById("originalSet").value);
    var k = Number(document.getElementById("subset").value);
    var output = n;
    var a = factorial(n-k);
    if ( n == "")
    {
        document.getElementById("originalSet").placeholder = "empty";
       
    }
    else if( k == "")
    {
        document.getElementById("subset").placeholder = "empty";
        
    }
    else{
        while ( n > k + 1 )
        {
            n--;
            output *= n;
        }
        console.log(output);
        output = output/a;
        document.getElementById("result1").innerHTML = "There are " + output + " possibilities.";
    }
}

function permutation(n,k)
{
    var n = document.getElementById("original").value;
    var k = document.getElementById("vacancies").value;
    if ( n == "")
    {
        document.getElementById("original").placeholder = "empty";
       
    }
    else if( k == "")
    {
        document.getElementById("vacancies").placeholder = "empty";
      
    }
    else{
        if( document.getElementById("sampling").checked == false)
        {
            document.getElementById("result2").innerHTML = "There are " + factorial(n)/factorial(n-k) + " probabilities.";
        }
        else{
            document.getElementById("result2").innerHTML = "There are " + Math.pow(n,k) + " probabilities.";
        }
    }
}
