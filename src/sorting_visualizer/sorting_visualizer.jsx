import React from 'react';
import './sorting_visualizer.css';
// import mergeSort from '../algorithms/algorithms';
import * as sortingAlgorithms from '../algorithms/algorithms';
import { getMergeSortAnimations } from '../algorithms/algorithms';

const randomInteger = function(min, max) {
    // inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const areArraysEqual = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    };

    return true;
}

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    testAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomInteger(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomInteger(-1000, 1000));
            };
            // test
            const javaScriptSort = this.state.array.slice().sort((a, b) => a - b);
            // const javaScriptSort = this.state.array.slice().sort();
            // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
            const sortedArray = sortingAlgorithms.getMergeSortAnimations(this.state.array);
            // console.log(sortedArray);
            console.log(areArraysEqual(javaScriptSort, sortedArray));
        };
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
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.testAlgorithms()}>Test Sort</button>
            </div>
        )
    }
}

export default SortingVisualizer;