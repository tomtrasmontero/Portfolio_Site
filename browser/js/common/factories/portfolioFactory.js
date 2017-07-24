app.factory('PortfolioService', function ($http) {

    let projectsData = [];

    return {
        getProjects: function(){
            return $http.get('/api/portfolio')
                .then(function(projects){
                    angular.copy(projects.data, projectsData);
                    return projects.data;
                });
        },

        getProject: function(id){
            return $http.get('/api/portfolio/' + id )
            .then(function(project){
                return project.data;
            });
        }


    };
});
