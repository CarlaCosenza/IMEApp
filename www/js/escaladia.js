angular.module('starter.controllers')

.controller('EscalaDiaCtrl', function ($scope, $firebaseArray) {

        var diasRef = firebase.database().ref();

        $scope.odia = function diadaescala(x) {
            var query = diasRef
                if(x = "Segunda") {
                    child("Dias" / "Segunda");
                }
                if(x = "Terça") {
                    child("Dias" / "Terça");
                }
                if(x = "Quarta") {
                    child("Dias" / "Quarta");
                }
                if(x = "Quinta") {
                    child("Dias" / "Quinta");
                }
                if(x = "Sexta") {
                    child("Dias" / "Sexta");
                }
            query.once('value').then(function (snap) {
                console.log(snap.val());
                return snap.val();
            })
        }

    });
