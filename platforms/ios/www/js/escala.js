angular.module('starter.controllers')

.controller('EscalaCtrl', function ($scope, $firebaseArray) {

        var diasRef = firebase.database().ref();

        var query = diasRef
            .child("Dias");

        $scope.teste1 = $firebaseArray(query);
        console.log($scope.teste1);

        query.once('value').then(function (snap) {
            console.log(snap.val());
        });

        function teste(dia) {
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

    });
