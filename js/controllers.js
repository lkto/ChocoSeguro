angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('numerosctr', function($scope) {
  
  $scope.numeros = [{
    id: 0,
    name: 'Policia Nacional',
    numero: '000000',
    face: 'img/policia.png'
  }, {
    id: 1,
    name: 'Los Bomberos',
    numero: '11111',
    face: 'img/bomberos.jpg'
  }, {
    id: 2,
    name: 'Ejercito Nacional',
    numero: '222222',
    face: 'img/ejercito.png'
  }, {
    id: 3,
    name: 'Secretaria del interior',
    numero: '333333',
    face: 'img/interior.png'
  }];

  
})

.controller('pqrctr', function($scope) {
  
 

  
})
.controller('acercadectr', function($scope) {
  
 

  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
