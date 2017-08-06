app.config(function ($stateProvider) {
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'js/contact/contact.html',
        controller: 'contactCtrl'
    });
});

app.controller('contactCtrl', function($scope, PortfolioService){

	$scope.sendMessage = function(contact) {
		PortfolioService.sendMessage(contact)
		.then(function (result){
			if (result.data){
				$scope.contactModalStatus = 'The Message has been Sent!';
			} else {
				$scope.contactModalStatus = 'Error. Please try again!';
			}

			//trigger modal
			document.getElementById('contactStatusButton').click();

			//clear form after sending message
			$scope.contact.name = '';
			$scope.contact.email = '';
			$scope.contact.message = '';
		});
	};


});
