//buscar los últimos 5
function avg57x7 () {

	var cantidad = arregloresultados7x7.length - 1;
	var arregloprovicional7x7 = [];
	var max = arregloresultados7x7[cantidad];
	var min = arregloresultados7x7[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados7x7.length - 1; i >= arregloresultados7x7.length - 5; i--) 
	{
			
		if (arregloresultados7x7[i] > max) 
		{
			max = arregloresultados7x7[i];
		}
		if (arregloresultados7x7[i] < min) 
		{
			min = arregloresultados7x7[i];
		}

		arregloprovicional7x7.push(arregloresultados7x7[i]);
	}


	posicionmax = arregloprovicional7x7.lastIndexOf(max);		
	posicionmin = arregloprovicional7x7.indexOf(min);

	for (var i = arregloprovicional7x7.length -1; i >= arregloprovicional7x7.length - 5; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional7x7[i];
			} 
		}
	}

	division = suma / 3;
	ConvertirDivisionavg57x7(division);
	avg127x7();
}

function ConvertirDivisionavg57x7 (tiempo) {
			
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

    if(arregloresultados7x7.length < 5)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg5time7x7").html(minutos+":"+segundos+"."+centi);		
}

function avg127x7 () {

	var cantidad = arregloresultados7x7.length - 1;
	var arregloprovicional7x7 = [];
	var max = arregloresultados7x7[cantidad];
	var min = arregloresultados7x7[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados7x7.length - 1; i >= arregloresultados7x7.length - 12; i--) 
	{
			
		if (arregloresultados7x7[i] > max) 
		{
			max = arregloresultados7x7[i];
		}
		if (arregloresultados7x7[i] < min) 
		{
			min = arregloresultados7x7[i];
		}

		arregloprovicional7x7.push(arregloresultados7x7[i]);
	}

	posicionmax = arregloprovicional7x7.lastIndexOf(max);		
	posicionmin = arregloprovicional7x7.indexOf(min);

	for (var i = arregloprovicional7x7.length -1; i >= arregloprovicional7x7.length - 12; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional7x7[i];
			} 
		}
	}

	division = suma / 10;

	ConvertirDivisionavg127x7(division);
	avg1007x7();
}

function ConvertirDivisionavg127x7 (tiempo) {
			
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

    if(arregloresultados7x7.length < 12)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg12time7x7").html(minutos+":"+segundos+"."+centi);		
}

function avg1007x7 () {

	var cantidad = arregloresultados7x7.length - 1;
	var arregloprovicional7x7 = [];
	var max = arregloresultados7x7[cantidad];
	var min = arregloresultados7x7[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados7x7.length - 1; i >= arregloresultados7x7.length - 100; i--) 
	{
		
		if (arregloresultados7x7[i] > max) 
		{
			max = arregloresultados7x7[i];
		}
		if (arregloresultados7x7[i] < min) 
		{
			min = arregloresultados7x7[i];
		}

		arregloprovicional7x7.push(arregloresultados7x7[i]);
	}

	posicionmax = arregloprovicional7x7.lastIndexOf(max);		
	posicionmin = arregloprovicional7x7.indexOf(min);

	for (var i = arregloprovicional7x7.length -1; i >= arregloprovicional7x7.length - 100; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional7x7[i];
			} 
		}
	}

	division = suma / 98;

	ConvertirDivisionavg1007x7(division);
	
}

function ConvertirDivisionavg1007x7 (tiempo) {
			
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

    if(arregloresultados7x7.length < 100)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}	
 	
	$("#avg100time7x7").html(minutos+":"+segundos+"."+centi);		
}