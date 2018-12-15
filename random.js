
  function generateRandomNumber(){
    var arr = [];
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    var range= parseInt(document.getElementById('range').value);
    while(arr.length < range) {
      var random = Math.floor(Math.random() * (max - min + 1)) + min;
      if(arr.indexOf(random) === -1) {
        arr.push(random);
      }
    }

    document.getElementById("display").innerHTML = arr;

    }

    