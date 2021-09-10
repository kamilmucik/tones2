/**
 * Created by zhaonan on 2018/3/2.
 */
 import React, { Component } from 'react';
 
import Sketch from "react-p5";
import 'p5/lib/addons/p5.sound';
 
 class P5Example01 extends Component {
 
    getFFT(){
        console.log("get the array of array!");
    };

    render() {
       
        return (
            <div className="P5Example01">
                <p>P5Example01</p>
                {/* {/* <button onClick = {this.stateChange}>fft analysis</button> */}
                <button onClick = {this.getFFT}>getFFTarray</button> 
            </div>
        );
    }
}

export default P5Example01;