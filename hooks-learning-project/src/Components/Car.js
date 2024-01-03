import React from 'react'

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  const myEle = {name:'bibi',lname:'khuteja'}
  function Garage() {
    return (
      <>
        
        <Car brand={myEle.lname} />
      </>
    );
  }
export default Garage
