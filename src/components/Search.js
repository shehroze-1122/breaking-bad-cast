import React, {useState, useEffect} from 'react';

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const mic = new speechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';


const Search = ({getSearchValueByTyping, handleVoiceResults})=>{

    const [voiceSearchResults, setvoiceSearchResults] = useState('');
    const [isListening, setIsListening] = useState(false);
    

    useEffect(() => {
        const handleListen = () => {

            if (isListening) {
              mic.start()
              mic.onend = () => {
                mic.start()
              }
            } else {
              mic.stop()
              mic.onend = () => {
                setvoiceSearchResults('');
              }
            }
            mic.onstart = () => {
              console.log('Mics on')
            }
        
            mic.onresult = event => {
              const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
              console.log(transcript)
              setvoiceSearchResults(transcript)
              mic.onerror = event => {
                console.log(event.error)
              }
            }
          }
        handleListen();
      }, [isListening])
    
    
      const handleClear = ()=>{
        handleVoiceResults('');
        setIsListening(false);

      }

    

    return(
    <div className="searchbox">
        <div className="search-input">
            <input type="text" placeholder="Search your favourite characters" onChange={getSearchValueByTyping}/>
            <button onClick={() => setIsListening(prevState => !prevState)}>{isListening?(<i className="fas fa-2x fa-microphone-slash text-danger" aria-hidden="true"></i>):(<i className="fas fa-2x fa-microphone" aria-hidden="true"></i>)}</button>
        </div>
        {isListening? <p>We are listening. . . <br/>Try speaking any Breaking Bad Character name or nickname (e.g. Jesse Pinkman)</p>: <p>Don't wanna search your favourite character by typing? Try clicking on mic icon above and then just speak out the character's name</p>}

        {voiceSearchResults !== ''? (
            <div className="search-output">
                <div className="text-center text-white">
                    <p className="search-output-text">{voiceSearchResults}</p>
                </div>
                <div className="d-flex">
                    <button onClick={()=>handleVoiceResults(voiceSearchResults)} className="btn btn-outline-primary"> Search</button>
                    <button className="btn btn-danger" onClick={()=>{handleClear()}}>Clear</button>
                </div>
            </div>
        ): null }
       
    </div>

    );

}
export default Search