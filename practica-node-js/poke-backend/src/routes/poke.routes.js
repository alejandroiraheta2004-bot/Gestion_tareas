import express from "express";
import { getPokemons } from "../controllers/poke.controller.js";

const router = express.Router();


router.get("/pokemons", getPokemons);

export default router;