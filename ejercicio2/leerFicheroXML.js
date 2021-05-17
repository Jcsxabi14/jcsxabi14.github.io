function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++)
		if (i%2==0) 
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='impar'>" + libros[i].textContent + "</p>"
			else
				capaVacia.innerHTML = capaVacia.innerHTML + "<p class='par'>" + libros[i].textContent + "</p>"
	
}
function cargarfichero()
{
 	(loadDocA("libros.xml","xml")
	 }
)
	setInterval(cargarfichero, 2000)
