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
    switch (action.type) {
      case 'DECREMENT':
        return Object.assign({}, state, {
          count: state.count - 1,
        });
      case 'INCREMENT':
        return Object.assign({}, state, {
          count: state.count + 1,
        });
      default:
        return state;
    }
  }

  const store = Redux.createStore(counter, {
    count: 0,
  });

  //----------------------------------------------------------------------------

  function mapStateToProps(state) {
    return Object.assign({}, state);
  }

  function mapDispatchToProps(dispatch) {
    return {
      decrement() {
        dispatch({
          type: 'DECREMENT',
        });
      },
      increment() {
        dispatch({
          type: 'INCREMENT',
        });
      },
    };
  }

  const Counter = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
      render() {
        const {
          count,
          decrement,
          increment,
        } = this.props;

        return (
          <div>
            <span>{count}</span>
            <br />
            <input type="button" value="inc" onClick={increment} />
            <input type="button" value="dec" onClick={decrement} />
          </div>
        );
      }
    }
  );

  //----------------------------------------------------------------------------

  const Provider = ReactRedux.Provider;

  class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Counter />
        </Provider>
      );
    }
  }

  //----------------------------------------------------------------------------

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

}());
