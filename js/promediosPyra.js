//buscar los últimos 5
function avg5Pyra () {

	var cantidad = arregloresultadosPyra.length - 1;
	var arregloprovicionalPyra = [];
	var max = arregloresultadosPyra[cantidad];
	var min = arregloresultadosPyra[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultadosPyra.length - 1; i >= arregloresultadosPyra.length - 5; i--) 
	{
			
		if (arregloresultadosPyra[i] > max) 
		{
			max = arregloresultadosPyra[i];
		}
		if (arregloresultadosPyra[i] < min) 
		{
			min = arregloresultadosPyra[i];
		}

		arregloprovicionalPyra.push(arregloresultadosPyra[i]);
	}


	posicionmax = arregloprovicionalPyra.lastIndexOf(max);		
	posicionmin = arregloprovicionalPyra.indexOf(min);

	for (var i = arregloprovicionalPyra.length -1; i >= arregloprovicionalPyra.length - 5; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicionalPyra[i];
			} 
		}
	}

	division = suma / 3;
	ConvertirDivisionavg5Pyra(division);
	avg12Pyra();
}

function ConvertirDivisionavg5Pyra (tiempo) {
			
	hora = tiempo / 3600000;
	restodehora = tiempo%3600000;

	var centi = (tiempo % 1000)/10;
	centi = Math.round(centi);
	if (centi<10) {centi="0"+centi;}
 			
    //minutos 
 	var minutos = restodehora / 60000;
 	minutos = Math.floor(minutos);
 	restodeminutos = restodehora%60000; 
 	if (minutos<10) {minutos="0"+minutos;}

 	//segundos 	
	var segundos = restodeminutos / 1000;
    segundos = Math.floor(segundos);
    if (segundos<10) {segundos="0"+segundos;} 	

    if(arregloresultadosPyra.length < 5)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg5timePyra").html(minutos+":"+segundos+"."+centi);		
}

function avg12Pyra () {

	var cantidad = arregloresultadosPyra.length - 1;
	var arregloprovicionalPyra = [];
	var max = arregloresultadosPyra[cantidad];
	var min = arregloresultadosPyra[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultadosPyra.length - 1; i >= arregloresultadosPyra.length - 12; i--) 
	{
			
		if (arregloresultadosPyra[i] > max) 
		{
			max = arregloresultadosPyra[i];
		}
		if (arregloresultadosPyra[i] < min) 
		{
			min = arregloresultadosPyra[i];
		}

		arregloprovicionalPyra.push(arregloresultadosPyra[i]);
	}

	posicionmax = arregloprovicionalPyra.lastIndexOf(max);		
	posicionmin = arregloprovicionalPyra.indexOf(min);

	for (var i = arregloprovicionalPyra.length -1; i >= arregloprovicionalPyra.length - 12; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicionalPyra[i];
			} 
		}
	}

	division = suma / 10;

	ConvertirDivisionavg12Pyra(division);
	avg100Pyra();
}

function ConvertirDivisionavg12Pyra (tiempo) {
			
	hora = tiempo / 3600000;
	restodehora = tiempo%3600000;

	var centi = (tiempo % 1000)/10;
	centi = Math.round(centi);
	if (centi<10) {centi="0"+centi;}
 			
    //minutos 
 	var minutos = restodehora / 60000;
 	minutos = Math.floor(minutos);
 	restodeminutos = restodehora%60000; 
 	if (minutos<10) {minutos="0"+minutos;}

 	//segundos 	
	var segundos = restodeminutos / 1000;
    segundos = Math.floor(segundos);
    if (segundos<10) {segundos="0"+segundos;} 	

    if(arregloresultadosPyra.length < 12)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg12timePyra").html(minutos+":"+segundos+"."+centi);		
}

function avg100Pyra () {

	var cantidad = arregloresultadosPyra.length - 1;
	var arregloprovicionalPyra = [];
	var max = arregloresultadosPyra[cantidad];
	var min = arregloresultadosPyra[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultadosPyra.length - 1; i >= arregloresultadosPyra.length - 100; i--) 
	{
		
		if (arregloresultadosPyra[i] > max) 
		{
			max = arregloresultadosPyra[i];
		}
		if (arregloresultadosPyra[i] < min) 
		{
			min = arregloresultadosPyra[i];
		}

		arregloprovicionalPyra.push(arregloresultadosPyra[i]);
	}

	posicionmax = arregloprovicionalPyra.lastIndexOf(max);		
	posicionmin = arregloprovicionalPyra.indexOf(min);

	for (var i = arregloprovicionalPyra.length -1; i >= arregloprovicionalPyra.length - 100; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicionalPyra[i];
			} 
		}
	}

	division = suma / 98;

	ConvertirDivisionavg100Pyra(division);
	
}

function ConvertirDivisionavg100Pyra (tiempo) {
			
	hora = tiempo / 3600000;
	restodehora = tiempo%3600000;

	var centi = (tiempo % 1000)/10;
	centi = Math.round(centi);
	if (centi<10) {centi="0"+centi;}
 			
    //minutos 
 	var minutos = restodehora / 60000;
 	minutos = Math.floor(minutos);
 	restodeminutos = restodehora%60000; 
 	if (minutos<10) {minutos="0"+minutos;}

 	//segundos 	
	var segundos = restodeminutos / 1000;
    segundos = Math.floor(segundos);
    if (segundos<10) {segundos="0"+segundos;} 

    if(arregloresultadosPyra.length < 100)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}	
 	
	$("#avg100timePyra").html(minutos+":"+segundos+"."+centi);		
}