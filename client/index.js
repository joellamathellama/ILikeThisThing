var app = angular.module('myApp', []);


app.controller('RequestController', function($scope, $http) {

//different types to populate the dropdown menu
$scope.types = ['Books', 'Movies', 'Games'];

//create an empty object to store form data
$scope.userInput = {
  title: '',
  type: ''
};

// $scope.submitForm = function() {
//   return $http({
//     method: 'POST',
//     url: '/api/searchworks',
//     data: $scope.userInput, //forms user object
//   })
//   .then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//     console.log(response);
  
//     //run helper function that populates new divs with response data

//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });
//   return data;
//   }
// });


var helperFunction = function() {
if ($scope.data[0].type === 'Movies') {
      for (i = 0; i < $scope.data.length; i ++) {
        if ($scope.data[i].database) {
        $scope.data[i].title = title;
        $scope.data[i].poster = image;
        $scope.data[i].director = person;
      }
      }

    } else if (/*!database flag*/ && $scope.data.type === 'Movies') {
        for (i = 0; i < $scope.data.length; i ++) {
        $scope.data[i].title = title;
        $scope.data[i].poster = image;
        $scope.data[i].director = person;
      }

    } else if(/*database flag*/ && $scope.data.type === 'Books') {
      for (i = 0; i < $scope.data.length; i ++) {
        $scope.data[i].title = title;
        $scope.data[i].largeImage = image;
        $scope.data[i].authors[0] = person; //need to deal with instances where multiple authors
      }

    } else if (/*!database flag*/ && $scope.data.type === 'Books') {
      for (i = 0; i < $scope.data.length; i ++) {
        $scope.data[i].title = title;
        $scope.data[i].largeImage = image;
        $scope.data[i].authors[0] = person; //need to deal with instances where multiple authors
      }

    } else if (/*database flag*/ && $scope.data.type === 'Games') {
      for (i = 0; i < $scope.data.length; i ++) {
        $scope.data[i].name = title;
        $scope.data[i].largeImage = image;
        $scope.data[i].original_release_date = date
      }

    } else if (/*!database flag*/ && $scope.data.type === 'Games') {
      for (i = 0; i < $scope.data.length; i ++) {
        $scope.data[i].name = title;
        $scope.data[i].image = image;
        $scope.data[i].original_release_date = date
      }
    }
  };

//make each image or title selectable and on click send them to that results page...








