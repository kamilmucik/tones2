/**
 * Created by zhaonan on 2018/3/2.
 */
 import React, { Component } from 'react';
 
import AppContext from '../../store/app-context';
import { p5 } from 'p5';
import Sketch from "react-p5";
import getNoteFrequenc from '../common/getNoteFrequency';
import 'p5/lib/addons/p5.sound';

    
 class P5Example01 extends Component {
    duration = 500;

    constructor(props){
        super(props);

        this.state = { 
            loadedState: false ,
            osc: null,
            currentFreq: 493.88,
            isAnalysis: false
        };

        this.togglePlaying = this.togglePlaying.bind(this);
        this.setup = this.setup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.runAnalysis = this.runAnalysis.bind(this);
    }

    setup = p5 => {
        p5.createCanvas(1, 1);
        p5.angleMode(p5.DEGREES);
        this.osc = new p5.constructor.TriOsc();

        // Start silent
        this.osc.start();
        this.osc.amp(0);

        this.setState({ 
            osc: this.osc 
        });
    }
    
    loaded() {
        this.loadedState = true;
    }
    
    togglePlaying() {
        
        this.setState({ 
            isAnalysis: true
        });

        // let osc = this.state.osc;
        // let duration = 500;

        // osc.freq(this.state.currentFreq);
        // // // Fade it in
        // osc.fade(0.5,0.2);
        // // If we sest a duration, fade it out
        // if (duration) {
        //     setTimeout(function() {
        //         osc.fade(0,0.2);
        //     }, duration-50);
        // }
        // osc.start();
    }
    
    draw = p5 => {
        p5.background(0);
    }

    handleChange(e) {
        this.setState({currentFreq: e.target.value});
    }

    runAnalysis(num){
        let osc = this.state.osc;
        let duration = 50;

        osc.freq(num);
        // // Fade it in
        osc.fade(0.5,0.2);
        // If we sest a duration, fade it out
        if (duration) {
            setTimeout(function() {
                osc.fade(0,0.2);
            }, duration-50);
        }
        osc.start();
    }
  
    render() {
        if(this.state.isAnalysis === true){
            this.runAnalysis(getNoteFrequenc(this.props.currNote));
        }
        
        return (
            <div className="P5Example01">
                <p>P5Example01: {this.state.isAnalysis == true? "true" : "false"}</p>
                <button onClick = {this.togglePlaying}>getFFTarray</button> 
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}

export default P5Example01;