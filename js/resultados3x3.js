var arregloresultados3x3 = [];
var reserva3x3 = 0;
var numerotiempo3x3;
var myScroll3x3;

function insertar3x3() 
{
	
	arregloresultados3x3.push(resultadomilisegundos);
	operaciones3x3();
}

function operaciones3x3 () 
{
			
	var max = arregloresultados3x3[0]; 
	var min = arregloresultados3x3[0];
	var suma = 0;
	var division = 0;

	//determinar el tiempo mayor y menor
	    	    
	for (var i = 0; i < arregloresultados3x3.length; i++)
	{            	
	  	if (arregloresultados3x3[i] > max)
		{
	    	max = arregloresultados3x3[i]; 
	    } 
	    if (arregloresultados3x3[i] < min)
	    {
	    	min = arregloresultados3x3[i]; 
	    }
	} 
	        			
	for (var i = 0; i < arregloresultados3x3.length; i++) 
	{
		suma += arregloresultados3x3[i];
	}
	
	division = suma / parseInt(arregloresultados3x3.length);

	ConvertirPeor3x3(max);
	ConvertirMejor3x3(min);
	NuevoRecord3x3(min);
	ConvertirDivision3x3(division);
	MuestraTiempos3x3();
			
	suma = 0;
	division = 0;

	clearInterval(elcrono);
	marcha = 0;
	Algoritmo2();	
}

function ConvertirPeor3x3 (tiempo) {
			
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
	
	if(arregloresultados3x3.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#worst3x3").html(minutos+":"+segundos+"."+centi);
}

function ConvertirMejor3x3 (tiempo) {
			
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

    if(arregloresultados3x3.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 
	$("#best3x3").html(minutos+":"+segundos+"."+centi);

}

function ConvertirDivision3x3 (tiempo) {
			
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
 	
 	if(arregloresultados3x3.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#avg3x3").html(minutos+":"+segundos+"."+centi);		
}

function MuestraTiempos3x3 () {

	$("#ulLista3x3 .resultadoagregado").remove();

	numerotiempo3x3 = 1;

	for (var i = 0; i < arregloresultados3x3.length; i++) 
	{				
		hora = arregloresultados3x3[i] / 3600000;
		restodehora = arregloresultados3x3[i]%3600000;

		var centi = (arregloresultados3x3[i] % 1000)/10;
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

		var equistiempo = "<li class='resultadoagregado'><div class='espantosaX' onclick='Borrar3x3("+numerotiempo3x3+");'></div><p class ='espantosores'>"+numerotiempo3x3+".- "+minutos+":"+segundos+"."+centi+"</p></li>";

	  	$("#ulLista3x3").prepend(equistiempo);
		
		numerotiempo3x3++;
	}
	RefrescarScroll3x3();
}

function CargarScroll3x3(){

	myScroll3x3 = new IScroll('#contenedortiempos3x3', 
	{
		scrollbars: true,
		mouseWheel: true,
		click: true
	});

}	
document.addEventListener('DOMContentLoaded', CargarScroll3x3, false);

function RefrescarScroll3x3() {
	myScroll3x3.refresh();
}

function NuevoRecord3x3 (minimo) {

	if(minimo < reserva3x3)
	{
		var cambio =
		{
			'top' : '0'
		};

		$("#nuevorecord").css(cambio);
		setTimeout("RegresaRecord3x3()", 2000);
	}

	reserva3x3 = minimo;
}

function RegresaRecord3x3 () {
	
	var cambio2 = 
	{
		'top' : '-100%'
	};

	$('#nuevorecord').css(cambio2);
}

function Borrar3x3 (numeroid) {

	var numeroaborrar = numeroid -1 ;

	arregloresultados3x3.splice(numeroaborrar,1); 

	operaciones3x3();
}