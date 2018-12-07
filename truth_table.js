function submitTable()
{
    var p = document.forms["myForm"]["selectP"].value;
    var q = document.forms["myForm"]["selectQ"].value;
    var operator = document.forms["myForm"]["operator"].value;

    

    if (operator= "and"){
       return p && q;
    }

    if (operator= "or"){
        return p || q;
    }
}