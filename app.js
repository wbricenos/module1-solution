(function(){
    // This will also save the controller from minification
    angular.module('LunchCheck', []).controller('LunchCheckController', [ '$scope', function($scope) {
            
            // Count the number of dishes
            $scope.countdishes = function() {
                var dishes = $scope.dishes;
                if(!dishes) {
                    $scope.message = 'Please enter data first';
                    $scope.messagestyle = {'color': 'red'};
                } else {
                    dishes = dishes.split(',');
                    dishes = filteritems(dishes)
                    if(dishes.length > 0 && dishes.length <= 3) {
                        $scope.message = "Enjoy!";
                        $scope.messagestyle = {'color': 'green'};
                    } else if(dishes.length > 3) {
                        $scope.message = "Too much!";
                        $scope.messagestyle = {'color': 'green'};
                    } else {
                        $scope.message = "Please enter data first";
                        $scope.messagestyle = {'color': 'red'};
                    }
                }
            }

            // Filter the item in case middle item is missing
            function filteritems(items) {
                finalitems = []
                for(var i=0;i<items.length;i++) {
                    if(items[i]) {
                        finalitems.push(items[i]);
                    }
                }
                return finalitems;
            }
            
            // Called when controller is intialize
            function init() {
                $scope.dishes = '';
                $scope.messagestyle = '';
            }
            init();

    }]);
}());