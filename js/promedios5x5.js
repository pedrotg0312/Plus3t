//buscar los últimos 5
function avg55x5 () {

	var cantidad = arregloresultados5x5.length - 1;
	var arregloprovicional5x5 = [];
	var max = arregloresultados5x5[cantidad];
	var min = arregloresultados5x5[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados5x5.length - 1; i >= arregloresultados5x5.length - 5; i--) 
	{
			
		if (arregloresultados5x5[i] > max) 
		{
			max = arregloresultados5x5[i];
		}
		if (arregloresultados5x5[i] < min) 
		{
			min = arregloresultados5x5[i];
		}

		arregloprovicional5x5.push(arregloresultados5x5[i]);
	}


	posicionmax = arregloprovicional5x5.lastIndexOf(max);		
	posicionmin = arregloprovicional5x5.indexOf(min);

	for (var i = arregloprovicional5x5.length -1; i >= arregloprovicional5x5.length - 5; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional5x5[i];
			} 
		}
	}

	division = suma / 3;
	ConvertirDivisionavg55x5(division);
	avg125x5();
}

function ConvertirDivisionavg55x5 (tiempo) {
			
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

    if(arregloresultados5x5.length < 5)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg5time5x5").html(minutos+":"+segundos+"."+centi);		
}

function avg125x5 () {

	var cantidad = arregloresultados5x5.length - 1;
	var arregloprovicional5x5 = [];
	var max = arregloresultados5x5[cantidad];
	var min = arregloresultados5x5[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados5x5.length - 1; i >= arregloresultados5x5.length - 12; i--) 
	{
			
		if (arregloresultados5x5[i] > max) 
		{
			max = arregloresultados5x5[i];
		}
		if (arregloresultados5x5[i] < min) 
		{
			min = arregloresultados5x5[i];
		}

		arregloprovicional5x5.push(arregloresultados5x5[i]);
	}

	posicionmax = arregloprovicional5x5.lastIndexOf(max);		
	posicionmin = arregloprovicional5x5.indexOf(min);

	for (var i = arregloprovicional5x5.length -1; i >= arregloprovicional5x5.length - 12; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional5x5[i];
			} 
		}
	}

	division = suma / 10;

	ConvertirDivisionavg125x5(division);
	avg1005x5();
}

function ConvertirDivisionavg125x5 (tiempo) {
			
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

    if(arregloresultados5x5.length < 12)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 	
	$("#avg12time5x5").html(minutos+":"+segundos+"."+centi);		
}

function avg1005x5 () {

	var cantidad = arregloresultados5x5.length - 1;
	var arregloprovicional5x5 = [];
	var max = arregloresultados5x5[cantidad];
	var min = arregloresultados5x5[cantidad];
	var posicionmax = 0;
	var posicionmin = 0;
	var suma = 0;
	var division = 0;

	for (var i = arregloresultados5x5.length - 1; i >= arregloresultados5x5.length - 100; i--) 
	{
		
		if (arregloresultados5x5[i] > max) 
		{
			max = arregloresultados5x5[i];
		}
		if (arregloresultados5x5[i] < min) 
		{
			min = arregloresultados5x5[i];
		}

		arregloprovicional5x5.push(arregloresultados5x5[i]);
	}

	posicionmax = arregloprovicional5x5.lastIndexOf(max);		
	posicionmin = arregloprovicional5x5.indexOf(min);

	for (var i = arregloprovicional5x5.length -1; i >= arregloprovicional5x5.length - 100; i--) 
	{
		if (i != posicionmax )
		{
			if(i != posicionmin)
			{
				suma += arregloprovicional5x5[i];
			} 
		}
	}

	division = suma / 98;

	ConvertirDivisionavg1005x5(division);
	
}

function ConvertirDivisionavg1005x5 (tiempo) {
			
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

    if(arregloresultados5x5.length < 100)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}	
 	
	$("#avg100time5x5").html(minutos+":"+segundos+"."+centi);		
}