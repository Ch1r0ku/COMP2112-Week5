"use strict";
//IIFE Immidiately Invoked Function Expression

(function()
{

    /**
     * This fucntion loads data asyncronously from a URL
     * It call the callback fucnstion when the data 
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method,url, callback){
        let XHR = new XMLHttpRequest();
        //compose the request
        XHR.open(method, url);
        //send the request
        XHR.send();
        //set up an eventlistener
        XHR.addEventListener("readystatechange", function(){
            if(XHR.status == 200 && XHR.readyState == 4){
        callback(XHR.responseText);
        }
        });
    }
    // First method of using functions

    function Start()
    {
        console.log("App Started!");

        $.getJSON("./Data/contacts.json", function(DataSource){
        console.log(DataSource.ContactList[0]);
    })
        // LoadData("GET", "./Data/contacts.json", function(XHR){
        //     console.log(XHR);
        // });
    } 

    //Second method of using functions
    /*let Start = functions()
    {
        console.log("App Started");
    }*/

    //Third method of using functions
    // let Start = () =>
    // {
    //     console.log("App Started");
    // }


    window.addEventListener("load",Start);
})();