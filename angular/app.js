// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('blogApp', ['ngRoute']);


// this is without $scope
myApp.controller('mainController', ['$http', '$scope', function ($http, $scope) {

    //create a context
    var main = this;


    this.pageHeading = 'English Premier League';
    this.pageSubHeading = 'Fixture list of two seasons';
    this.matches = [];
    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';
    $scope.filteredMatches = [];
    var loadFirstSeason = function () {
        $http({
            method: 'GET',
            url: main.baseUrl + '/2015-16/en.1.json'

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            main.matches = response.data;

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);
        });
    }
    var loadSecondSeason = function () {
        var matches2 = [];
        $http({
            method: 'GET',
            url: main.baseUrl + '/2016-17/en.1.json'

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            matches2 = response.data;
            var arr1 = $.map(main.matches, function (el) {
                return el
            });
            var arr2 = $.map(matches2, function (el) {
                return el
            });
            main.matches = arr1.concat(arr2);
            main.matches.splice(39, 1);
            main.matches.splice(0, 1);
            getTeamStats();

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);
        });
    }
    var loadBothSeasons = function () {
        loadFirstSeason();
        loadSecondSeason();
    }

    this.hideFunction = function () {
        if ($scope.teamName.name === '' && $scope.teamName.score === '' && $scope.teamName.year === '') {
            return true;
        }
        return false;
    }

    loadBothSeasons();

    this.arrayObject = [];
    this.object = {};
    this.object.homeGamesPlayed = 0;
    this.object.homeGamesWon = 0;
    this.object.homeGamesLost = 0;
    this.object.homeGamesDrawn = 0;
    this.object.awayGamesDrawn = 0;
    this.object.awayGamesLost = 0;
    this.object.awayGamesPlayed = 0;
    this.object.awayGamesWon = 0;
    this.object.goalsScored = 0;
    this.object.goalsConceded = 0;

    var getTeamStats = function () {
        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "arsenal");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "manchester united");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "tottenham hotspur");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "bournemouth");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "aston villa");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "everton");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "watford");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "leicester city");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "sunderland");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "norwich");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "crystal palace");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "chelsea");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "swansea");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "west ham united");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "newcastle united");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "southampton");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "stoke city");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "liverpool");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "west bromwich albion");
            });
        });
        pushAndClearFields();

        angular.forEach(main.matches, function (score1) {
            angular.forEach(score1.matches, function (score) {
                getStatistics(score, "manchester city");
            });
        });
        pushAndClearFields();
    }

    var getStatistics = function (score, string) {
        if ((score.team1.name).toLowerCase() === string) {
            main.object.teamName = score.team1.name;
            main.object.homeGamesPlayed += 1;
            main.object.goalsScored += score.score1;
            main.object.goalsConceded += score.score2;
            if (score.score1 > score.score2) {
                main.object.homeGamesWon += 1;
            }
            if (score.score1 === score.score2) {
                main.object.homeGamesDrawn += 1;
            }
            if (score.score1 < score.score2) {
                main.object.homeGamesLost += 1;
            }
        }
        if ((score.team2.name).toLowerCase() === string) {
            main.object.teamName = score.team2.name;
            main.object.awayGamesPlayed += 1;
            main.object.goalsScored += score.score2;
            main.object.goalsConceded += score.score1;
            if (score.score1 < score.score2) {
                main.object.awayGamesWon += 1;
            }
            if (score.score1 === score.score2) {
                main.object.awayGamesDrawn += 1;
            }
            if (score.score1 > score.score2) {
                main.object.awayGamesLost += 1;
            }
        }
    }

    var pushAndClearFields = function () {
        main.arrayObject.push(main.object);
        main.object = {};
        main.object.homeGamesPlayed = 0;
        main.object.homeGamesWon = 0;
        main.object.homeGamesLost = 0;
        main.object.homeGamesDrawn = 0;
        main.object.awayGamesDrawn = 0;
        main.object.awayGamesLost = 0;
        main.object.awayGamesPlayed = 0;
        main.object.awayGamesWon = 0;
        main.object.goalsScored = 0;
        main.object.goalsConceded = 0;
    }
    
    $scope.teamName = [];
    $scope.teamName.name = '';
    $scope.teamName.score = '';
    $scope.teamName.year = '';
}]); // end controller



myApp.controller('matchController', ['$http', '$routeParams', function ($http, $routeParams) {

    //create a context
    var main = this;
    this.pageHeading = 'English Premier League';
    this.pageSubHeading = 'EPL'
    this.match = $routeParams.id;
    this.match = JSON.parse(this.match);

}]); // end controller
