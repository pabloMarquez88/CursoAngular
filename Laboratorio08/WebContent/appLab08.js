// creamos el modulo e inyectamos el modulo de ruteo y luego lo configuramos
/**
 * PARA EL ALUMNO: reemplaze el codigo en " **** incluir el modulo ngRoute****"
 * por el modulo de ruteo como se indica en el punto 4.
 * 
 * Luego defina un elemento "when" por cada vista (agenda - alta de tarea -
 * lista de tareas) Debera tener en cuenta los controladores definidos en
 * controllers.js
 * 
 */
angular.module('appLab08', [ 'ngRoute' ]).config(function($routeProvider) {
	$routeProvider.when('/agenda', {
		controller : 'agendaController',
		templateUrl : 'templates/agenda.html'
	}).when('/altaTarea', {
		controller : 'tareasController',
		templateUrl : 'templates/altaTarea.html'
	}).when('/listaTareas', {
		controller : 'listarTareasController',
		templateUrl : 'templates/listaTareas.html'
	})
	// agregar todos los elementos when que necesite para que se pueda
	// tener una URL para cada una de las vistas en el directorio template
	.otherwise({
		redirectTo : 'agenda'
	});

});
