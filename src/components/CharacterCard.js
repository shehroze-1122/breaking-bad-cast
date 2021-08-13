import React from 'react';

const CharacterCard = ({img, name, nickname, birthday, status, occ, portrayed})=>{

    return (
        <section>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={img} alt="Avatar" style={{height:'320px', width:'270px'}}/>
                    </div>
                    <div className="flip-card-back">
                        <h2>{name}</h2>
                        <div className="description">
                            <p><strong>Nickname: </strong> {nickname}</p>
                            <p><strong>Birthday: </strong> {birthday}</p>
                            <p><strong>Status: </strong> {status}</p>
                            <p><strong>Occupation: </strong>{occ}</p>
                            <p><strong>Potrayed: </strong>{portrayed}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );

}

export default CharacterCard;