//buscar los últimos 5
function avg52x2 () {

	var cantidad = arregloresultados2x2.length - 1;
	var arregloprovicional2x2 = [];
	var max = arregloresultados2x2[cantidad];
	var min = arregloresultados2x2[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados2x2.length - 1; i >= arregloresultados2x2.length - 5; i--) 
	{
			
		if (arregloresultados2x2[i] > max) 
		{
			max = arregloresultados2x2[i];
		}
		if (arregloresultados2x2[i] < min) 
		{
			min = arregloresultados2x2[i];
		}

		arregloprovicional2x2.push(arregloresultados2x2[i]);
	}


	posicionmax = arregloprovicional2x2.lastIndexOf(max);		
	posicionmin = arregloprovicional2x2.indexOf(min);

	for (var i = arregloprovicional2x2.length -1; i >= arregloprovicional2x2.length - 5; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional2x2[i];
			} 
		}
	}

	division = suma / 3;
	ConvertirDivisionavg52x2(division);
	avg122x2();
}

function ConvertirDivisionavg52x2 (tiempo) {
			
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

    if(arregloresultados2x2.length < 5)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg5time2x2").html(minutos+":"+segundos+"."+centi);		
}

function avg122x2 () {

	var cantidad = arregloresultados2x2.length - 1;
	var arregloprovicional2x2 = [];
	var max = arregloresultados2x2[cantidad];
	var min = arregloresultados2x2[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados2x2.length - 1; i >= arregloresultados2x2.length - 12; i--) 
	{
			
		if (arregloresultados2x2[i] > max) 
		{
			max = arregloresultados2x2[i];
		}
		if (arregloresultados2x2[i] < min) 
		{
			min = arregloresultados2x2[i];
		}

		arregloprovicional2x2.push(arregloresultados2x2[i]);
	}

	posicionmax = arregloprovicional2x2.lastIndexOf(max);		
	posicionmin = arregloprovicional2x2.indexOf(min);

	for (var i = arregloprovicional2x2.length -1; i >= arregloprovicional2x2.length - 12; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional2x2[i];
			} 
		}
	}

	division = suma / 10;

	ConvertirDivisionavg122x2(division);
	avg1002x2();
}

function ConvertirDivisionavg122x2 (tiempo) {
			
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

    if(arregloresultados2x2.length < 12)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg12time2x2").html(minutos+":"+segundos+"."+centi);		
}

function avg1002x2 () {

	var cantidad = arregloresultados2x2.length - 1;
	var arregloprovicional2x2 = [];
	var max = arregloresultados2x2[cantidad];
	var min = arregloresultados2x2[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados2x2.length - 1; i >= arregloresultados2x2.length - 100; i--) 
	{
		
		if (arregloresultados2x2[i] > max) 
		{
			max = arregloresultados2x2[i];
		}
		if (arregloresultados2x2[i] < min) 
		{
			min = arregloresultados2x2[i];
		}

		arregloprovicional2x2.push(arregloresultados2x2[i]);
	}

	posicionmax = arregloprovicional2x2.lastIndexOf(max);		
	posicionmin = arregloprovicional2x2.indexOf(min);

	for (var i = arregloprovicional2x2.length -1; i >= arregloprovicional2x2.length - 100; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional2x2[i];
			} 
		}
	}

	division = suma / 98;

	ConvertirDivisionavg1002x2(division);
	
}

function ConvertirDivisionavg1002x2 (tiempo) {
			
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

    if(arregloresultados2x2.length < 100)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}	
 	
	$("#avg100time2x2").html(minutos+":"+segundos+"."+centi);		
}