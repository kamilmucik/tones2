import {Fragment} from 'react';

const data = [
    {
        note: "C_6",
        offset: -14
    },
    {
        note: "B_5",
        offset: -7
    },
    {
        note: "A_5",
        offset: 0
    },
    {
        note: "G_5",
        offset: 7
    },
    {
        note: "F_5",
        offset: 14
    },
    {
        note: "E_5",
        offset: 21
    },
    {
        note: "D_5",
        offset: 28
    },
    {
        note: "C_5",
        offset: 35
    },
];

const NoteImage = props => {

    function findNote(name) {
        const newValue = data.filter( (number)=> number.note === name);

        // console.log("findNote: ", newValue[0]);
        return newValue[0];
      }

    const noteParams = findNote(props.letter);

    const basicNoteA = props.centerHeight || 70;

    const noteTransform = "translate(10 "+(basicNoteA + 7 + noteParams.offset)+") rotate(-20)";

    const line1 = basicNoteA - 28 || 70;
    const line2 = basicNoteA - 14 || 70;
    const line3 = basicNoteA || 70;
    const line4 = basicNoteA + 14 || 70;
    const line5 = basicNoteA + 28 || 70;

    return <Fragment>

        
        <svg width="20" height="140" viewBox="0 0 20 140" xmlns="http://www.w3.org/2000/svg" version="1.1">

        <g stroke="black" >
            <line x1="0" y1={line1} x2="20" y2={line1} stroke-width="2"  />
            <line x1="0" y1={line2} x2="20" y2={line2} stroke-width="2"  />
            <line x1="0" y1={line3} x2="20" y2={line3} stroke-width="2"  />
            <line x1="0" y1={line4} x2="20" y2={line4} stroke-width="2"  />
            <line x1="0" y1={line5} x2="20" y2={line5} stroke-width="2"  />
        </g>

        <g transform={noteTransform}>
            <ellipse rx="7" ry="5" fill="black"  />
        </g>

        <text x="0" y="15" font-size="10px" fill="red">{props.letter}</text>

        </svg>

    </Fragment>
};

export default NoteImage;
