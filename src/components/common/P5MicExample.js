import React, { Component } from 'react';
import Sketch from "react-p5";
import 'p5/lib/addons/p5.sound';

class P5MicExample extends Component {

    constructor(props){
        super(props);

        this.state = {
            mic: null,
            micLevel: 1,
            isAnalysis: false
        };
        this.togglePlaying = this.togglePlaying.bind(this);
    }

    setup = p5 => {
        p5.createCanvas(100, 100);
        p5.angleMode(p5.DEGREES);

        // create an audio in
        this.mic = new p5.constructor.AudioIn();
        this.mic.start();

        this.setState({ 
            mic: this.mic 
        });
    }

    draw = p5 => {
        p5.background(0);
        p5.fill(255);
        p5.text('tap to start', p5.width/2, 20);

        if(this.state.isAnalysis === true){
            p5.micLevel = this.state.mic.getLevel();

            this.props.onMicLevelChange(p5.micLevel);
            this.setState({ 
                micLevel: p5.micLevel
            });
        }
        
        let y = p5.height - p5.micLevel * p5.height;
        p5.ellipse(p5.width/2, y, 10, 10);
    }

    togglePlaying() {
        let tmp = this.state.isAnalysis;
        this.setState({ 
            isAnalysis: !tmp
        });
    }

    render() {
        return (
            <div className="P5MicExample">
                <p>P5MicExample: {this.state.isAnalysis == true? "true" : "false"}</p>
                {/* <p>micLevel {this.state.micLevel}</p> */}
                <Sketch setup={this.setup} draw={this.draw} />

                <button onClick = {this.togglePlaying}>run</button> 
            </div>
        );
    }
}

export default P5MicExample;