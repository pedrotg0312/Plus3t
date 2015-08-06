var arregloresultadosPyra = [];
var reservaPyra = 0;
var numerotiempoPyra;
var myScrollPyra;

function insertarPyra() 
{
	
	arregloresultadosPyra.push(resultadomilisegundos);
	operacionesPyra();
}

function operacionesPyra () 
{
			
	var max = arregloresultadosPyra[0]; 
	var min = arregloresultadosPyra[0];
	var suma = 0;
	var division = 0;

	//determinar el tiempo mayor y menor
	    	    
	for (var i = 0; i < arregloresultadosPyra.length; i++)
	{            	
	  	if (arregloresultadosPyra[i] > max)
		{
	    	max = arregloresultadosPyra[i]; 
	    } 
	    if (arregloresultadosPyra[i] < min)
	    {
	    	min = arregloresultadosPyra[i]; 
	    }
	} 
	        			
	for (var i = 0; i < arregloresultadosPyra.length; i++) 
	{
		suma += arregloresultadosPyra[i];
	}
	
	division = suma / parseInt(arregloresultadosPyra.length);

	ConvertirPeorPyra(max);
	ConvertirMejorPyra(min);
	NuevoRecordPyra(min);
	ConvertirDivisionPyra(division);
	MuestraTiemposPyra();
			
	suma = 0;
	division = 0;

	clearInterval(elcrono);
	marcha = 0;
	Algoritmo2();	
}

function ConvertirPeorPyra (tiempo) {
			
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
	
	if(arregloresultadosPyra.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#worstPyra").html(minutos+":"+segundos+"."+centi);
}

function ConvertirMejorPyra (tiempo) {
			
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

    if(arregloresultadosPyra.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 
	$("#bestPyra").html(minutos+":"+segundos+"."+centi);

}

function ConvertirDivisionPyra (tiempo) {
			
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
 	
 	if(arregloresultadosPyra.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#avgPyra").html(minutos+":"+segundos+"."+centi);		
}

function MuestraTiemposPyra () {

	$("#ulListaPyra .resultadoagregado").remove();

	numerotiempoPyra = 1;

	for (var i = 0; i < arregloresultadosPyra.length; i++) 
	{				
		hora = arregloresultadosPyra[i] / 3600000;
		restodehora = arregloresultadosPyra[i]%3600000;

		var centi = (arregloresultadosPyra[i] % 1000)/10;
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

		var equistiempo = "<li class='resultadoagregado'><div class='espantosaX' onclick='BorrarPyra("+numerotiempoPyra+");'></div><p class ='espantosores'>"+numerotiempoPyra+".- "+minutos+":"+segundos+"."+centi+"</p></li>";

	  	$("#ulListaPyra").prepend(equistiempo);
		
		numerotiempoPyra++;
	}
	RefrescarScrollPyra();
}

function CargarScrollPyra(){

	myScrollPyra = new IScroll('#contenedortiemposPyra', 
	{
		scrollbars: true,
		mouseWheel: true,
		click: true
	});

}	
document.addEventListener('DOMContentLoaded', CargarScrollPyra, false);

function RefrescarScrollPyra() {
	myScrollPyra.refresh();
}

function NuevoRecordPyra (minimo) {

	if(minimo < reservaPyra)
	{
		var cambio =
		{
			'top' : '0'
		};

		$("#nuevorecord").css(cambio);
		setTimeout("RegresaRecordPyra()", 2000);
	}

	reservaPyra = minimo;
}

function RegresaRecordPyra () {
	
	var cambio2 = 
	{
		'top' : '-100%'
	};

	$('#nuevorecord').css(cambio2);
}

function BorrarPyra (numeroid) {

	var numeroaborrar = numeroid -1 ;

	arregloresultadosPyra.splice(numeroaborrar,1); 

	operacionesPyra();
}