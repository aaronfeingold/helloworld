import React from 'react';

const header = (props) => {
   let name; let occupation; let description; let address; let social; let city; let networks;

   if (props.data) {
      ({ name, occupation, description, address, social } = props.data)
      city = address.city
      networks= social.map(function(network){
         return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
   }

   return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{name}</h1>
               <h2>A {city} based <span>{occupation}</span></h2>
               <h2>{description}</h2>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
   );
}

export default header;
