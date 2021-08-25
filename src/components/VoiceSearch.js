import React, {useState, useEffect} from 'react';


const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = new speechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';


const Search = ({handleVoiceResults, isListening, setIsListening})=>{

    const [voiceSearchResults, setvoiceSearchResults] = useState('');

    useEffect(() => {
        const handleListen = () => {
            

            if (isListening) {
              try{
                mic.start()
              }
              catch{
                mic.stop()
              }
              
              mic.onend = () => {
                mic.start()
              }
            } else {
              mic.stop()
              mic.onend = () => {
                setvoiceSearchResults('');
              }
            }
            
            mic.onresult = event => {
              const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
              setvoiceSearchResults(transcript)
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
export default Search;
