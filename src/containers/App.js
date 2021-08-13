import {React, useState, useEffect} from 'react';
import CharacterList from '../components/CharacterList';
import Header from '../components/Header'
import Search from '../components/Search';
import './App.css';


const App =()=> {
  const [charactersData, setCharactersData] = useState([]);
  const [isPending, setisPending] = useState(true);
  const [searchField, setSearchField] = useState('');
  const [ifFailed, setIfFailed] = useState(false)


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

  const getSearchValue =(e)=>{
    setSearchField(e.target.value);
  }

  const filteredCharacters = charactersData.filter((character)=>{
    return (character.name.toLowerCase().includes(searchField.toLowerCase()) | character.nickname.toLowerCase().includes(searchField.toLowerCase()));
  })

  return (
    <div className="container">
      <Header/>
      <Search getSearchValue={getSearchValue} />
      <CharacterList characters ={filteredCharacters} isPending={isPending} ifFailed={ifFailed}/>
      
  </div>
  );
}

export default App;
