(function () {

  'use strict';

  //----------------------------------------------------------------------------

  /**
   * counter reducer
   *
   * @param {number|undefined} state
   * @param {Object} action
   */

  function counter(state, action) {
    // NOTE: or Redux.createStore(counter, 0);
    if (typeof state === 'undefined') {
      return 0;
    }

    switch (action.type) {
      case 'DECREMENT':
        return state - 1;
      case 'INCREMENT':
        return state + 1;
      default:
        return state;
    }
  }

  const store = Redux.createStore(counter);

  //----------------------------------------------------------------------------

  const Provider = ReactRedux.Provider;

  class App extends React.Component {
    render() {
      return React.createElement(
        Provider,
        { store: store },
        React.createElement(
          'div',
          null,
          React.createElement(
            'span',
            null,
            1
          ),
          React.createElement('br', null),
          React.createElement('input', { type: 'button', value: 'inc' }),
          React.createElement('input', { type: 'button', value: 'dec' })
        )
      );
    }
  }

  function mapStateToProps(state) {
    return {
      state: state
    };
  }

  //----------------------------------------------------------------------------

  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
})();
