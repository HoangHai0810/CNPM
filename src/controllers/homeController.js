import db from "../models/index";
import CRUDSevice from "../sevices/CRUDSevice";

let getHomePage = async(req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e);
    }
    
    return res.render('homepage.ejs');
}

let getInfoPage = (req, res) => {
    return res.render('infopage.ejs');
}

let getCRUDPage = (req, res) => {
    return res.render('./test/CRUD.ejs');
}

let postCRUD = async (req,res) => {
    let mes = await CRUDSevice.createNewUser(req.body);
    console.log(mes);
    return res.send('Upload');
}

let displayGetCRUD = async(req,res) => {
    let data = await CRUDSevice.getAllUser({
        raw :   true,
    });
    return res.render('./displayCRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async(req, res) => {
    let userId = req.query.id;
    if (userId){
        let userData = await CRUDSevice.getUserInfoById(userId);
        if (userData)
        {
            return res.render('edit-CRUD.ejs', {
                user: userData
            })
        }
    } else {
        return res.send('Hello, User not found!');
    }
}

let putCRUD = async(req, res) => {
    let data = req.body;
    await CRUDSevice.editUser(data);
    return res.send('Updated!');
}


module.exports = {
    getHomePage: getHomePage,
    getInfoPage: getInfoPage,
    getCRUDPage: getCRUDPage,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
}