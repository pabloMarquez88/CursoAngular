// creamos el modulo e inyectamos el modulo de ruteo y luego lo configuramos
angular.module('appLab10', [ 'ngRoute' ]).config(function($routeProvider) {
	$routeProvider.when('/agenda', {
		controller : 'agendaController',
		templateUrl : 'templates/agenda.html'
	}).when('/tarea', {
		controller : 'tareasController',
		templateUrl : 'templates/altaTarea.html'
	})
	// agregar regla que cuando la URL sea del tipo /tarea/999 me muestre la
	// tarea 999
	.when('/tarea/:ID', {
		controller : 'tareasController',
		templateUrl : 'templates/altaTarea.html'
	}).when('/tareas', {
		controller : 'listarTareasController',
		templateUrl : 'templates/listaTareas.html'
	}).otherwise({
		redirectTo : 'agenda'
	});
});
