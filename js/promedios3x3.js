//buscar los últimos 5
function avg53x3 () {

	var cantidad = arregloresultados3x3.length - 1;
	var arregloprovicional3x3 = [];
	var max = arregloresultados3x3[cantidad];
	var min = arregloresultados3x3[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados3x3.length - 1; i >= arregloresultados3x3.length - 5; i--) 
	{
			
		if (arregloresultados3x3[i] > max) 
		{
			max = arregloresultados3x3[i];
		}
		if (arregloresultados3x3[i] < min) 
		{
			min = arregloresultados3x3[i];
		}

		arregloprovicional3x3.push(arregloresultados3x3[i]);
	}


	posicionmax = arregloprovicional3x3.lastIndexOf(max);		
	posicionmin = arregloprovicional3x3.indexOf(min);

	for (var i = arregloprovicional3x3.length -1; i >= arregloprovicional3x3.length - 5; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional3x3[i];
			} 
		}
	}

	division = suma / 3;
	ConvertirDivisionavg53x3(division);
	avg123x3();
}

function ConvertirDivisionavg53x3 (tiempo) {
			
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

    if(arregloresultados3x3.length < 5)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg5time3x3").html(minutos+":"+segundos+"."+centi);		
}

function avg123x3 () {

	var cantidad = arregloresultados3x3.length - 1;
	var arregloprovicional3x3 = [];
	var max = arregloresultados3x3[cantidad];
	var min = arregloresultados3x3[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados3x3.length - 1; i >= arregloresultados3x3.length - 12; i--) 
	{
			
		if (arregloresultados3x3[i] > max) 
		{
			max = arregloresultados3x3[i];
		}
		if (arregloresultados3x3[i] < min) 
		{
			min = arregloresultados3x3[i];
		}

		arregloprovicional3x3.push(arregloresultados3x3[i]);
	}

	posicionmax = arregloprovicional3x3.lastIndexOf(max);		
	posicionmin = arregloprovicional3x3.indexOf(min);

	for (var i = arregloprovicional3x3.length -1; i >= arregloprovicional3x3.length - 12; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional3x3[i];
			} 
		}
	}

	division = suma / 10;

	ConvertirDivisionavg123x3(division);
	avg1003x3();
}

function ConvertirDivisionavg123x3 (tiempo) {
			
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

    if(arregloresultados3x3.length < 12)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg12time3x3").html(minutos+":"+segundos+"."+centi);		
}

function avg1003x3 () {

	var cantidad = arregloresultados3x3.length - 1;
	var arregloprovicional3x3 = [];
	var max = arregloresultados3x3[cantidad];
	var min = arregloresultados3x3[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados3x3.length - 1; i >= arregloresultados3x3.length - 100; i--) 
	{
		
		if (arregloresultados3x3[i] > max) 
		{
			max = arregloresultados3x3[i];
		}
		if (arregloresultados3x3[i] < min) 
		{
			min = arregloresultados3x3[i];
		}

		arregloprovicional3x3.push(arregloresultados3x3[i]);
	}

	posicionmax = arregloprovicional3x3.lastIndexOf(max);		
	posicionmin = arregloprovicional3x3.indexOf(min);

	for (var i = arregloprovicional3x3.length -1; i >= arregloprovicional3x3.length - 100; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional3x3[i];
			} 
		}
	}

	division = suma / 98;

	ConvertirDivisionavg1003x3(division);
	
}

function ConvertirDivisionavg1003x3 (tiempo) {
			
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

    if(arregloresultados3x3.length < 100)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}	
 	
	$("#avg100time3x3").html(minutos+":"+segundos+"."+centi);		
}