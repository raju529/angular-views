// Code goes here

app.controller("EmployeeController", function($scope) {
    $scope.currentDate = new Date();
    $scope.users = [{
        UserName: "Ravi",
        age: 22,
        gender: "male",
        phoneNumber: "123456"
    }, {
        UserName: "balu",
        age: 22,
        gender: "male",
        phoneNumber: "453645"
    }, {
        UserName: "ashok",
        age: 12,
        gender: "male",
        phoneNumber: "768798"
    }];

    $scope.getUserData = function() {
        var user = {
            UserName: $scope.userName,
            age: $scope.age,
            gender: $scope.gender,
            phoneNumber: $scope.phoneNumber
        };
        $scope.users.push(user);
        $scope.resetUser();
        console.log($scope.users);
    };
    $scope.resetUser = function() {
        $scope.userName = "";
        $scope.age = "";
        $scope.gender = "";
        $scope.phoneNumber = "";
    };
    $scope.removeRow = function(i) {
        $scope.users.splice(i, 1);
    };
});

app.filter("capitalize", function() {
    return function(input, char) {
        var char = char - 1 || 0;
        var output = [];
        if (isNaN(input)) {

            var letter = input.charAt(char).toUpperCase();

            for (var i = 0; i < input.length; i++) {
                if (i === char) {
                    output.push(letter);
                } else {
                    output.push(input[i])
                }
            }

        }
        console.log(output);
        return output.join('');

    };
});