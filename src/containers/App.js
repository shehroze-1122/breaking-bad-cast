import {React, useState, useEffect} from 'react';
import CharacterList from '../components/CharacterList';
import Header from '../components/Header'
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import './App.css';



const App =()=> {
  const [charactersData, setCharactersData] = useState([]);
  const [isPending, setisPending] = useState(true);
  const [searchField, setSearchField] = useState('');
  const [ifFailed, setIfFailed] = useState(false);
  const [isListening, setIsListening] = useState(false);


  const fetchData = async ()=>{
    try{
      const resp = await fetch('https://www.breakingbadapi.com/api/characters');
      const data =await resp.json();
      setCharactersData(data);
      setisPending(false);
    }
    catch{
      setIfFailed(true);
    }

  }

  useEffect(()=>{
    fetchData();
  },[])

  const getSearchValueByTyping =(e)=>{
    setSearchField(e.target.value);
  }

  const filteredCharacters = charactersData.filter((character)=>{
    return (character.name.toLowerCase().includes(searchField.toLowerCase()) | character.nickname.toLowerCase().includes(searchField.toLowerCase()));
  })

  const handleVoiceResults = (transcript)=>{
    setSearchField(transcript);
  }
  const handleListening =()=>{
    setIsListening(prevState => !prevState)
  }
  if ('webkitSpeechRecognition' in window){
    const VoiceSearch = require('../components/VoiceSearch').default;
    return (
      <div className="container">
      
          <Header/>
          <Search getSearchValueByTyping={getSearchValueByTyping} handleListening={handleListening} isListening={isListening}/>
          <VoiceSearch handleVoiceResults={handleVoiceResults} isListening={isListening} setIsListening={setIsListening}/>
          <Scroll>
            <CharacterList characters ={filteredCharacters} isPending={isPending} ifFailed={ifFailed}/>
          </Scroll>
      </div>
    );
  }
  else{
    return(
      <div className="container">
          <Header/>
          <Search getSearchValueByTyping={getSearchValueByTyping} handleListening={handleListening} isListening={isListening}/>
          <Scroll>
            <CharacterList characters ={filteredCharacters} isPending={isPending} ifFailed={ifFailed}/>
          </Scroll>
      </div>
    );

  }


  
}

export default App;
