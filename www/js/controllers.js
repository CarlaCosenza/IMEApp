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
    })

    .controller('MediaCtrl', function($scope, $ionicModal, $filter) {

        $scope.allImages = [{
            'id' : '11a',
            'src' : 'img/QTS/1ABas.png'
        }, {
            'id' : '12a',
            'src' : 'img/QTS/1BBas.png'
        }, {
            'id' : '13a',
            'src' : 'img/QTS/1CBas.png'
        }, {
            'id' : '21a',
            'src' : 'img/QTS/2ABas.png'
        }, {
            'id' : '22a',
            'src' : 'img/QTS/2BBas.png'
        }, {
            'id' : '23a',
            'src' : 'img/QTS/2CBas.png'
        }, {
            'id' : '25a',
            'src' : 'img/QTS/2CGBas.png'
        }];

        $scope.zoomMin = 1;

        $scope.showImages = function() {

            var num = $scope.ano + $scope.turma + $scope.engenharia;

            console.log(num);

            $scope.myimage = $filter('filter')($scope.allImages, {'id':num});

            $scope.showModal('/templates/image-popover.html');

            console.log($scope.myimage["0"].src);
        };

        $scope.showModal = function(templateUrl) {
            $ionicModal.fromTemplateUrl(templateUrl, {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });

            $scope.ano = 'selected';
            $scope.turma = 'selected';
            $scope.engenharia = 'selected';

        };

        // Close the modal
        $scope.closeModal = function() {
            $scope.modal.hide();
            $scope.modal.remove()
        };
    });

