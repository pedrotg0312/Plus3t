//buscar los últimos 5
function avg56x6 () {

	var cantidad = arregloresultados6x6.length - 1;
	var arregloprovicional6x6 = [];
	var max = arregloresultados6x6[cantidad];
	var min = arregloresultados6x6[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados6x6.length - 1; i >= arregloresultados6x6.length - 5; i--) 
	{
			
		if (arregloresultados6x6[i] > max) 
		{
			max = arregloresultados6x6[i];
		}
		if (arregloresultados6x6[i] < min) 
		{
			min = arregloresultados6x6[i];
		}

		arregloprovicional6x6.push(arregloresultados6x6[i]);
	}


	posicionmax = arregloprovicional6x6.lastIndexOf(max);		
	posicionmin = arregloprovicional6x6.indexOf(min);

	for (var i = arregloprovicional6x6.length -1; i >= arregloprovicional6x6.length - 5; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional6x6[i];
			} 
		}
	}

	division = suma / 3;
	ConvertirDivisionavg56x6(division);
	avg126x6();
}

function ConvertirDivisionavg56x6 (tiempo) {
			
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

    if(arregloresultados6x6.length < 5)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg5time6x6").html(minutos+":"+segundos+"."+centi);		
}

function avg126x6 () {

	var cantidad = arregloresultados6x6.length - 1;
	var arregloprovicional6x6 = [];
	var max = arregloresultados6x6[cantidad];
	var min = arregloresultados6x6[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados6x6.length - 1; i >= arregloresultados6x6.length - 12; i--) 
	{
			
		if (arregloresultados6x6[i] > max) 
		{
			max = arregloresultados6x6[i];
		}
		if (arregloresultados6x6[i] < min) 
		{
			min = arregloresultados6x6[i];
		}

		arregloprovicional6x6.push(arregloresultados6x6[i]);
	}

	posicionmax = arregloprovicional6x6.lastIndexOf(max);		
	posicionmin = arregloprovicional6x6.indexOf(min);

	for (var i = arregloprovicional6x6.length -1; i >= arregloprovicional6x6.length - 12; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional6x6[i];
			} 
		}
	}

	division = suma / 10;

	ConvertirDivisionavg126x6(division);
	avg1006x6();
}

function ConvertirDivisionavg126x6 (tiempo) {
			
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

    if(arregloresultados6x6.length < 12)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg12time6x6").html(minutos+":"+segundos+"."+centi);		
}

function avg1006x6 () {

	var cantidad = arregloresultados6x6.length - 1;
	var arregloprovicional6x6 = [];
	var max = arregloresultados6x6[cantidad];
	var min = arregloresultados6x6[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados6x6.length - 1; i >= arregloresultados6x6.length - 100; i--) 
	{
		
		if (arregloresultados6x6[i] > max) 
		{
			max = arregloresultados6x6[i];
		}
		if (arregloresultados6x6[i] < min) 
		{
			min = arregloresultados6x6[i];
		}

		arregloprovicional6x6.push(arregloresultados6x6[i]);
	}

	posicionmax = arregloprovicional6x6.lastIndexOf(max);		
	posicionmin = arregloprovicional6x6.indexOf(min);

	for (var i = arregloprovicional6x6.length -1; i >= arregloprovicional6x6.length - 100; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional6x6[i];
			} 
		}
	}

	division = suma / 98;

	ConvertirDivisionavg1006x6(division);
	
}

function ConvertirDivisionavg1006x6 (tiempo) {
			
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

    if(arregloresultados6x6.length < 100)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}	
 	
	$("#avg100time6x6").html(minutos+":"+segundos+"."+centi);		
}