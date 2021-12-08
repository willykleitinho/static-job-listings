import './App.css';
import data from './data.js';

import {useState} from 'react';
import Listings from './components/Listings';
import Filter from './components/Filter';

function App() {


  //todo
  const {tags, setTags} = useState({
    role: '',
    level: '',
    tools: [],
    languages: []
  });

  function filterListings(data, state) {
    data.filter(listing => {
      let isSelected = false;
      if (state.role && state.role === data.role) {
        isSelected = true;
      }
      if (state.level && state) {
        //todo
      }
    });
  }

  return (
    <>
      <Filter tags={tags} />
      <Listings listings={data} />
    </>
  )
}

export default App;