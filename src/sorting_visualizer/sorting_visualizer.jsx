import React from 'react';
import './sorting_visualizer.css';

const randomInteger = function(min, max) {
    // inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];

        for (let i = 0; i < 320; i++) {
            array.push(randomInteger(5, 600));
        };

        this.setState({ array });
    }

    mergeSort() {

    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        key={idx} 
                        className='array-bar'
                        style={{height: `${value}px`}}
                    >
                        {/* {value} */}
                    </div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                {/* <button onClick={() => this.mergeSort()}>Merge Sort</button> */}
            </div>
        )
    }
}

export default SortingVisualizer;