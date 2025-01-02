"use strict";
var usersLength = 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "Active";
    UserStatus["Inactive"] = "Inactive";
    UserStatus["Suspended"] = "Suspended";
})(UserStatus || (UserStatus = {}));
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = new Array();
    }
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.getUserById = function (id) {
        var userBox;
        this.users.forEach(function (user) {
            if (user.id === id)
                userBox = user;
        });
        return userBox;
    };
    UserManager.prototype.updateStatus = function (id, status) {
        var userBox;
        this.users.forEach(function (user) {
            if (user.id === id)
                userBox = user;
        });
        if (userBox)
            userBox.status = status;
    };
    return UserManager;
}());
var manager = new UserManager();
var addUserButton = document.querySelector("#addUserButton");
if (addUserButton) {
    addUserButton.addEventListener('click', function () {
        var newUser = {
            id: usersLength,
            name: "Kacper",
            email: "kacper.goluchowski@o2.pl",
            status: UserStatus.Inactive
        };
        manager.addUser(newUser);
        usersLength++;
    });
}
var displayUserButton = document.querySelector("#displayUserButton");
if (displayUserButton) {
    displayUserButton.addEventListener('click', function () {
        var userIdPrompt = prompt("Podaj id użytkownika");
        if (userIdPrompt) {
            var userId = Number(userIdPrompt);
            console.log(manager.getUserById(userId));
        }
    });
}
var editUserStatusButton = document.querySelector("#editUserStatusButton");
if (editUserStatusButton) {
    editUserStatusButton.addEventListener('click', function () {
        var userIdPrompt = prompt("Podaj id użytkownika");
        if (userIdPrompt) {
            var userId = Number(userIdPrompt);
            manager.updateStatus(userId, UserStatus.Active);
        }
    });
}
