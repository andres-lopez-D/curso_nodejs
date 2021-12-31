const{ request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
    res.json({ msg: "Hola a todos desde GET" });
};

const usuariosPost = (req = request, res = response) => {
    const { edad=9 }= req.body;
    res.status(201).json({msg: "Hola a todos desde POST", edad });
};

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    res.status(400).json({ msg: "Hola a todos desde PUT", id });
};

function usuariosDelete(req = request, res = response) {
    const {usuario, password} = req.query;
    res.status(500).json({ msg: "Hola a todos desde DELETE", usuario, password });
}

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete };