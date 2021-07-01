import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav.jsx';
import NewEgg from './components/NewEgg';
import NewPet from './components/NewPet';
import Inventario from './components/Inventario';

import Pets, { Gato, Perro, Vaca, PerroAzul, GatoRosa } from './pets.js';

function App() {
  const [pet, setPet] = useState({});
  const [egg, setEgg] = useState({});
  const [inventario, setInventario] = useState([]);

  // Devuelve un nro random entre dos valores
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Establece el tipo de huevo segun random
  function typeOfEgg() {
    let random = Math.floor(getRandom(1, 100));

    if (random > 0 && random <= 40) {
      setEgg({
        type: 'common',
        img: './img/eggs/Huevo_de_mascota.png',
      });
    }

    if (random > 40 && random <= 60) {
      setEgg({
        type: 'broken',
        img: './img/eggs/Huevo_roto.png',
      });
    }

    if (random > 60 && random <= 80) {
      setEgg({
        type: 'farm',
        img: './img/eggs/Huevo_de_Granja.png',
      });
    }

    if (random > 80 && random <= 90) {
      setEgg({
        type: 'blue',
        img: './img/eggs/Huevo_azul.png',
      });
    }

    if (random > 90 && random <= 100) {
      setEgg({
        type: 'pink',
        img: './img/eggs/Huevo_rosa.png',
      });
    }
  }

  // Obtiene una nueva mascota segun el huevo
  function newPet() {
    //setWindow('newPet');

    if (egg.type === 'common') setPet(Gato);

    if (egg.type === 'broken') setPet(Perro);

    if (egg.type === 'farm') setPet(Vaca);

    if (egg.type === 'blue') setPet(PerroAzul);

    if (egg.type === 'pink') setPet(GatoRosa);
  }

  // Añade la mascota obtenida al inventario
  function add() {
    setInventario([...inventario, pet]);
  }

  // Chambia el nombre de la mascota
  function rename() {}

  return (
    <div className="App">
      <Route path="/" render={() => <Nav typeOfEgg={typeOfEgg} />} />

      <Route
        path="/NuevoHuevo"
        render={() => <NewEgg newPet={newPet} egg={egg} />}
      />
      <Route
        path="/NuevaMascota"
        render={() => <NewPet pet={pet} inventario={inventario} add={add} />}
      />

      <Route
        path="/Inventario"
        render={() => <Inventario inventario={inventario} />}
      />
    </div>
  );
}

export default App;
