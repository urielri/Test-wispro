import express from "express";
import { queries } from "./consults";
const router = express.Router();
const { allUsers, order, put, specificUser, update, admin } = queries;
router.get("/users/", allUsers);
router.get("/order/:ord", order);
router.get("/delete/:id", put);
router.get("/user/:id", specificUser);
router.get('/update/:id&:nombre&:apellido&:dni&:domicilio', update)
router.get('/admin/:user&:psswd', admin)
export { router as consults };
