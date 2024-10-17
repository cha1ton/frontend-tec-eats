import React from 'react';
import './UserProfile.css'; // Asegúrate de crear este archivo CSS

const UserProfile = () => {
  // Datos simulados de usuario
  const user = {
    name: 'Usuario Name',
    email: 'usuario.lastname@tecsup.edu.pe',
    phone: '+51 999 999 999',
    createdAt: 'DD/MM/AAAA',
  };

  return (
    <div className="user-profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="/images/usuario-logo.png" // Puedes cambiar esta URL por la imagen del usuario
            alt="profile"
            className="profile-img"
          />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <hr className="divider" />
        <div className="profile-info">
          <div className="phone-info">
            <button className="btn btn-info btn-edit-phone">
              <i className="fas fa-pencil-alt"></i> {user.phone}
            </button>
          </div>
          <p className="account-created">La cuenta se creó el</p>
          <h4>{user.createdAt}</h4>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
