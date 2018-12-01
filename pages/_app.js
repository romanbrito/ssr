import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';

class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialCards: bindActionCreators(initialCards, dispatch),
    addItem: bindActionCreators(addItem, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(MyApp);