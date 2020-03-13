import React from 'react';
import axios from 'axios';

export class Players extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        players: [],
      }
    }
    componentDidMount() {
      axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({
          players: response.data
        })
      })
      .catch(error => console.log(error));
    }
  
    render() {
      return (
      <div>
        {this.state.players.map(player => 
         <div key={player.id}>
          <h2>Name: {Players.name}</h2>
          <h2>Country: {Players.country}</h2>
          <h2>Searches: {Players.searches}</h2>
         </div>)}
       </div>
      );
    }
  }

  export default Players;