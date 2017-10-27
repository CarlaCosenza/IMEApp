angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicHistory, $ionicSideMenuDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.closeMenu = function() {
      $ionicHistory.nextViewOptions({disableAnimate: true});
      $ionicSideMenuDelegate.toggleRight();
  };
})



    .controller('FaleConoscoCtrl', function($scope, $stateParams, $state, $ionicPopup) {
        $scope.handleFormSubmit = handleFormSubmit;

        window.alertForm = function () {
            $ionicPopup.alert({
                title: "Obrigado por nos contatar!",
                template: "Entraremos em contato assim que possível!",
                cssClass: 'animated bounceInDown',
                buttons: [
                    {
                        text: 'Ok',
                        type: 'button-outline button-positive',
                        onTap: function () {
                            $scope.name = '';
                            $scope.email = '';
                            $scope.message = '';
                        }
                    }]
            });
        }

    })

.controller('RoboIMECtrl', function ($scope,$ionicScrollDelegate,$location) {
    $scope.scrollTo = function(target){
        $location.hash(target);   //set the location hash
        var handle = $ionicScrollDelegate.$getByHandle('roboimeDelegate');
        handle.anchorScroll(true);  // 'true' for animation
    };
});