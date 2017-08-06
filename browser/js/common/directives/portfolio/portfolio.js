app.config(function ($stateProvider) {

    $stateProvider.state('portfolio', {
        url: '/portfolio',
        templateUrl: 'js/common/directives/portfolio/portfolio.html',
        controller: 'portfolioSummaryCtrl',
        resolve: {
			project: function(PortfolioService){
				return PortfolioService.getProjects();
			}
        }
    });
});

app.controller('portfolioSummaryCtrl', function($scope, project){
    $scope.projects = project;
});


// project detail state and controller
app.config(function ($stateProvider) {

    $stateProvider.state('portfolioDetail', {
        url: '/portfolio/:id',
        controller: 'portfolioCtrl',
        templateUrl: 'js/common/directives/portfolio/portfolio-detail.html',
        resolve: {
			project: function($stateParams, PortfolioService){
				return PortfolioService.getProject($stateParams.id);
			}
        }
    });
});

app.controller('portfolioCtrl', function($scope, $sce, project){
    $scope.project = project[0];

    // must use $sce to have angular show iframe, url must be embedded due to youtube restriction
    $scope.updateUrl = function(url){
        $scope.trustedUrl = $sce.trustAsResourceUrl(url);
    };

});

