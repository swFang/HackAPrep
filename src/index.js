import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Player } from 'video-react';
import Popup from "reactjs-popup";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Popup modal trigger={<button>Click Me</button>}>
      Modal Content
      <Popup modal trigger={<button>NESTED MODAL</button> }>
        Modal Content 2
      </Popup>
    </Popup>
    <Carousel>
      <div>
        <img src="enterprise.webp" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="saplogo.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="sap-ceos.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    <Player
      playsInline
      autoPlay={true}
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
