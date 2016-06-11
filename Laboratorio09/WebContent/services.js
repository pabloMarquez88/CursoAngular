angular.module("appLab09").factory("agendaService", function() {
	var agendaService = {};
	var agenda = {
		propietario : undefined,
		tareas : []
	};
	agendaService.getAgenda = function() {
		return agenda;
	};
	agendaService.definirPropietario = function(propietario) {
		agenda.propietario = propietario;
	};
	return agendaService;
});