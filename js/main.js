	//Declaración de variables
    var cadena, cod, respuesta;
	
	//Declaración de expresiones
    var tener = RegExp("(TIENE|TIENES|TENGO|TENÉS|TENES)");
    var edad = /AÑOS/;
	var saludar = RegExp("(HOLA|QUE TAL|CÓMO VA|COMO VA|CÓMO VAS|COMO VAS)");
	var bien = RegExp("(BIEN|TUANIS|PURA VIDA)");
	

    function evaluarExpresion() {
      cadena = document.getElementById("txtPregunta").value;
	  escribirChat(cadena);
      cadena = cadena.toUpperCase();
	  document.getElementById("txtPregunta").value="";
	  cod=0;
	  
/*
      document.getElementById("resultado1").innerHTML= tener.test(cadena);
      document.getElementById("resultado2").innerHTML= edad.test(cadena);
*/ 
	  if (saludar.test(cadena)==true) {
		cod = 1;
	  };
	    if (bien.test(cadena)==true) {
		cod = 2;
	  };
      if (tener.test(cadena)==true && edad.test(cadena)==true ) {
        cod = 4;
      }; 
	//Lama a responder
		setTimeout(responder, 1000);
      //responder();
    }

    function responder() {
	var r = Math.floor((Math.random() * 3) + 1);
	console.log("random " + r);
	console.log("cod " + cod);
	var mensaje;
      switch (cod) {
	  case 1:
			if (r == 1) {
			mensaje = "Hola!!! Todo bien. Y tú?";
			};
			if (r == 2) {
			mensaje = "Pura vida! y vos?";
			};
			if (r == 3) {
			mensaje = "Excelente. Y tú?";
			};
			
        break;
		
		case 2:
        mensaje = "Me alegra mucho!!!";
        break;
	  
        case 4:
		if (r == 1) {
			mensaje = "Es una pregunta muy personal";
			};
			if (r == 2) {
			mensaje = "Demasiado joven para ti";
			};
			if (r == 3) {
			mensaje = "Tengo toda la edad que te puedas imaginar!!";
			};

         break;
        
		case 5:

        break;
        default:
		mensaje = "No entiendo lo que me estás diciendo";

      }
      //document.getElementById("respuesta").innerHTML = mensaje;
	  escribirChat(mensaje);
    }
	
	function escribirChat (texto) {
		document.getElementById("areaChat").value += texto + "\r";
	}
