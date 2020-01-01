import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
class PiecesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.ships = [
            {name: 'Aircraft Carrier', length: 5},
            {name: 'Battleship', length: 4},
            {name: 'Submarine', length: 3},
            {name: 'Destroyer', length: 3},
            {name: 'Patrol Boat', length: 2},
          ];
    }
 aircraftCarrier = (e) => {
    console.log('you clicked on aircraft carrier', e.target.value)
    this.props.activate(this.ships[0])
    document.getElementById("aircraft-carrier").disabled=true;
  }

battleship = (e) => {
    console.log('you clicked on battleship', e.target.value)
    this.props.activate(this.ships[1])
    document.getElementById("battleship").disabled=true;
  }

submarine = (e) => {
    console.log('you clicked on submarine', e.target.value)
    this.props.activate(this.ships[2])
    document.getElementById("submarine").disabled=true;
}

destroyer = (e) => {
    console.log('you clicked on destroyer', e.target.value)
    this.props.activate(this.ships[3])
    document.getElementById("destroyer").disabled=true;
}

patrolBoat = (e) => {
    console.log('you clicked on patrol boat', e.target.value)
    this.props.activate(this.ships[4])
    console.log('what is activate', this.props.activate)
    document.getElementById("patrol-boat").disabled=true;
}



// active state of radio button should be true 
// once you click on a button, state of button should revert false AFTER you place 
// a ship on the board

 render() {

    // for orientation, vertical is false and horizontal
    // is true. by default it is true. 
    // create function called orientation
    //if this.props.orientation is true...
    //call in button using this.orientation

    return (
        <div>
          <h3>Your Ships</h3>
          <Form>
            <ul key='inline-radio' className='mb-3 list-unstyled'>
              <li><Form.Check id="patrol-boat" inline name='ship' type='radio' label='2' value='2' onClick={this.patrolBoat} /></li>
              <li><Form.Check id="destroyer" inline name='ship' type='radio' label='3' value='3' onClick={this.destroyer} /></li>
              <li><Form.Check id="submarine" inline name='ship' type='radio' label='3' value='3' onClick={this.submarine} /></li>
              <li><Form.Check id="battleship" inline name='ship' type='radio' label='4' value='4' onClick={this.battleship} /></li>
              <li><Form.Check id="aircraft-carrier" inline name='ship' type='radio' label='5' value='5' onClick={this.aircraftCarrier} /></li>
            </ul>
          </Form>
          <h3>Orientation</h3>
            <button onClick={this.props.orientation} className='selector'>Orientation</button>
        </div>
      )
 }
 

}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
    return {
        activate: (ship) => dispatch({type: 'ACTIVATE' , payload: ship}),
        orientation: () => dispatch({type: 'ORIENTATION'}),
        deactivate: () => dispatch({type: 'DEACTIVATE_BOARD'})

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PiecesContainer)
