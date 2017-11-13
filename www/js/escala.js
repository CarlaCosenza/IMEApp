angular.module('starter.controllers')

.controller('EscalaCtrl', function ($scope, $firebaseArray) {

        var diasRef = firebase.database().ref();

        var query = diasRef
            .child("Dias");

        $scope.diaescolhido;

        $scope.diasdaescala = $firebaseArray(query);
        console.log($scope.diasdaescala);

        //query.once('value').then(function (snap) {
        //    console.log(snap.val());
        //});

        function teste(dias) {
            var query = diasRef
                .child("Dias"/"Segunda"/"Dia");
            query.once('value').then(function (snap) {
                console.log(snap.val());
                return snap.val();
            })
        }

        function diadaescala() {
            var query = diasRef
                .child("Dias"/"Segunda"/"Dia");
            query.once('value').then(function (snap) {
                console.log(snap.val());
                return snap.val();
            })
        }

        $scope.escolherdia = function(dia){
            alert(dia);
            $scope.diaescolhido = dia;
        }

    });
