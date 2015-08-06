var arregloresultados2x2 = [];
var reserva2x2 = 0;
var numerotiempo2x2;
var myScroll2x2;

function insertar2x2() 
{
	
	arregloresultados2x2.push(resultadomilisegundos);
	operaciones2x2();
}

function operaciones2x2 () 
{
			
	var max = arregloresultados2x2[0]; 
	var min = arregloresultados2x2[0];
	var suma = 0;
	var division = 0;

	//determinar el tiempo mayor y menor
	    	    
	for (var i = 0; i < arregloresultados2x2.length; i++)
	{            	
	  	if (arregloresultados2x2[i] > max)
		{
	    	max = arregloresultados2x2[i]; 
	    } 
	    if (arregloresultados2x2[i] < min)
	    {
	    	min = arregloresultados2x2[i]; 
	    }
	} 
	        			
	for (var i = 0; i < arregloresultados2x2.length; i++) 
	{
		suma += arregloresultados2x2[i];
	}
	
	division = suma / parseInt(arregloresultados2x2.length);

	ConvertirPeor2x2(max);
	ConvertirMejor2x2(min);
	NuevoRecord2x2(min);
	ConvertirDivision2x2(division);
	MuestraTiempos2x2();
			
	suma = 0;
	division = 0;

	clearInterval(elcrono);
	marcha = 0;
	Algoritmo2();	
}

function ConvertirPeor2x2 (tiempo) {
			
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
	
	if(arregloresultados2x2.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#worst2x2").html(minutos+":"+segundos+"."+centi);
}

function ConvertirMejor2x2 (tiempo) {
			
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

    if(arregloresultados2x2.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}
 
	$("#best2x2").html(minutos+":"+segundos+"."+centi);

}

function ConvertirDivision2x2 (tiempo) {
			
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
 	
 	if(arregloresultados2x2.length == 0)
	{
		minutos = "00";
		segundos = "00";
		centi = "00";
	}

	$("#avg2x2").html(minutos+":"+segundos+"."+centi);		
}

function MuestraTiempos2x2 () {

	$("#ulLista2x2 .resultadoagregado").remove();

	numerotiempo2x2 = 1;

	for (var i = 0; i < arregloresultados2x2.length; i++) 
	{				
		hora = arregloresultados2x2[i] / 3600000;
		restodehora = arregloresultados2x2[i]%3600000;

		var centi = (arregloresultados2x2[i] % 1000)/10;
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

		var equistiempo = "<li class='resultadoagregado'><div class='espantosaX' onclick='Borrar2x2("+numerotiempo2x2+");'></div><p class ='espantosores'>"+numerotiempo2x2+".- "+minutos+":"+segundos+"."+centi+"</p></li>";

	  	$("#ulLista2x2").prepend(equistiempo);
		
		numerotiempo2x2++;
	}
	RefrescarScroll2x2();
}

function CargarScroll2x2(){

	myScroll2x2 = new IScroll('#contenedortiempos2x2', 
	{
		scrollbars: true,
		mouseWheel: true,
		click: true
	});

}	
document.addEventListener('DOMContentLoaded', CargarScroll2x2, false);

function RefrescarScroll2x2() {
	myScroll2x2.refresh();
}

function NuevoRecord2x2 (minimo) {

	if(minimo < reserva2x2)
	{
		var cambio =
		{
			'top' : '0'
		};

		$("#nuevorecord").css(cambio);
		setTimeout("RegresaRecord2x2()", 2000);
	}

	reserva2x2 = minimo;
}

function RegresaRecord2x2 () {
	
	var cambio2 = 
	{
		'top' : '-100%'
	};

	$('#nuevorecord').css(cambio2);
}

function Borrar2x2 (numeroid) {

	var numeroaborrar = numeroid -1 ;

	arregloresultados2x2.splice(numeroaborrar,1); 

	operaciones2x2();
}