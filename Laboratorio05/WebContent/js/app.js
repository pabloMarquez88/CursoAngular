angular.module('myApp', []);

angular.module('myApp').controller('elControlador', [ '$scope', function($scope) {
	$scope.resultado = 5 + 4;
	hacerCalculos($scope);

	$scope.indice = 1;
	$scope.historial = [ {
		valor : $scope.mitadValor,
		indice : $scope.indice
	} ];

	$scope.aleatorio = function() {
		$scope.resultado += Math.random();
		hacerCalculos($scope);

		$scope.historial.push({
			valor : $scope.mitadValor,
			indice : $scope.indice
		});
		$scope.indice = $scope.indice + 1;
		console.log($scope.historial);

	};

} ]);

function hacerCalculos(scope) {
	scope.entero = Math.floor(scope.resultado);
	scope.mitadValor = scope.resultado / 2;
}