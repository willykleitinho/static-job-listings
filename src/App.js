import './App.css';
import data from './data.js';

import {useState} from 'react';
import Listings from './components/Listings';
import Filter from './components/Filter';

export default function App() {
  const [tags, setTags] = useState({
    role: '',
    level: '',
    tools: [],
    languages: []
  });

  return (
    <>
      <Filter tags={tags} setTags={setTags} />
      <Listings listings={filterListings(tags, data)} setTags={setTags}/>
    </>
  )
}

function filterListings(state, data) {
  const listOfTags = [...state.languages, ...state.tools];
  
  if (state.role) {
    listOfTags.push(state.role);
  }
  
  if (state.level) {
    listOfTags.push(state.level)
  }

  return data.filter(listing => {
    let isSelected = false;
    const listingTags = [
      listing.role, listing.level, ...listing.languages, ...listing.tools
    ];

    if (isSubset(listOfTags, listingTags)) {
      isSelected = true;
    }

    return isSelected;
  });
}

function isSubset(arr1, arr2) {
  if (arr1.length === 0) return true;

  let isSubsetArr = true;
  for (const item of arr1) {
    if (!arr2.includes(item)) {
      isSubsetArr = false;
    }
  }

  return isSubsetArr;
}