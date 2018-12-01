import React from 'react';
import { connect } from 'react-redux';
import { initStore, initialCards, addItem } from '../store';
import './index.css';
import Card from './Card';

class Index extends React.Component  {
  static async getInitialProps ( {store} ) {
    return store.dispatch(initialCards());
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/static/logo.png"
               className="static-logo" alt="logo"
          />
        </header>
        <div className="Grid">
          {
            this.props.cards.map((card) => (
              <Card key={card.id} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default connect()(Index);