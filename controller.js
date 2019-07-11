module.exports = {
    orderPost: (req, res) => {
        const db = req.app.get('db');
        const {
            firstName, 
            lastName, 
            email, 
            phone, 
            streetAddress, 
            city, 
            state, 
            zip, 
            mainText, 
            mainTextFont, 
            mainTextColor, 
            secondaryText, 
            secondaryTextFont, 
            secondaryTextColor, 
            backgroundColor, 
            comments} = req.body;
        db.POST_ORDER({})   
    },

    getPosts: (req, res) => {
        const db = req.app.get('db');
        db.posts.find()
            .then((posts)=>{
                res.send({success: true, posts})
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
    },

    sendMessage: (req, res, next) => {
        const {firstName, lastName, email, phone, message} = req.body;
        let first_name = firstName;
        let last_name = lastName;
        let is_processed = 'false';
        const db = req.app.get('db');
        db.messages.insert({first_name, last_name, email, phone, message, is_processed})
            .then((message) => {
                res.send({success: true})
            }).catch((err) => {
                res.send({success: false})
            })
    },

    checkMessages: (req, res) => {
        const db = req.app.get('db');
        db.messages.find()
            .then((messages) =>{
                res.send({success: true, messages})
            })
            .catch((err)=>{
                res.send({success: false, err})
            })
    },

    deleteMessage: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = req.params.id;
        dbInstance.DELETE_MESSAGE([id])
            .then((results) => {
                res.send({success: true, results})
            })
            .catch((err) => {
                res.send({success: false, err})
            })
    },

    toggleProcess: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;
        db.FIND_MESSAGE([id])
            .then((message) => {
                if (message[0].is_processed === "true"){
                    db.TOGGLE_PROCESSED_TOFALSE([id])
                    .then((results) => {
                        res.send({success: true, results: results})
                    })
                    .catch((err) => {
                        res.send({success: false, err})
                    })
                }else{
                    db.TOGGLE_PROCESSED_TOTRUE([id])
                    .then((results) => {
                        res.send({success: true, results: results})
                    })
                    .catch((err) => {
                        res.send({success: false, err})
                    })
                }
            })
        },

    
}