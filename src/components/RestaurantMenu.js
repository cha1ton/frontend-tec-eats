import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css"; // Archivo CSS opcional para estilos adicionales

const RestaurantMenu = () => {
  const { id } = useParams(); // Obtiene el ID del restaurante desde la URL
  const [menus, setMenus] = useState([]);

  // Simulación de una API o puedes realizar una solicitud a tu API real
  useEffect(() => {
    const fetchedMenus = [
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción del plato 1",
        precio: 12,
        imagen: "/images/plato-ceviche.jpg",
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción del plato 2",
        precio: 10,
        imagen: "/images/plato-ceviche.jpg",
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción del plato 3",
        precio: 8,
        imagen: "/images/plato-ceviche.jpg",
      },
      {
        nombre: "Nombre del plato",
        descripcion: "Descripción del plato 3",
        precio: 8,
        imagen: "/images/plato-ceviche.jpg",
      },{
        nombre: "Nombre del plato",
        descripcion: "Descripción del plato 3",
        precio: 8,
        imagen: "/images/plato-ceviche.jpg",
      },{
        nombre: "Nombre del plato",
        descripcion: "Descripción del plato 3",
        precio: 8,
        imagen: "/images/plato-ceviche.jpg",
      },
    ];
    setMenus(fetchedMenus);
  }, [id]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Menú del Restaurante {id}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {menus.map((menu, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={menu.imagen}
                className="card-img-top"
                alt={menu.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{menu.nombre}</h5>
                <p className="card-text">{menu.descripcion}</p>
                <p className="card-text">
                  <strong>Precio:</strong> ${menu.precio}
                </p>
                <button className="btn btn-primary w-100">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
