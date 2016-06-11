angular.module("appLab11").factory("agendaServiceHttp", ['$http', function($http) {
    var agendaService = {};
    // cada vez que cargue el servicio se busca la agenda 1
    var agenda = {};
    // si existe la agenda de ID 1 en la base de datos, entonces la recupero y
	// la cargo
    // en la variale agenda
    $http.get("http://localhost:3000/agenda/1").success(
        function(data) {
            // COMPLETAR ! ! ! !
            agenda = data;
        }).error(function(data, status) {
        agenda = {
            propietario: undefined
        };
        console.log('ERROR');
    });

    agendaService.definirPropietario = function(propietario) {
        agenda.propietario = propietario;
        // COMPLETAR ENVIANDO EL POST AL API REST JSON con la agenda a crear! !
		// ! !
        $http.post("http://localhost:3000/agenda/", agenda).success(
            function(data) {
                // data tiene el resultado que representa al objeto creado;
            }).error(function(data, status) {
            // data tiene el mensaje de error y status el código de error
            console.log('ERROR');
        });
    }

    agendaService.getAgenda = function(id) {
        // COMPLETAR ENVIANDO EL GET AL API REST JSON con la agenda a buscar ! !
		// ! !

        $http.get("http://localhost:3000/agenda/" + id).success(
            function(data) {
                // COMPLETAR ! ! ! !
                agenda = data;
            }).error(function(data, status) {
            agenda = {
                propietario: undefined
            };
        });
        return agenda;
    }

    agendaService.addTarea = function(unaTarea) {
        // COMPLETAR interactuando con el API REST JSON ! ! ! !
        // COMPLETAR ENVIANDO EL POST AL API REST JSON con la agenda a crear! !
		// ! !
        $http.post('http://localhost:3000/tareas', tarea, function(data, textStatus, xhr) {
            console.log('POST REALIZADO');
        }).error(function(data, status) {
            console.log('ERROR');
        });
    }

    agendaService.actualizarTarea = function(objetoActualizado) {
        // COMPLETAR interactuando con el API REST JSON ! ! ! !
        $http.put("http://localhost:3000/agenda/" + objetoActualizado.id, objetoActualizado).success(
            function(data) {
                // data tiene el resultado que representa al objeto actualizado;
            }).error(function(data, status) {
            // data tiene el mensaje de error y status el código de error
        });
    }

    agendaService.borrarTarea = function(unaTareaBorrar) {
        // COMPLETAR interactuando con el API REST JSON ! ! ! !
        $http.delete("http://localhost:3000/agenda/" + objetoBorrar.id).success(
            function(data) {
                // objeto borrado;
            }).error(function(data, status) {
            // data tiene el mensaje de error y status el código de error
        });
    }

    agendaService.getTarea = function(id) {
        var tarea;
        $http.get("http://localhost:3000/tareas/" + id).success(
            function(data) {
                // COMPLETAR ! ! ! !
                tarea = data;
            }).error(function(data, status) {
            console.log("asd");
        });
        return tarea;
    }

    agendaService.getTareas = function() {
        $http.get("http://localhost:3000/tareas/").success(
            function(data) {
                // data tiene el resultado de la lista;
            }).error(function(data, status) {
            // data tiene el mensaje de error y status el código de error
        });
    }

    return agendaService;
}]);