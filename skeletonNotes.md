site will consist of :
    Front End stuff {
        app.js
        components - 
            navBar, 
            home, 
            store, 
            order -possibly with a drag-and-drop design feature. this has two sub-components:
                    subCOmponent1: creator
                    subComponent2: personalInfo
            faq, 
            about, 
            contact
            gallery - brom uses 3 sub-selects to create 3 separate gallery pages in a drop-down window...We probably just           want one page though
        

    },

    MiddleWare {
        
    },

    Back End stuff {
        Schema 1: orders,
        Schema 2: ready products
        
    }

    steps so far:
        set up skeleton folders/files
        installed npm dependencies
        set up routes
        set up some essential packages on server.js
        set up my .env file
        made a new database (called it "products" and gave it id/serial, image/varchar, product_name/varchar & price/decimal columns)
        modified our package.json file to have: "proxy": "http://localhost:4000",
        