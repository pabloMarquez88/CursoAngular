// creamos todos los controladores para cada una de las paginas
angular.module("appLab10").controller("agendaController", [ '$scope', 'agendaService', '$location', function($scope, agendaService, $location) {
	$scope.agenda = agendaService.getAgenda();
	$scope.titulo = "Gestion de tareas";
	$scope.crearPropietario = function() {
		agendaService.definirPropietario($scope.nombrePropietario);
		$location.path('/tarea');
	}
} ]).controller("listarTareasController", [ '$scope', '$location', 'agendaService', function($scope, $location, agendaService) {
	$scope.titulo = "Lista de tareas programadas";
	$scope.tareas = agendaService.getAgenda().tareas;
	$scope.seleccionar = function(tarea) {
		$location.path('/tarea/' + tarea.id);
	}
} ]).controller("tareasController", [ '$scope', '$location', '$routeParams', 'agendaService', function($scope, $location, $routeParams, agendaService) {
	$scope.titulo = "Datos de una tarea para la agenda de " + agendaService.getAgenda().propietario;
	$scope.unaTarea = {};

	if (!($routeParams.ID === undefined)) {
		// si viene un ID por URL entonces buscar en el servicio la tarea con
		// dicho ID
		// que se encuentra en $routeParams.ID
		$scope.unaTarea = agendaService.getTarea($routeParams.ID);
		alert('hola');
	}
	$scope.agregarTarea = function() {
		// guardar la tarea en el servicio
		// limpiar la tarea agregada seteandola a un objeto vacio.
		// redirigir a la vista de la lista de tareas
		agendaService.addTarea($scope.unaTarea);
		$scope.unaTarea = {};
		$location.path('/tareas');
	}

	$scope.actualizarTarea = function() {
		// actualizar la tarea en el servicio
		// limpiar la tarea agregada seteandola a un objeto vacio.
		// redirigir a la vista de la lista de tareas
		agendaService.actualizarTarea($scope.unaTarea);
		$scope.unaTarea = {};
		$location.path('/tareas');
	}
	$scope.borrarTarea = function() {
		// borrar la tarea en el servicio
		// limpiar la tarea agregada seteandola a un objeto vacio.
		// redirigir a la vista de la lista de tareas
		agendaService.borrarTarea($scope.unaTarea);
		$scope.unaTarea = {};
		$location.path('/tareas');
	}
	$scope.cancelar = function() {
		// limpiar la tarea agregada seteandola a un objeto vacio.
		// redirigir a la vista de la lista de tareas
		$scope.unaTarea = {};
		$location.path('/tareas');
	}
	$scope.ocultar = function(tipoBoton) {

	}
} ]);