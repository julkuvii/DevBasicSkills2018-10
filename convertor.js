var convert=function(src,output,from,to){
    switch (from){
        case "bin":
        document.getElementById(output).innerHTML= to ==="dec"? bintodec(src) : bintohex(src);
        break;
    case "dec":
    document.getElementById(output).innerHTML= to ==="bin"? dectobin(src) : dextohex(src);
        break;
    
    case "hex":
    document.getElementById(output).innerHTML= to ==="bin"? hextobin(src) : hextodec(src);
        break;
    
    }
    };
    var bintodec = function(src) {
        var i;

        var n = 0;
    
        var srcString = src.toString();
    
        var returnNum = 0;
    
        
    
        for (i = srcString.length - 1; i >=0; i--) {
    
            returnNum += srcString[i] * 2 ** n;
    
            n++;
    
        }
    
        
    
        return returnNum;
    };
    var bintohex=function(src) {
        return src;
    }
    var dectobin=function(src) {

       var n = 0;

    var returnString = "";

    

    while (2 ** (n) < src) {

        n++;

    }

    

    for (n; n>=0; n--) {

        if (2 ** n <= src) {

            returnString += "1";

            src = src % 2 ** n;

        } else {

            returnString += returnString === "" ? "" : "0";

        }

    }

    

    return returnString;
    };
    var dextohex=function(src) {
        return src;
    }
    var hextobin=function(src) {
        return src;
    }
    var hextodec=function(src) {
        return src;
    }
    