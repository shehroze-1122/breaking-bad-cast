import React from 'react';
import CharacterCard from './CharacterCard';
import LoadingSpinner from './LoadingSpinner';


const CharacterList = ({characters, isPending, ifFailed})=>{
    if(ifFailed){
        return (<h3 className="d-flex justify-content-center mt-5 text-warning">Couldn't connect to the server</h3>)

    }
    if(!isPending & characters.length===0){
        return (<h3 className="d-flex justify-content-center mt-5 text-warning">No result found</h3>)
    }
    return isPending ? (<LoadingSpinner/>) : (
        <section className="cards">
            {characters.map((character)=>{
                return <CharacterCard key={character.char_id} img={character.img} name={character.name} nickname={character.nickname} birthday={character.birthday} status={character.status} occ = {character.occupation} portrayed ={character.portrayed}/>
            })}
        </section>
    );

}

export default CharacterList;