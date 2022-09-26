"use strict";
//IIFE Immidiately Invoked Function Expression
(function()
{
    // First method of using functions

    function Start()
    {
        console.log("App Started!");

        let contactList;

        $.getJSON("./Data/contacts.json", function(DataSource){
            //Get your data from the DataSource
        contactList = DataSource.ContactList;     

            //Load your data into object
            let contact = new Contact();
            console.log(contact.toString());
    });
    

    } 
    window.addEventListener("load",Start);
})();