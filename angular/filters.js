myApp.filter('customFilter', function () {
    return function (input, scope) {

        var filterbyName = function () {
            scope.filteredMatches = [];
            angular.forEach(input, function (score1) {
                angular.forEach(score1.matches, function (score) {
                    if ((score.team1.name).toLowerCase().match(scope.teamName.name) || (score.team2.name).toLowerCase().match(scope.teamName.name)) {
                        scope.filteredMatches.push(score);
                    }
                });
            });
        }

        var filterbyScore = function () {
            scope.filteredMatches = [];
            angular.forEach(input, function (score1) {
                angular.forEach(score1.matches, function (score) {
                    if ((score.score1 + "-" + score.score2).match(scope.teamName.score)) {
                        scope.filteredMatches.push(score);
                    }
                });
            });
        }

        var filterbyYear = function () {
            scope.filteredMatches = [];
            angular.forEach(input, function (score1) {
                angular.forEach(score1.matches, function (score) {
                    console.log(score.date.substr(0, 4))
                    if ((score.date.substr(0, 4)) === (scope.teamName.year)) {
                        scope.filteredMatches.push(score);
                    }
                });
            });
        }

        if (scope.teamName.name !== '' && scope.teamName.score === '' && scope.teamName.year === '') {
            filterbyName();
            return scope.filteredMatches;
        }

        if (scope.teamName.score !== '' && scope.teamName.name === '' && scope.teamName.year === '') {
            filterbyScore();
            return scope.filteredMatches;
        }

        if (scope.teamName.year !== '' && scope.teamName.score === '' && scope.teamName.name === '') {
            filterbyYear();
            return scope.filteredMatches;
        }
    }
});
