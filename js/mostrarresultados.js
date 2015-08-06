function MostrarResultados () {

	var tipodecubo = $(".sectiontiempos").attr('value');
		
	if (tipodecubo == 2) 
	{
		insertar2x2();
	}

	if (tipodecubo == 3) 
	{
		insertar3x3();
	}

	if (tipodecubo == 4) 
	{
		insertar4x4();
	}

	if (tipodecubo == 5) 
	{
		insertar5x5();
	}

	if (tipodecubo == 6) 
	{
		insertar6x6();
	}

	if (tipodecubo == 7) 
	{
		insertar7x7();
	}

	if (tipodecubo == 8) 
	{
		insertarPyra();
	}
}