import React from 'react';
import NavBar from './componenes/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  
import ItemListContainer from './componenes/itemlistcontainer/itemListContainer';
const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greetings="¡Hello Joaquín, welcome to my store" />
    </div>
  );
}

export default App;
