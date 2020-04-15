import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return ( 
            <div>
                <div className='Homepage'> Name of members: Jordan, Daniel, Michael, Andrew </div>
                <img src={ require('../Assets/greece.jpg') } />
            </div>
        );
    }
} 

export default Homepage;