import express from "express";

import {
     obtenerSuperheroePorIdController, obtenerTodoslosSuperheroesController, buscarSuperheroesPorAtributoController,
     obtenerSuperheroesMayoresDe30Controller, agregarHeroeController, actualizarHeroeController, borrarHeroeController, borrarPorNombreController
} from '../controllers/superheroesController.mjs'


const router = express.Router()

router.get('/heroes', obtenerTodoslosSuperheroesController)
router.get('/heroes/id/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/mayoresDe30/', obtenerSuperheroesMayoresDe30Controller)

router.post('/heroes/nuevoheroe/', agregarHeroeController)
router.put('/heroes/actualizar/:id', actualizarHeroeController)
router.delete('/heroes/borrar/:id', borrarHeroeController)
router.delete('/heroes/borrarpornombre/:name', borrarPorNombreController)

export default router;