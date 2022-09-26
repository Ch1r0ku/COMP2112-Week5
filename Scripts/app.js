"use strict";
//IIFE Immidiately Invoked Function Expression
(function () {
    // First method of using functions
    function Start() {
        console.log("App Started!");
        $.getJSON("./Data/contacts.json", function (DataSource) {
            console.log(DataSource.ContactList[0]);
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map