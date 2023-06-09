import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/info', homeController.getInfoPage); 
    router.get('/crud', homeController.getCRUDPage);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-CRUD', homeController.displayGetCRUD);
    router.get('/edit-CRUD', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    return app.use("/", router) 
}

module.exports = initWebRoutes;