import React from 'react';

const ItemListContainer = ({ greetings }) => {
  return (
    <div style={{ color: 'white', textAlign: 'center', padding:'10px 0 10px 0', backgroundColor: '#2ab6ca'}}>
      <h2>{greetings}</h2> 
    </div>
  );
};

export default ItemListContainer;