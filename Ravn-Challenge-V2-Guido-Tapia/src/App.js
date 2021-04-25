import logo from './assets/images/loading-logo.svg';
import './assets/styles/App.css';
import './assets/styles/global-styles.css';
import React,{useState} from 'react';

//We import our component
import PageHeader from './components/headers/PageHeader';
import DataList from './components/lists/DataList';
import PeopleList from './components/lists/PeopleList';



function App() {
  const [personId,setId] =useState('personId')
  return (
    <div className="App">
      
      <PageHeader/>
      <PeopleList setId={setId} />
      <DataList personId= {personId} />
    </div>
    
  );
}

export default App;
