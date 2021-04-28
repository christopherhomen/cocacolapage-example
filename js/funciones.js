/*$ ó jQuery: hay que seleccionar con que voy a trabajar
en este caso toda la web:document
document: es toda la web
Hay que buscar metodo o acciones para decir que trabajaremos con jquery
con ready se hace.
Se trabajan con elementos que están listos en una web lista
function: es un bloque de lienas de codigo que hace algo que se pueden repetir */
jQuery(document).ready(listo);


function listo()
{
	/**/
	/*alert("hola mundo");*/
	/*Eligo al elemento:hamb para que haga algo*/
	jQuery(".hamb").click(function(e){
		e.preventDefault();/*preventDefault: para quitar la funcion por defecto que
		tiene hamb, que es llevarnos arriba hasta el menu
		el e, representa la accion
		toggleClass: Quita o agrega una clase. Si este elemento seleccionado tiene la clase "open" la va a quitar
		si no la tiene la va a agregar*/
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-times");/*a la i que está dentro de una clase hamb*/
	}); 
	/*a todos los a, que están dentro del nav, que estan dentro de un div de clase container
	que estan dentro del header*/
	/*Trabajamos con los a que esta dentro del nav, debo seleccionarlos*/	
	jQuery("header .container nav a").click(function(){

		jQuery("header .container nav").removeClass("open");
		/*remuevo la clase fa-times de la i, para que se cierre el menu:*/
		jQuery(".hamb i").removeClass("fa-times");
		/*debo recuperar el valor del elemento al que le hago click:*/
		/*variable: donde puedo almacenar un valor de cualquier tipo*/
		/*almaceno el valor del href para despues usarlo:*/
		var dev = jQuery(this).attr("href");
		/*this: para obtener el valor del atributo(attr) o elemento al que le hago click, para obtener 
		el valor del href al que le hago click.
		en dev: guardo este valor*/
		/*html, body: los coloco dentro del parentesis porque voy a trabajr con ellos
		Metodo animate: para mover, animar
		seleccionar donde esta ubicado elemento que tiene como id, el valor que he recuperado del "A" presionado
		ejemplo: saber el id del elemento servicios o contactenos */
		jQuery("html,body").animate({
			/*offset: metodo para decirme desde el punto de arriba del explorador, 
			hasta el punto donde está un lugar(servicios, contactenos) y dar
			el valor*/
			"scrollTop": jQuery(dev).offset().top - 76
		})
	})
}