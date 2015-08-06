var arregloresultados4x4 = [];
var reserva4x4 = 0;
var numerotiempo4x4;
var myScroll4x4;

function insertar4x4() 
{
	
	arregloresultados4x4.push(resultadomilisegundos);
	operaciones4x4();
}

function operaciones4x4 () 
{
			
	var max = arregloresultados4x4[0]; 
	var min = arregloresultados4x4[0];
	var suma = 0;
	var division = 0;

	//determinar el tiempo mayor y menor
	    	    
	for (var i = 0; i < arregloresultados4x4.length; i++)
	{            	
	  	if (arregloresultados4x4[i] > max)
		{
	    	max = arregloresultados4x4[i]; 
	    } 
	    if (arregloresultados4x4[i] < min)
	    {
	    	min = arregloresultados4x4[i]; 
	    }
	} 
	        			
	for (var i = 0; i < arregloresultados4x4.length; i++) 
	{
		suma += arregloresultados4x4[i];
	}
	
	division = suma / parseInt(arregloresultados4x4.length);

	ConvertirPeor4x4(max);
	ConvertirMejor4x4(min);
	NuevoRecord4x4(min);
	ConvertirDivision4x4(division);
	MuestraTiempos4x4();
			
	suma = 0;
	division = 0;

	clearInterval(elcrono);
	marcha = 0;
	Algoritmo2();	
}

function ConvertirPeor4x4 (tiempo) {
			
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
	
	if(arregloresultados4x4.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#worst4x4").html(minutos+":"+segundos+"."+centi);
}

function ConvertirMejor4x4 (tiempo) {
			
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

    if(arregloresultados4x4.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 
	$("#best4x4").html(minutos+":"+segundos+"."+centi);

}

function ConvertirDivision4x4 (tiempo) {
			
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
 	
 	if(arregloresultados4x4.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#avg4x4").html(minutos+":"+segundos+"."+centi);		
}

function MuestraTiempos4x4 () {

	$("#ulLista4x4 .resultadoagregado").remove();

	numerotiempo4x4 = 1;

	for (var i = 0; i < arregloresultados4x4.length; i++) 
	{				
		hora = arregloresultados4x4[i] / 3600000;
		restodehora = arregloresultados4x4[i]%3600000;

		var centi = (arregloresultados4x4[i] % 1000)/10;
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

		var equistiempo = "<li class='resultadoagregado'><div class='espantosaX' onclick='Borrar4x4("+numerotiempo4x4+");'></div><p class ='espantosores'>"+numerotiempo4x4+".- "+minutos+":"+segundos+"."+centi+"</p></li>";

	  	$("#ulLista4x4").prepend(equistiempo);
		
		numerotiempo4x4++;
	}
	RefrescarScroll4x4();
}

function CargarScroll4x4(){

	myScroll4x4 = new IScroll('#contenedortiempos4x4', 
	{
		scrollbars: true,
		mouseWheel: true,
		click: true
	});

}	
document.addEventListener('DOMContentLoaded', CargarScroll4x4, false);

function RefrescarScroll4x4() {
	myScroll4x4.refresh();
}

function NuevoRecord4x4 (minimo) {

	if(minimo < reserva4x4)
	{
		var cambio =
		{
			'top' : '0'
		};

		$("#nuevorecord").css(cambio);
		setTimeout("RegresaRecord4x4()", 2000);
	}

	reserva4x4 = minimo;
}

function RegresaRecord4x4 () {
	
	var cambio2 = 
	{
		'top' : '-100%'
	};

	$('#nuevorecord').css(cambio2);
}

function Borrar4x4 (numeroid) {

	var numeroaborrar = numeroid -1 ;

	arregloresultados4x4.splice(numeroaborrar,1); 

	operaciones4x4();
}