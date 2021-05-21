function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("conver")
	
setInterval(CargarFichero, 2000)
function CargarFichero()
{
 	loadDocA("libros.xml","xml")
}
	
