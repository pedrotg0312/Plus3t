var arregloresultados7x7 = [];
var reserva7x7 = 0;
var numerotiempo7x7;
var myScroll7x7;

function insertar7x7() 
{
	
	arregloresultados7x7.push(resultadomilisegundos);
	operaciones7x7();
}

function operaciones7x7 () 
{
			
	var max = arregloresultados7x7[0]; 
	var min = arregloresultados7x7[0];
	var suma = 0;
	var division = 0;

	//determinar el tiempo mayor y menor
	    	    
	for (var i = 0; i < arregloresultados7x7.length; i++)
	{            	
	  	if (arregloresultados7x7[i] > max)
		{
	    	max = arregloresultados7x7[i]; 
	    } 
	    if (arregloresultados7x7[i] < min)
	    {
	    	min = arregloresultados7x7[i]; 
	    }
	} 
	        			
	for (var i = 0; i < arregloresultados7x7.length; i++) 
	{
		suma += arregloresultados7x7[i];
	}
	
	division = suma / parseInt(arregloresultados7x7.length);

	ConvertirPeor7x7(max);
	ConvertirMejor7x7(min);
	NuevoRecord7x7(min);
	ConvertirDivision7x7(division);
	MuestraTiempos7x7();
			
	suma = 0;
	division = 0;

	clearInterval(elcrono);
	marcha = 0;
	Algoritmo2();	
}

function ConvertirPeor7x7 (tiempo) {
			
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
	
	if(arregloresultados7x7.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#worst7x7").html(minutos+":"+segundos+"."+centi);
}

function ConvertirMejor7x7 (tiempo) {
			
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

    if(arregloresultados7x7.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 
	$("#best7x7").html(minutos+":"+segundos+"."+centi);

}

function ConvertirDivision7x7 (tiempo) {
			
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
 	
 	if(arregloresultados7x7.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#avg7x7").html(minutos+":"+segundos+"."+centi);		
}

function MuestraTiempos7x7 () {

	$("#ulLista7x7 .resultadoagregado").remove();

	numerotiempo7x7 = 1;

	for (var i = 0; i < arregloresultados7x7.length; i++) 
	{				
		hora = arregloresultados7x7[i] / 3600000;
		restodehora = arregloresultados7x7[i]%3600000;

		var centi = (arregloresultados7x7[i] % 1000)/10;
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

		var equistiempo = "<li class='resultadoagregado'><div class='espantosaX' onclick='Borrar7x7("+numerotiempo7x7+");'></div><p class ='espantosores'>"+numerotiempo7x7+".- "+minutos+":"+segundos+"."+centi+"</p></li>";

	  	$("#ulLista7x7").prepend(equistiempo);
		
		numerotiempo7x7++;
	}
	RefrescarScroll7x7();
}

function CargarScroll7x7(){

	myScroll7x7 = new IScroll('#contenedortiempos7x7', 
	{
		scrollbars: true,
		mouseWheel: true,
		click: true
	});

}	
document.addEventListener('DOMContentLoaded', CargarScroll7x7, false);

function RefrescarScroll7x7() {
	myScroll7x7.refresh();
}

function NuevoRecord7x7 (minimo) {

	if(minimo < reserva7x7)
	{
		var cambio =
		{
			'top' : '0'
		};

		$("#nuevorecord").css(cambio);
		setTimeout("RegresaRecord7x7()", 2000);
	}

	reserva7x7 = minimo;
}

function RegresaRecord7x7 () {
	
	var cambio2 = 
	{
		'top' : '-100%'
	};

	$('#nuevorecord').css(cambio2);
}

function Borrar7x7 (numeroid) {

	var numeroaborrar = numeroid -1 ;

	arregloresultados7x7.splice(numeroaborrar,1); 

	operaciones7x7();
}