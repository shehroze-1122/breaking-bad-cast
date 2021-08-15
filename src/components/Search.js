import React from 'react';

const Search = ({getSearchValueByTyping, handleListening, isListening})=>{

    
    return(
    <div className="searchbox">
        <div className="search-input">
            <input type="text" placeholder="Search your favourite characters" onChange={getSearchValueByTyping}/>
            <button onClick={() => handleListening()} disabled={!('webkitSpeechRecognition' in window)}>{isListening?(<i className="fas fa-2x fa-microphone-slash text-danger" aria-hidden="true"></i>):(<i className="fas fa-2x fa-microphone" aria-hidden="true"></i>)}</button>
        </div>
        {isListening? <p>We are listening. . . <br/>Try speaking any Breaking Bad Character name or nickname (e.g. Jesse Pinkman)</p>: <p>Don't wanna search your favourite character by typing? Try clicking on mic icon above and then just speak out the character's name<br/><span className="disclaimer">( Feature enabled currently for Chrome only )</span></p>}
       
    </div>

    );

}
export default Search;


