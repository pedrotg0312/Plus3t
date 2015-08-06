function muestraoculta (tipodecubo) {

	var mostrar = 
	{
		'left' : '0'
	};

	var mostrar2 = 
	{
		'left' : '90%'
	};

	var ocultar = 
	{
		'left' : '-100%'
	};

	if (tipodecubo == 2) 
	{
		$("#selectinicio").css(ocultar);
		$("#tira2x2").css(mostrar);
		$("#tira3x3").css(ocultar);
		$("#tira4x4").css(ocultar);
		$("#tira5x5").css(ocultar);
		$("#tira6x6").css(ocultar);
		$("#tira7x7").css(ocultar);
		$("#tiraPyra").css(ocultar);
		$("#promedios2x2").css(mostrar);
		$("#promedios3x3").css(ocultar);
		$("#promedios4x4").css(ocultar);
		$("#promedios5x5").css(ocultar);
		$("#promedios6x6").css(ocultar);
		$("#promedios7x7").css(ocultar);
		$("#promediosPyra").css(ocultar);
		$("#menugeneral").css(ocultar);
		$("#contenedortiempos2x2").css(ocultar);
		$("#contenedortiempos3x3").css(ocultar);
		$("#contenedortiempos4x4").css(ocultar);
		$("#contenedortiempos5x5").css(ocultar);
		$("#contenedortiempos6x6").css(ocultar);
		$("#contenedortiempos7x7").css(ocultar);
		$("#contenedortiemposPyra").css(ocultar);
		$("#promedios2x2").addClass("sectiontiempos");
		$("#promedios3x3").removeClass("sectiontiempos");
		$("#promedios4x4").removeClass("sectiontiempos");
		$("#promedios5x5").removeClass("sectiontiempos");
		$("#promedios6x6").removeClass("sectiontiempos");
		$("#promedios7x7").removeClass("sectiontiempos");
		$("#promediosPyra").removeClass("sectiontiempos");
		$(".contenedor").css(ocultar);
		$(".contenedoravg").css(ocultar);
		Algoritmo2();
	}

	if (tipodecubo == 3) 
	{
		$("#selectinicio").css(ocultar);
		$("#tira2x2").css(ocultar);
		$("#tira3x3").css(mostrar);
		$("#tira4x4").css(ocultar);
		$("#tira5x5").css(ocultar);
		$("#tira6x6").css(ocultar);
		$("#tira7x7").css(ocultar);
		$("#tiraPyra").css(ocultar);
		$("#promedios2x2").css(ocultar);
		$("#promedios3x3").css(mostrar);
		$("#promedios4x4").css(ocultar);
		$("#promedios5x5").css(ocultar);
		$("#promedios6x6").css(ocultar);
		$("#promedios7x7").css(ocultar);
		$("#promediosPyra").css(ocultar);
		$("#menugeneral").css(ocultar);
		$("#contenedortiempos2x2").css(ocultar);
		$("#contenedortiempos3x3").css(ocultar);
		$("#contenedortiempos4x4").css(ocultar);
		$("#contenedortiempos5x5").css(ocultar);
		$("#contenedortiempos6x6").css(ocultar);
		$("#contenedortiempos7x7").css(ocultar);
		$("#contenedortiemposPyra").css(ocultar);
		$("#promedios2x2").removeClass("sectiontiempos");
		$("#promedios3x3").addClass("sectiontiempos");
		$("#promedios4x4").removeClass("sectiontiempos");
		$("#promedios5x5").removeClass("sectiontiempos");
		$("#promedios6x6").removeClass("sectiontiempos");
		$("#promedios7x7").removeClass("sectiontiempos");
		$("#promediosPyra").removeClass("sectiontiempos");
		$(".contenedor").css(ocultar);
		$(".contenedoravg").css(ocultar);
		Algoritmo3();
	}

	if (tipodecubo == 4) 
	{
		$("#selectinicio").css(ocultar);
		$("#tira2x2").css(ocultar);
		$("#tira3x3").css(ocultar);
		$("#tira4x4").css(mostrar);
		$("#tira5x5").css(ocultar);
		$("#tira6x6").css(ocultar);
		$("#tira7x7").css(ocultar);
		$("#tiraPyra").css(ocultar);
		$("#promedios2x2").css(ocultar);
		$("#promedios3x3").css(ocultar);
		$("#promedios4x4").css(mostrar);
		$("#promedios5x5").css(ocultar);
		$("#promedios6x6").css(ocultar);
		$("#promedios7x7").css(ocultar);
		$("#promediosPyra").css(ocultar);
		$("#menugeneral").css(ocultar);
		$("#contenedortiempos2x2").css(ocultar);
		$("#contenedortiempos3x3").css(ocultar);
		$("#contenedortiempos4x4").css(ocultar);
		$("#contenedortiempos5x5").css(ocultar);
		$("#contenedortiempos6x6").css(ocultar);
		$("#contenedortiempos7x7").css(ocultar);
		$("#contenedortiemposPyra").css(ocultar);
		$("#promedios2x2").removeClass("sectiontiempos");
		$("#promedios3x3").removeClass("sectiontiempos");
		$("#promedios4x4").addClass("sectiontiempos");
		$("#promedios5x5").removeClass("sectiontiempos");
		$("#promedios6x6").removeClass("sectiontiempos");
		$("#promedios7x7").removeClass("sectiontiempos");
		$("#promediosPyra").removeClass("sectiontiempos");
		$(".contenedor").css(ocultar);
		$(".contenedoravg").css(ocultar);
		Algoritmo4();
	}

	if (tipodecubo == 5) 
	{
		$("#selectinicio").css(ocultar);
		$("#tira2x2").css(ocultar);
		$("#tira3x3").css(ocultar);
		$("#tira4x4").css(ocultar);
		$("#tira5x5").css(mostrar);
		$("#tira6x6").css(ocultar);
		$("#tira7x7").css(ocultar);
		$("#tiraPyra").css(ocultar);
		$("#promedios2x2").css(ocultar);
		$("#promedios3x3").css(ocultar);
		$("#promedios4x4").css(ocultar);
		$("#promedios5x5").css(mostrar);
		$("#promedios6x6").css(ocultar);
		$("#promedios7x7").css(ocultar);
		$("#promediosPyra").css(ocultar);
		$("#menugeneral").css(ocultar);
		$("#contenedortiempos2x2").css(ocultar);
		$("#contenedortiempos3x3").css(ocultar);
		$("#contenedortiempos4x4").css(ocultar);
		$("#contenedortiempos5x5").css(ocultar);
		$("#contenedortiempos6x6").css(ocultar);
		$("#contenedortiempos7x7").css(ocultar);
		$("#contenedortiemposPyra").css(ocultar);
		$("#promedios2x2").removeClass("sectiontiempos");
		$("#promedios3x3").removeClass("sectiontiempos");
		$("#promedios4x4").removeClass("sectiontiempos");
		$("#promedios5x5").addClass("sectiontiempos");
		$("#promedios6x6").removeClass("sectiontiempos");
		$("#promedios7x7").removeClass("sectiontiempos");
		$("#promediosPyra").removeClass("sectiontiempos");
		$(".contenedor").css(ocultar);
		$(".contenedoravg").css(ocultar);
		Algoritmo5();
	}

	if (tipodecubo == 6) 
	{
		$("#selectinicio").css(ocultar);
		$("#tira2x2").css(ocultar);
		$("#tira3x3").css(ocultar);
		$("#tira4x4").css(ocultar);
		$("#tira5x5").css(ocultar);
		$("#tira6x6").css(mostrar);
		$("#tira7x7").css(ocultar);
		$("#tiraPyra").css(ocultar);
		$("#promedios2x2").css(ocultar);
		$("#promedios3x3").css(ocultar);
		$("#promedios4x4").css(ocultar);
		$("#promedios5x5").css(ocultar);
		$("#promedios6x6").css(mostrar);
		$("#promedios7x7").css(ocultar);
		$("#promediosPyra").css(ocultar);
		$("#menugeneral").css(ocultar);
		$("#contenedortiempos2x2").css(ocultar);
		$("#contenedortiempos3x3").css(ocultar);
		$("#contenedortiempos4x4").css(ocultar);
		$("#contenedortiempos5x5").css(ocultar);
		$("#contenedortiempos6x6").css(ocultar);
		$("#contenedortiempos7x7").css(ocultar);
		$("#contenedortiemposPyra").css(ocultar);
		$("#promedios2x2").removeClass("sectiontiempos");
		$("#promedios3x3").removeClass("sectiontiempos");
		$("#promedios4x4").removeClass("sectiontiempos");
		$("#promedios5x5").removeClass("sectiontiempos");
		$("#promedios6x6").addClass("sectiontiempos");
		$("#promedios7x7").removeClass("sectiontiempos");
		$("#promediosPyra").removeClass("sectiontiempos");
		$(".contenedor").css(ocultar);
		$(".contenedoravg").css(ocultar);
		Algoritmo6();
	}

	if (tipodecubo == 7) 
	{
		$("#selectinicio").css(ocultar);
		$("#tira2x2").css(ocultar);
		$("#tira3x3").css(ocultar);
		$("#tira4x4").css(ocultar);
		$("#tira5x5").css(ocultar);
		$("#tira6x6").css(ocultar);
		$("#tira7x7").css(mostrar);
		$("#tiraPyra").css(ocultar);
		$("#promedios2x2").css(ocultar);
		$("#promedios3x3").css(ocultar);
		$("#promedios4x4").css(ocultar);
		$("#promedios5x5").css(ocultar);
		$("#promedios6x6").css(ocultar);
		$("#promedios7x7").css(mostrar);
		$("#promediosPyra").css(ocultar);
		$("#menugeneral").css(ocultar);
		$("#contenedortiempos2x2").css(ocultar);
		$("#contenedortiempos3x3").css(ocultar);
		$("#contenedortiempos4x4").css(ocultar);
		$("#contenedortiempos5x5").css(ocultar);
		$("#contenedortiempos6x6").css(ocultar);
		$("#contenedortiempos7x7").css(ocultar);
		$("#contenedortiemposPyra").css(ocultar);
		$("#promedios2x2").removeClass("sectiontiempos");
		$("#promedios3x3").removeClass("sectiontiempos");
		$("#promedios4x4").removeClass("sectiontiempos");
		$("#promedios5x5").removeClass("sectiontiempos");
		$("#promedios6x6").removeClass("sectiontiempos");
		$("#promedios7x7").addClass("sectiontiempos");
		$("#promediosPyra").removeClass("sectiontiempos");
		$(".contenedor").css(ocultar);
		$(".contenedoravg").css(ocultar);
		Algoritmo7();
	}

	if (tipodecubo == 8) 
	{
		$("#selectinicio").css(ocultar);
		$("#tira2x2").css(ocultar);
		$("#tira3x3").css(ocultar);
		$("#tira4x4").css(ocultar);
		$("#tira5x5").css(ocultar);
		$("#tira6x6").css(ocultar);
		$("#tira7x7").css(ocultar);
		$("#tiraPyra").css(mostrar);
		$("#promedios2x2").css(ocultar);
		$("#promedios3x3").css(ocultar);
		$("#promedios4x4").css(ocultar);
		$("#promedios5x5").css(ocultar);
		$("#promedios6x6").css(ocultar);
		$("#promedios7x7").css(ocultar);
		$("#promediosPyra").css(mostrar);
		$("#menugeneral").css(ocultar);
		$("#contenedortiempos2x2").css(ocultar);
		$("#contenedortiempos3x3").css(ocultar);
		$("#contenedortiempos4x4").css(ocultar);
		$("#contenedortiempos5x5").css(ocultar);
		$("#contenedortiempos6x6").css(ocultar);
		$("#contenedortiempos7x7").css(ocultar);
		$("#contenedortiemposPyra").css(ocultar);
		$("#promedios2x2").removeClass("sectiontiempos");
		$("#promedios3x3").removeClass("sectiontiempos");
		$("#promedios4x4").removeClass("sectiontiempos");
		$("#promedios5x5").removeClass("sectiontiempos");
		$("#promedios6x6").removeClass("sectiontiempos");
		$("#promedios7x7").removeClass("sectiontiempos");
		$("#promediosPyra").addClass("sectiontiempos");
		$(".contenedor").css(ocultar);
		$(".contenedoravg").css(ocultar);
		AlgoritmoPyra();
	}

	if (tipodecubo == 100) 
	{
		$("#menugeneral").css(mostrar);
	}
	if (tipodecubo == 101) 
	{
		$("#menugeneral").css(ocultar);
	}
	if (tipodecubo == 102) 
	{
		$("#selectinicio").css(mostrar);
		$("#menugeneral").css(ocultar);
		$(".btncanceltime").css(ocultar);
		$(".contenedoravg").css(ocultar);
		$("#promedios2x2").css(ocultar);
		$("#promedios3x3").css(ocultar);
		$("#promedios4x4").css(ocultar);
		$("#promedios5x5").css(ocultar);
		$("#promedios6x6").css(ocultar);
		$("#promedios7x7").css(ocultar);
		$("#promediosPyra").css(ocultar);
	}
	if (tipodecubo == 103) 
	{
		var tipodecubo2 = $(".sectiontiempos").attr('value');
		
		if (tipodecubo2 == 2) 
		{
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(mostrar2);
			$("#contenedortiempos2x2").css(mostrar);
			$("#contenedortiempos3x3").css(ocultar);
			$("#contenedortiempos4x4").css(ocultar);
			$("#contenedortiempos5x5").css(ocultar);
			$("#contenedortiempos6x6").css(ocultar);
			$("#contenedortiempos7x7").css(ocultar);
			$("#contenedortiemposPyra").css(ocultar);
			$(".contenedoravg").css(ocultar);
		}

		if (tipodecubo2 == 3) 
		{
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(mostrar2);
			$("#contenedortiempos2x2").css(ocultar);
			$("#contenedortiempos3x3").css(mostrar);
			$("#contenedortiempos4x4").css(ocultar);
			$("#contenedortiempos5x5").css(ocultar);
			$("#contenedortiempos6x6").css(ocultar);
			$("#contenedortiempos7x7").css(ocultar);
			$("#contenedortiemposPyra").css(ocultar);
			$(".contenedoravg").css(ocultar);
		}

		if (tipodecubo2 == 4) 
		{
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(mostrar2);
			$("#contenedortiempos2x2").css(ocultar);
			$("#contenedortiempos3x3").css(ocultar);
			$("#contenedortiempos4x4").css(mostrar);
			$("#contenedortiempos5x5").css(ocultar);
			$("#contenedortiempos6x6").css(ocultar);
			$("#contenedortiempos7x7").css(ocultar);
			$("#contenedortiemposPyra").css(ocultar);
			$(".contenedoravg").css(ocultar);
		}

		if (tipodecubo2 == 5) 
		{
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(mostrar2);
			$("#contenedortiempos2x2").css(ocultar);
			$("#contenedortiempos3x3").css(ocultar);
			$("#contenedortiempos4x4").css(ocultar);
			$("#contenedortiempos5x5").css(mostrar);
			$("#contenedortiempos6x6").css(ocultar);
			$("#contenedortiempos7x7").css(ocultar);
			$("#contenedortiemposPyra").css(ocultar);
			$(".contenedoravg").css(ocultar);
		}

		if (tipodecubo2 == 6) 
		{
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(mostrar2);
			$("#contenedortiempos2x2").css(ocultar);
			$("#contenedortiempos3x3").css(ocultar);
			$("#contenedortiempos4x4").css(ocultar);
			$("#contenedortiempos5x5").css(ocultar);
			$("#contenedortiempos6x6").css(mostrar);
			$("#contenedortiempos7x7").css(ocultar);
			$("#contenedortiemposPyra").css(ocultar);
			$(".contenedoravg").css(ocultar);
		}

		if (tipodecubo2 == 7) 
		{
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(mostrar2);
			$("#contenedortiempos2x2").css(ocultar);
			$("#contenedortiempos3x3").css(ocultar);
			$("#contenedortiempos4x4").css(ocultar);
			$("#contenedortiempos5x5").css(ocultar);
			$("#contenedortiempos6x6").css(ocultar);
			$("#contenedortiempos7x7").css(mostrar);
			$("#contenedortiemposPyra").css(ocultar);
			$(".contenedoravg").css(ocultar);
		}

		if (tipodecubo2 == 8) 
		{
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(mostrar2);
			$("#contenedortiempos2x2").css(ocultar);
			$("#contenedortiempos3x3").css(ocultar);
			$("#contenedortiempos4x4").css(ocultar);
			$("#contenedortiempos5x5").css(ocultar);
			$("#contenedortiempos6x6").css(ocultar);
			$("#contenedortiempos7x7").css(ocultar);
			$("#contenedortiemposPyra").css(mostrar);
			$(".contenedoravg").css(ocultar);
		}
	}

	if (tipodecubo == 104) 
	{
		var tipodecubo2 = $(".sectiontiempos").attr('value');
		
		if (tipodecubo2 == 2) 
		{
			$("#menugeneral").css(ocultar);
			$("#contenedoravg2x2").css(mostrar);
			$(".btncanceltime").css(ocultar);
			$(".contenedor").css(ocultar);
			avg52x2();
		}

		if (tipodecubo2 == 3) 
		{
			$("#contenedoravg3x3").css(mostrar);
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(ocultar);
			$(".contenedor").css(ocultar);
			avg53x3();	
		}

		if (tipodecubo2 == 4) 
		{
			$("#contenedoravg4x4").css(mostrar);
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(ocultar);
			$(".contenedor").css(ocultar);
			avg54x4();
		}

		if (tipodecubo2 == 5) 
		{
			$("#contenedoravg5x5").css(mostrar);
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(ocultar);
			$(".contenedor").css(ocultar);
			avg55x5();
		}

		if (tipodecubo2 == 6) 
		{
			$("#contenedoravg6x6").css(mostrar);
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(ocultar);
			$(".contenedor").css(ocultar);
			avg56x6();
		}

		if (tipodecubo2 == 7) 
		{
			$("#contenedoravg7x7").css(mostrar);
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(ocultar);
			$(".contenedor").css(ocultar);
			avg57x7();
		}

		if (tipodecubo2 == 8) 
		{
			$("#contenedoravgPyra").css(mostrar);
			$("#menugeneral").css(ocultar);
			$(".btncanceltime").css(ocultar);
			$(".contenedor").css(ocultar);
			avg5Pyra();
		}
	}
	if (tipodecubo == 105) 
	{
		$(".contenedoravg").css(ocultar);
	}
	if (tipodecubo == 106) 
	{
		$(".contenedor").css(ocultar);
		$(".btncanceltime").css(ocultar);
	}
}