import React from 'react';

function KartOlustur({cardData}){
    const {title, body, image}=cardData;
    return (
        <div className="card" style={{ width: '18rem' }}>
          <img src={image} className="card-img-top" alt="Card" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <a className="btn btn-primary">Not Interest</a>
          </div>
        </div>
      );
}

export default KartOlustur;