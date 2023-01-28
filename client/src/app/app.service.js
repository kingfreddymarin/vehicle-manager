app.service('CrudService', function($http) {
    var baseUrl = 'http://localhost:5000/api/vehicles';
  
    this.getAll = function() {
      return $http.get(baseUrl + 'vehicles');
    };
  
    this.getOne = function(placa) {
      return $http.get(baseUrl + 'vehicles/' + placa);
    };
  
    this.create = function(item) {
      return $http.post(baseUrl + 'vehicles', item);
    };
  
    this.update = function(placa, item) {
      return $http.patch(baseUrl + 'vehicles/' + placa, item);
    };
  
    this.delete = function(placa) {
      return $http.delete(baseUrl + 'vehicles/' + placa);
    };
});