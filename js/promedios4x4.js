//buscar los últimos 5
function avg54x4 () {

	var cantidad = arregloresultados4x4.length - 1;
	var arregloprovicional4x4 = [];
	var max = arregloresultados4x4[cantidad];
	var min = arregloresultados4x4[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados4x4.length - 1; i >= arregloresultados4x4.length - 5; i--) 
	{
			
		if (arregloresultados4x4[i] > max) 
		{
			max = arregloresultados4x4[i];
		}
		if (arregloresultados4x4[i] < min) 
		{
			min = arregloresultados4x4[i];
		}

		arregloprovicional4x4.push(arregloresultados4x4[i]);
	}


	posicionmax = arregloprovicional4x4.lastIndexOf(max);		
	posicionmin = arregloprovicional4x4.indexOf(min);

	for (var i = arregloprovicional4x4.length -1; i >= arregloprovicional4x4.length - 5; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional4x4[i];
			} 
		}
	}

	division = suma / 3;
	ConvertirDivisionavg54x4(division);
	avg124x4();
}

function ConvertirDivisionavg54x4 (tiempo) {
			
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

    if(arregloresultados4x4.length < 5)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg5time4x4").html(minutos+":"+segundos+"."+centi);		
}

function avg124x4 () {

	var cantidad = arregloresultados4x4.length - 1;
	var arregloprovicional4x4 = [];
	var max = arregloresultados4x4[cantidad];
	var min = arregloresultados4x4[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados4x4.length - 1; i >= arregloresultados4x4.length - 12; i--) 
	{
			
		if (arregloresultados4x4[i] > max) 
		{
			max = arregloresultados4x4[i];
		}
		if (arregloresultados4x4[i] < min) 
		{
			min = arregloresultados4x4[i];
		}

		arregloprovicional4x4.push(arregloresultados4x4[i]);
	}

	posicionmax = arregloprovicional4x4.lastIndexOf(max);		
	posicionmin = arregloprovicional4x4.indexOf(min);

	for (var i = arregloprovicional4x4.length -1; i >= arregloprovicional4x4.length - 12; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional4x4[i];
			} 
		}
	}

	division = suma / 10;

	ConvertirDivisionavg124x4(division);
	avg1004x4();
}

function ConvertirDivisionavg124x4 (tiempo) {
			
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

    if(arregloresultados4x4.length < 12)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg12time4x4").html(minutos+":"+segundos+"."+centi);		
}

function avg1004x4 () {

	var cantidad = arregloresultados4x4.length - 1;
	var arregloprovicional4x4 = [];
	var max = arregloresultados4x4[cantidad];
	var min = arregloresultados4x4[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados4x4.length - 1; i >= arregloresultados4x4.length - 100; i--) 
	{
		
		if (arregloresultados4x4[i] > max) 
		{
			max = arregloresultados4x4[i];
		}
		if (arregloresultados4x4[i] < min) 
		{
			min = arregloresultados4x4[i];
		}

		arregloprovicional4x4.push(arregloresultados4x4[i]);
	}

	posicionmax = arregloprovicional4x4.lastIndexOf(max);		
	posicionmin = arregloprovicional4x4.indexOf(min);

	for (var i = arregloprovicional4x4.length -1; i >= arregloprovicional4x4.length - 100; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional4x4[i];
			} 
		}
	}

	division = suma / 98;

	ConvertirDivisionavg1004x4(division);
	
}

function ConvertirDivisionavg1004x4 (tiempo) {
			
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

    if(arregloresultados4x4.length < 100)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}	
 	
	$("#avg100time4x4").html(minutos+":"+segundos+"."+centi);		
}