const { redirect } = require('express/lib/response');
const connection = require('../connection');

const home = (req, res) => {
    try {
        res.render("index",{message:undefined});
    } catch (error) {
        console.log(error.message);
    }
}


const generateId = (req, res) => {
    try {
        const currentTime = new Date().getTime().toString().slice(1, 13);
        const name = req.body.username;
        const contact = req.body.contact;
        const uniqueId = currentTime.slice(0, 4) + " " + currentTime.slice(4, 8) + " " + currentTime.slice(8, 12);
        
        const checkCommand = "select * from userData where contact =" + contact;
        const commad = "insert into usersdetails(name,contact,UniqueId) values('" + name + "','" + contact + "','" + uniqueId + "')"

        connection.query(checkCommand,(error,result)=>{
            if(error) throw error;
            if(result.length > 0){
                res.render("index",{message:"This contact number has been already used!"});
            }else{
                connection.query(commad, (error, result) => {
                    if (error) throw error;
                    console.log("Your unique id is now generated!");
                    res.redirect("/");
                });
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}


const getUniqueId = (req, res) => {
    try {
        const contact = req.body.contact;
        commad = "select * from userData where contact =" + contact;
        
        connection.query(commad, (error, result) => {
            if (error) throw error;
            res.render("userData", { userData: result });
        });
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    home,
    generateId,
    getUniqueId,
}