function clear_table(){
    var clear_table = document.getElementById("number_table");
    clear_table.innerHTML = "";
    }

function print_table(){
    var table = "<th>DEC</th> <th>BIN</th> <th>OCT</th> <th>HEX</th>"
    var i;


    for(let i = 0; i <= 50; i++){
        var DEC = i.toString();
        var BIN = i.toString(2);
        var OCT = i.toString(8);
        var HEX = i.toString(16).toUpperCase();

        table += ("<tr> <td>" + DEC + "</td> " + " <td>" + BIN + "</td> "
                 + " <td>" + OCT + "</td> " + "<td>" + HEX + "</td> </tr>");

    }

    var table_element = document.getElementById("number_table");
    table_element.innerHTML = table ;
}

