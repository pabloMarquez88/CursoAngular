/*angular.module('allLab06', {
  setup: function() {
    // setup for module name 
  },
  teardown: function() {
    //teardown for module name
  }
});*/

angular.module('appLab06', []);

angular.module("appLab06").controller('tareasController', [ '$scope', function($scope) {
	$scope.titulo = "Gestion de tareas";
	$scope.agenda = {
		propietario : undefined,
		tareas : []
	};

	// gestion de tareas
	$scope.unaTarea = {};

	$scope.crearPropietario = function() {
		this.agenda.propietario = $scope.nombrePropietario;
	}

	$scope.agregarTarea = function() {
		$scope.agenda.tareas.push($scope.unaTarea);
		// limpiar la tarea agregada.
		$scope.unaTarea = {};
	}

	$scope.seleccionar = function(tarea) {
		$scope.unaTarea = tarea;
	}

	$scope.modificarTarea = function(tarea) {
		$scope.unaTarea = {};
	}

	$scope.eliminarTarea = function(indice) {
		$scope.agenda.tareas.splice(indice, 1);
	}
} ])

angular.module('appLab06').filter('fecha', function($filter) {
	return function(input) {
		if (input == null) {
			return "";
		}

		var _date = $filter('date')(new Date(input), 'MMM dd yyyy');

		return _date.toUpperCase();

	};
});
