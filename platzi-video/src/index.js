import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

import App from './App';

const app = document.getElementById('app');
const initialState = {
  'user': {},
  'playing': null,
  'content': [
    {
      'id': 2,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://images.pexels.com/photos/2865899/pexels-photo-2865899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 3,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'https://images.pexels.com/photos/2868903/pexels-photo-2868903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 4,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 5,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 6,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 7,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'https://images.pexels.com/photos/2793048/pexels-photo-2793048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 8,
      'slug': 'tvshow-8',
      'title': 'Stargate Atlantis',
      'type': 'Action',
      'language': 'English',
      'year': 2012,
      'contentRating': '16+',
      'duration': 148,
      'cover': 'https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 9,
      'slug': 'tvshow-9',
      'title': 'Alien Highway',
      'type': 'Action',
      'language': 'English',
      'year': 2019,
      'contentRating': '16+',
      'duration': 128,
      'cover': 'https://images.pexels.com/photos/2873510/pexels-photo-2873510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 10,
      'slug': 'tvshow-10',
      'title': 'Elementary',
      'type': 'Animation',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 346,
      'cover': 'https://images.pexels.com/photos/2868903/pexels-photo-2868903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 11,
      'slug': 'tvshow-11',
      'title': 'Strange Angel',
      'type': 'War',
      'language': 'English',
      'year': 2015,
      'contentRating': '16+',
      'duration': 226,
      'cover': 'https://images.pexels.com/photos/2865899/pexels-photo-2865899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 12,
      'slug': 'tvshow-12',
      'title': 'Private Eyes',
      'type': 'Comedy',
      'language': 'English',
      'year': 2018,
      'contentRating': '16+',
      'duration': 190,
      'cover': 'https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 13,
      'slug': 'tvshow-13',
      'title': 'NCIS: Los Angeles',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
  ],
  'results': [],
  'myList': [],
  'trends': [
    {
      'id': 2,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://images.pexels.com/photos/2865899/pexels-photo-2865899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 3,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'https://images.pexels.com/photos/2868903/pexels-photo-2868903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 4,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 5,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 6,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 7,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'https://images.pexels.com/photos/2793048/pexels-photo-2793048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
  ],
  'originals': [
    {
      'id': 8,
      'slug': 'tvshow-8',
      'title': 'Stargate Atlantis',
      'type': 'Action',
      'language': 'English',
      'year': 2012,
      'contentRating': '16+',
      'duration': 148,
      'cover': 'https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 9,
      'slug': 'tvshow-9',
      'title': 'Alien Highway',
      'type': 'Action',
      'language': 'English',
      'year': 2019,
      'contentRating': '16+',
      'duration': 128,
      'cover': 'https://images.pexels.com/photos/2873510/pexels-photo-2873510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 10,
      'slug': 'tvshow-10',
      'title': 'Elementary',
      'type': 'Animation',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 346,
      'cover': 'https://images.pexels.com/photos/2868903/pexels-photo-2868903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 11,
      'slug': 'tvshow-11',
      'title': 'Strange Angel',
      'type': 'War',
      'language': 'English',
      'year': 2015,
      'contentRating': '16+',
      'duration': 226,
      'cover': 'https://images.pexels.com/photos/2865899/pexels-photo-2865899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 12,
      'slug': 'tvshow-12',
      'title': 'Private Eyes',
      'type': 'Comedy',
      'language': 'English',
      'year': 2018,
      'contentRating': '16+',
      'duration': 190,
      'cover': 'https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 13,
      'slug': 'tvshow-13',
      'title': 'NCIS: Los Angeles',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , app,
  );
}

render();

if (module.hot) {
  module.hot.accept(App, () => {
    render();
  });
}
