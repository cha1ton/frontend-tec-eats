import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Restaurants.css';

// Asegúrate de tener las imágenes en la carpeta correcta
const restaurantsData = [
  {
    id: '1',
    name: 'Restaurante A',
    description: 'Descripción del Restaurante A',
    direccion: 'Santa-Anita Av.Tecsup',
    image: '/images/puntoycoma.jpg',
  },
  {
    id: '2',
    name: 'Restaurante B',
    description: 'Descripción del Restaurante B',
    direccion: 'Santa-Anita Av.Tecsup',
    image: '/images/puntoycoma.jpg',
  },
  {
    id: '3',
    name: 'Restaurante C',
    description: 'Descripción del Restaurante C',
    direccion: 'Santa-Anita Av.Tecsup',
    image: '/images/puntoycoma.jpg',
  },
  {
    id: '4',
    name: 'Restaurante D',
    description: 'Descripción del Restaurante D',
    direccion: 'Santa-Anita Av.Tecsup',
    image: '/images/puntoycoma.jpg',
  },
  {
    id: '5',
    name: 'Restaurante E',
    description: 'Descripción del Restaurante E',
    direccion: 'Santa-Anita Av.Tecsup',
    image: '/images/puntoycoma.jpg',
  },
  {
    id: '6',
    name: 'Restaurante F',
    description: 'Descripción del Restaurante F',
    direccion: 'Santa-Anita Av.Tecsup',
    image: '/images/puntoycoma.jpg',
  },
];

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleNavigate = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`); // Redirige a la página del menú del restaurante
  };

  // Filtrar restaurantes según el término de búsqueda
  const filteredRestaurants = restaurantsData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="restaurants-container">
      <h2 className="restaurants-title">Restaurantes</h2>

      {/* Input para la búsqueda */}
      <input
        type="text"
        placeholder="Buscar restaurante..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="restaurants-cards">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div
              className="restaurant-card"
              key={restaurant.id}
              onClick={() => handleNavigate(restaurant.id)}
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="restaurant-image"
              />
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <p>{restaurant.direccion}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron restaurantes.</p>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
