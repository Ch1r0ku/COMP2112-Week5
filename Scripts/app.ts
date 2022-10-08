"use strict";
//IIFE Immidiately Invoked Function Expression
(function()
{

    /**
     *This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList: any){
        let count = 0;
        for (const contact of contactList) 
        {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }

    /**
     *This method reads our data from localStorage and returns a Contact Array
     *
     * @returns  {Contact[]}
     */
    function LoadContactListData():Contact[]
    {
        //create an empty Contact Array container
        let ContactArray = new Array<Contact>();

        let keys = Object.keys(localStorage);
        for (let key of keys) 
        {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }

    function LoadHeader(): void
    {
        $.get("./Views/components/header.html", function(html_data)
        {
            //vanilla javascript
            //document.getElementsByTagName("header")[0].innerHTML = html_data;
            //jquery
            $("header").html(html_data);
            

            switch(document.title)
            {
                case "Home":
                    $("#homePage").addClass("active");
                    break;
                case "About Us":
                    $("#aboutPage").addClass("active");
                    break;
                case "Our Projects":
                    $("#projectsPage").addClass("active");
                    break;
                case "Our Services":
                    $("#servicesPage").addClass("active");
                    break;
                case "Contact Us":
                    $("#contactPage").addClass("active");
                    break;
            }

            // let navlinks = document.querySelectorAll("li>a.nav-link");
            // for (const link of navlinks as HTMLAnchorElement[]) {
            //     console.log(link.href);
            // }

            // let navLinks = $("li>a.nav-link");
            // for (const link of navLinks) {
            //     console.log(link.prop("href"));
            // }

            // $("li>a.nav-link").each(function()
            // {
            //     console.log($(this).prop("href"));
            // })
        });
    }

    function LoadFooter(): void
    {
        $.get("./Views/components/footer.html", function(html_data)
        {
            //vanilla javascript
            //document.getElementsByTagName("footer")[0].innerHTML = html_data;
            //jquery
            $("footer").html(html_data);
        });
    }

    // First method of using functions

    function Start()
    {
        console.log("App Started!");
    
        LoadHeader();
        LoadFooter();
    } 
    window.addEventListener("load",Start);
})();