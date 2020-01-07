import React from 'react'
import PlayerTwo from './components/PlayerTwo'
import PlayerOne from './components/PlayerOne'
import { UPDATE_STATE} from './actions/actionTypes'
import { connect } from 'react-redux'
import './App.css'
import { FIREBASE } from './actions/actionTypes'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends React.Component {

  constructor(){
    super()
    this.shipCounter = 0
  }

  // updateToDbState (gameId, snapVal) {
  //   console.log('updateToDbState:', gameId, snapVal)
  //   this.props.updateState(snapVal)
  // }

  // componentDidUpdate () {
  //   console.log('app did update', this.props.match)
  //   const gameId = this.props.state.squares.gameId
  //   if (gameId) {
  //     const updateToDbStateBoundToMe = this.updateToDbState.bind(this)
  //     listenGameData(gameId, updateToDbStateBoundToMe)
  //   }

  // }

  render () {
    return (
    <Router>
      <Switch>
      <Route exact path='/' component={PlayerOne}>
      </Route>
      <Route path='/game/:gameId' component={PlayerTwo} />
      </Switch>
    </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    firebaseAction: (gameState) => dispatch({ type: FIREBASE, payload: gameState }),
    updateState: (gameData) => dispatch({ type: UPDATE_STATE, game: gameData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
