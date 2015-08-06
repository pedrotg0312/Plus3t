function Algoritmo2 () {

	var opciones = {
		"R" : { "allowed" : true, "enables" : ["F", "U"] },
        "F" : { "allowed" : true, "enables" : ["R", "U"] },
        "U" : { "allowed" : true, "enables" : ["R", "F"] },
    };

	var principal = ["R", "F", "U"];

	var provisional = [];
	
	for (var i = 0; i <= 10; i++) {
		do 
        {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
        opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3)){
            case 0: agregado = "";
          	break;

          	case 1: agregado = "'";
          	break;

          	case 2: agregado = "2"; 
          	break;
        }
        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
	}
	$("#algoritmo").html(algoritmofinal);
}

function Algoritmo3 () {

    var opciones = {
        "R" : { "allowed" : true, "enables" : ["U", "D", "F", "B"] },
        "L" : { "allowed" : true, "enables" : ["U", "D", "F", "B"] },
        "U" : { "allowed" : true, "enables" : ["R", "L", "F", "B"] },
        "D" : { "allowed" : true, "enables" : ["R", "L", "F", "B"] },
        "F" : { "allowed" : true, "enables" : ["R", "L", "U", "D"] },
        "B" : { "allowed" : true, "enables" : ["R", "L", "U", "D"] }
    };

    var principal = ["R", "L", "U", "D", "F", "B"];

    var provisional = [];
    
    for (var i = 0; i <= 20; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
          } while(! opciones[face]["allowed"])

          opciones[face]["allowed"]= false;

          for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
          };

          switch(Math.floor(Math.random() * 3))
          {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
          }

          provisional[i] = " " + face + agregado;
          var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}

function Algoritmo4 () {

	var opciones = {
        "R"  : { "allowed" : true, "enables" : ["U", "Uw", "D", "F", "Fw", "B"] },
        "Rw" : { "allowed" : true, "enables" : ["U", "Uw", "D", "F", "Fw", "B"] },
        "L"  : { "allowed" : true, "enables" : ["U", "Uw", "D", "F", "Fw", "B"] },
        "U"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "F", "Fw", "B"] },
        "Uw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "F", "Fw", "B"] },
        "D"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "F", "Fw", "B"] },
        "F"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "U", "Uw", "D"] },
        "Fw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "U", "Uw", "D"] },
        "B"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "U", "Uw", "D"] }
    };

    var principal = ["R", "Rw", "L", "U", "Uw", "D", "F", "Fw", "B"];

    var provisional = [];
  
    for (var i = 0; i <= 24; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
        }

        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}

function Algoritmo5 () {

    var opciones = {
        "R"  : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "Rw" : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "L"  : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "Lw" : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "U"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "Uw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "D"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "Dw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "F"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] },
        "Fw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] },
        "B"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] },
        "Bw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] }
    };

    var principal = ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"];

    var provisional = [];
  
    for (var i = 0; i <= 24; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
        }

        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}

function Algoritmo6 () {

	var opciones = {
        "R"  : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "F", "Fw", "3Fw", "B", "Bw"] },
        "Rw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "F", "Fw", "3Fw", "B", "Bw"] },
        "3Rw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "F", "Fw", "3Fw", "B", "Bw"] },
        "L"  : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "F", "Fw", "3Fw", "B", "Bw"] },
        "Lw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "F", "Fw", "3Fw", "B", "Bw"] },
        "U"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "F", "Fw", "3Fw", "B", "Bw"] },
        "Uw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "F", "Fw", "3Fw", "B", "Bw"] },
        "3Uw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "F", "Fw", "3Fw", "B", "Bw"] }, 
        "D"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "F", "Fw", "3Fw", "B", "Bw"] },
        "Dw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "F", "Fw", "3Fw", "B", "Bw"] }, 
        "F"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "U", "Uw", "3Uw", "D", "Dw"] },
        "Fw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "U", "Uw", "3Uw", "D", "Dw"] },
        "3Fw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "U", "Uw", "3Uw", "D", "Dw"] }, 
        "B"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "U", "Uw", "3Uw", "D", "Dw"] },
        "Bw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "U", "Uw", "3Uw", "D", "Dw"] }
    };

    var principal = ["R", "Rw", "3Rw", "L", "Lw", "U", "Uw", "3Uw", "D", "Dw", "F", "Fw", "3Fw", "B", "Bw"];

    var provisional = [];
  
    for (var i = 0; i <= 24; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
        }

        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}

function Algoritmo7 () {

    var opciones = {
        "R"  : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Rw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Rw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "L"  : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Lw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Lw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "U"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Uw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Uw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] }, 
        "D"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Dw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Dw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] }, 
        "F"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "Fw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "3Fw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] }, 
        "B"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "Bw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "3Bw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] }
    };

    var principal = ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"];

    var provisional = [];
  
    for (var i = 0; i <= 24; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
        }

        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}

function AlgoritmoPyra () {
    var opciones = {
        "R" : { "allowed" : true, "enables" : ["U", "B"] },
        "L" : { "allowed" : true, "enables" : ["U", "B"] },
        "U" : { "allowed" : true, "enables" : ["R", "L", "B"] },
        "B" : { "allowed" : true, "enables" : ["R", "L", "U"] }
    };

    var algoritmofinal;

    var principal = ["R", "L", "U", "B"];

    var provisional = [];

    var tamano = Math.floor(Math.random() * (2)) + 7;//da un tamaño aleatorio de 7 a 9

    var puntas = (Math.floor(Math.random() + 11)) - tamano;//La diferencia de tamano con el tamaño final del scramble
    
    for (var i = 0; i <= tamano; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            var face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
        };

        switch(Math.floor(Math.random() * 2))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;
        }

        provisional[i] = " " + face + agregado;
        algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }

    //Scramble para las puntas

    provisional = [];//limpia el scramble

    /*
    *  Activa las opciones de nuevo, ya que no se pueden repetir de la siguiente manera 'l b l' 
    *  entonces cuando las desactiva abajo ya no se pueden usar de nuevo.
    */
     
    for (var l = 0; l < principal.length; l++) {
        opciones[principal[l]]["allowed"] = true;
    };

    for (var k = 0; k < puntas; k++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            var face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        switch(Math.floor(Math.random() * 2))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;
        }

        provisional[i] = " " + face + agregado;
        var algoritmofinal2 = " " + provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
        algoritmofinal += algoritmofinal2.toLowerCase();
    }

    $("#algoritmo").html(algoritmofinal);
} 