$(document).on("keyup", Comenzar);

var marcha = 0;
var elcrono;

function Comenzar(e)
{
	var tecla = String.fromCharCode(e.which);
	var teclado = 0;

	if (marcha == 0 && tecla == " ") 
	{
		teclado = 1;
	}

	if (marcha == 0 && e==32 || marcha == 0 && tecla == " ")  
	{
		Cronometro();			
	}	
	else if (marcha == 1 && tecla == " ") 
	{			
		//llama a la funcion para mostrar los resultados
		MostrarResultados();
	}
	else if (marcha == 1 && e == 32) 
	{
		MostrarResultados();
	}
}

function Cronometro () {
	
	visor = document.getElementById("cronometro");

	var resultadomilisegundos = 0;
 	
 	emp=new Date(); //fecha inicial (en el momento de pulsar)
    
    elcrono=setInterval(tiempo,10); //poner en marcha el temporizador.
    
    marcha=1; //indicamos que se ha puesto en marcha..
}

function tiempo()
{
	actual=new Date(); //fecha a cada instante	
        //tiempo del crono (resultadomilisegundos) = fecha instante (actual) - fecha inicial (emp)	
    resultadomilisegundos=actual-emp; //milisegundos transcurridos.	
    cr=new Date(); //pasamos el num. de milisegundos a objeto fecha.	
    cr.setTime(resultadomilisegundos); 
        //obtener los distintos formatos de la fecha:	
    cs=cr.getMilliseconds(); //milisegundos 	
    cs=cs/10; //paso a centésimas de segundo.	
    cs=Math.round(cs); //redondear las centésimas	
    sg=cr.getSeconds(); //segundos 	
    mn=cr.getMinutes(); //minutos 
    
    if (cs<10) {cs="0"+cs;} 
    if (sg<10) {sg="0"+sg;} 
    if (mn<10) {mn="0"+mn;} 
        //llevar resultado al visor.
    visor.innerHTML= mn+":"+sg+"."+cs;
}