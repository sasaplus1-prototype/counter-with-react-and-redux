(function(){

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
      return (
        <Provider store={store}>
          <div>
            <span>{1}</span>
            <br />
            <input type="button" value="inc" />
            <input type="button" value="dec" />
          </div>
        </Provider>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      state: state
    };
  }

  //----------------------------------------------------------------------------

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

}());
