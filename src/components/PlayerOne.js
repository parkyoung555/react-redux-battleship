import React, { Component } from 'react'
import PiecesContainer from './PiecesContainer'
import Board from './Board'
import Board2 from './Board2'
import Instructions from './Instructions'
import StartModal from './StartModal'
import Chat from './Chat'
import {connect} from 'react-redux'
import {UPDATE_STATE} from '../actions/actionTypes'
import {listenGameData} from '../firebaseFunc'

class PlayerOne extends Component {

    updateToDbState (gameId, snapVal) {
        console.log('updateToDbState:', gameId, snapVal)
        this.props.updateState(snapVal)
      }
    
      componentDidUpdate () {
        const gameId = this.props.state.squares.gameId
        if (gameId) {
          const updateToDbStateBoundToMe = this.updateToDbState.bind(this)
          listenGameData(gameId, updateToDbStateBoundToMe)
        }
      }

    render() {
        return (
            <div className='d-flex app-container'>   
            <div className= 'game-container'>
              <div className="title"><h1> React-Redux <span style={{color: "#64B2F4"}}>Battleship</span></h1></div>
                <div className="game-instructions-container">
                  <div className='game-info'>
                      <PiecesContainer />
                    </div>
                  <div className='game'>
                    <div className='game-board'>
                      <Board  />
                    </div>
                    <div className='second-board'>
                        {/* <Board2 props={ this.props.state } /> */}
                        { this.props.state.squares.isPlaying ? <Board2 props={ this.props.state }/> : null}
                    </div>
                    <div className='instructions-container'>
                      <div className="instructions">
                        {/* <Instructions /> */}
                        { this.props.state.squares.isPlaying ? null : <Instructions />}
                      </div>
                      <div className={ this.props.state.squares.player1Ready ? 'start-btn-container': 'start-btn-container-closed' }>
                        {/* <StartModal props={this.props.state.squares} /> */}
                        { this.props.state.squares.isPlaying ? null : <StartModal props={ this.props.state.squares } />}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              <Chat />
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { state }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateState: (gameData) => dispatch({ type: UPDATE_STATE, game: gameData })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PlayerOne)