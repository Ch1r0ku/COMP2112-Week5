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
            $("header").html(html_data);

            $("li>a").on("click", function(){
                let title = $(this).prop("id") as string;
                //capitalize the link and making it a title
                document.title = title.substring(0, 1).toUpperCase() + title.substring(1);

                LoadContent();
                //console.log(title);

                // document.title = $(this).prop("id");
            });
            
        });
    }

    function LoadContent(): void
    {
            switch(document.title)
            {
                case "Home":
                    $.get("./Views/content/home.html", function(html_data){$("main").html(html_data);})
                    break;
                case "About":
                    $.get("./Views/content/about.html", function(html_data){$("main").html(html_data);})
                    break;
                case "Projects":
                    $.get("./Views/content/projects.html", function(html_data){$("main").html(html_data);})
                    break;
                case "Services":
                    $.get("./Views/content/services.html", function(html_data){$("main").html(html_data);})
                    break;
                case "Contact":
                    $.get("./Views/content/contact.html", function(html_data){$("main").html(html_data);})
                    break;
            }
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
        document.title = "Home";
        LoadContent();
    
        LoadHeader();

        LoadFooter();
    } 
    window.addEventListener("load",Start);
})();