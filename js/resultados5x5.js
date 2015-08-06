var arregloresultados5x5 = [];
var reserva5x5 = 0;
var numerotiempo5x5;
var myScroll5x5;

function insertar5x5() 
{
	
	arregloresultados5x5.push(resultadomilisegundos);
	operaciones5x5();
}

function operaciones5x5 () 
{
			
	var max = arregloresultados5x5[0]; 
	var min = arregloresultados5x5[0];
	var suma = 0;
	var division = 0;

	//determinar el tiempo mayor y menor
	    	    
	for (var i = 0; i < arregloresultados5x5.length; i++)
	{            	
	  	if (arregloresultados5x5[i] > max)
		{
	    	max = arregloresultados5x5[i]; 
	    } 
	    if (arregloresultados5x5[i] < min)
	    {
	    	min = arregloresultados5x5[i]; 
	    }
	} 
	        			
	for (var i = 0; i < arregloresultados5x5.length; i++) 
	{
		suma += arregloresultados5x5[i];
	}
	
	division = suma / parseInt(arregloresultados5x5.length);

	ConvertirPeor5x5(max);
	ConvertirMejor5x5(min);
	NuevoRecord5x5(min);
	ConvertirDivision5x5(division);
	MuestraTiempos5x5();
			
	suma = 0;
	division = 0;

	clearInterval(elcrono);
	marcha = 0;
	Algoritmo2();	
}

function ConvertirPeor5x5 (tiempo) {
			
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
	
	if(arregloresultados5x5.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#worst5x5").html(minutos+":"+segundos+"."+centi);
}

function ConvertirMejor5x5 (tiempo) {
			
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

    if(arregloresultados5x5.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 
	$("#best5x5").html(minutos+":"+segundos+"."+centi);

}

function ConvertirDivision5x5 (tiempo) {
			
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
 	
 	if(arregloresultados5x5.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#avg5x5").html(minutos+":"+segundos+"."+centi);		
}

function MuestraTiempos5x5 () {

	$("#ulLista5x5 .resultadoagregado").remove();

	numerotiempo5x5 = 1;

	for (var i = 0; i < arregloresultados5x5.length; i++) 
	{				
		hora = arregloresultados5x5[i] / 3600000;
		restodehora = arregloresultados5x5[i]%3600000;

		var centi = (arregloresultados5x5[i] % 1000)/10;
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

		var equistiempo = "<li class='resultadoagregado'><div class='espantosaX' onclick='Borrar5x5("+numerotiempo5x5+");'></div><p class ='espantosores'>"+numerotiempo5x5+".- "+minutos+":"+segundos+"."+centi+"</p></li>";

	  	$("#ulLista5x5").prepend(equistiempo);
		
		numerotiempo5x5++;
	}
	RefrescarScroll5x5();
}

function CargarScroll5x5(){

	myScroll5x5 = new IScroll('#contenedortiempos5x5', 
	{
		scrollbars: true,
		mouseWheel: true,
		click: true
	});

}	
document.addEventListener('DOMContentLoaded', CargarScroll5x5, false);

function RefrescarScroll5x5() {
	myScroll5x5.refresh();
}

function NuevoRecord5x5 (minimo) {

	if(minimo < reserva5x5)
	{
		var cambio =
		{
			'top' : '0'
		};

		$("#nuevorecord").css(cambio);
		setTimeout("RegresaRecord5x5()", 2000);
	}

	reserva5x5 = minimo;
}

function RegresaRecord5x5 () {
	
	var cambio2 = 
	{
		'top' : '-100%'
	};

	$('#nuevorecord').css(cambio2);
}

function Borrar5x5 (numeroid) {

	var numeroaborrar = numeroid -1 ;

	arregloresultados5x5.splice(numeroaborrar,1); 

	operaciones5x5();
}