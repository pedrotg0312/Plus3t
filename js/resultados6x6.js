var arregloresultados6x6 = [];
var reserva6x6 = 0;
var numerotiempo6x6;
var myScroll6x6;

function insertar6x6() 
{
	
	arregloresultados6x6.push(resultadomilisegundos);
	operaciones6x6();
}

function operaciones6x6 () 
{
			
	var max = arregloresultados6x6[0]; 
	var min = arregloresultados6x6[0];
	var suma = 0;
	var division = 0;

	//determinar el tiempo mayor y menor
	    	    
	for (var i = 0; i < arregloresultados6x6.length; i++)
	{            	
	  	if (arregloresultados6x6[i] > max)
		{
	    	max = arregloresultados6x6[i]; 
	    } 
	    if (arregloresultados6x6[i] < min)
	    {
	    	min = arregloresultados6x6[i]; 
	    }
	} 
	        			
	for (var i = 0; i < arregloresultados6x6.length; i++) 
	{
		suma += arregloresultados6x6[i];
	}
	
	division = suma / parseInt(arregloresultados6x6.length);

	ConvertirPeor6x6(max);
	ConvertirMejor6x6(min);
	NuevoRecord6x6(min);
	ConvertirDivision6x6(division);
	MuestraTiempos6x6();
			
	suma = 0;
	division = 0;

	clearInterval(elcrono);
	marcha = 0;
	Algoritmo2();	
}

function ConvertirPeor6x6 (tiempo) {
			
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
	
	if(arregloresultados6x6.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#worst6x6").html(minutos+":"+segundos+"."+centi);
}

function ConvertirMejor6x6 (tiempo) {
			
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

    if(arregloresultados6x6.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 
	$("#best6x6").html(minutos+":"+segundos+"."+centi);

}

function ConvertirDivision6x6 (tiempo) {
			
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
 	
 	if(arregloresultados6x6.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#avg6x6").html(minutos+":"+segundos+"."+centi);		
}

function MuestraTiempos6x6 () {

	$("#ulLista6x6 .resultadoagregado").remove();

	numerotiempo6x6 = 1;

	for (var i = 0; i < arregloresultados6x6.length; i++) 
	{				
		hora = arregloresultados6x6[i] / 3600000;
		restodehora = arregloresultados6x6[i]%3600000;

		var centi = (arregloresultados6x6[i] % 1000)/10;
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

		var equistiempo = "<li class='resultadoagregado'><div class='espantosaX' onclick='Borrar6x6("+numerotiempo6x6+");'></div><p class ='espantosores'>"+numerotiempo6x6+".- "+minutos+":"+segundos+"."+centi+"</p></li>";

	  	$("#ulLista6x6").prepend(equistiempo);
		
		numerotiempo6x6++;
	}
	RefrescarScroll6x6();
}

function CargarScroll6x6(){

	myScroll6x6 = new IScroll('#contenedortiempos6x6', 
	{
		scrollbars: true,
		mouseWheel: true,
		click: true
	});

}	
document.addEventListener('DOMContentLoaded', CargarScroll6x6, false);

function RefrescarScroll6x6() {
	myScroll6x6.refresh();
}

function NuevoRecord6x6 (minimo) {

	if(minimo < reserva6x6)
	{
		var cambio =
		{
			'top' : '0'
		};

		$("#nuevorecord").css(cambio);
		setTimeout("RegresaRecord6x6()", 2000);
	}

	reserva6x6 = minimo;
}

function RegresaRecord6x6 () {
	
	var cambio2 = 
	{
		'top' : '-100%'
	};

	$('#nuevorecord').css(cambio2);
}

function Borrar6x6 (numeroid) {

	var numeroaborrar = numeroid -1 ;

	arregloresultados6x6.splice(numeroaborrar,1); 

	operaciones6x6();
}