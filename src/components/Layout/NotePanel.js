import {Fragment, useContext, useState, useEffect} from 'react';
import AppContext from '../../store/app-context';
import classes from './NotePanel.module.css';
import NoteImage from './NoteImage';
import P5Example01 from '../common/P5Example01';
import P5MicExample from '../common/P5MicExample';

const DUMMY_SONG = {
    title: 'Sto lat',
    grande: 'ludowa',
    type: 'Marsz',
    author: '',
    notes: [
        {
            id: 1,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 2,
            note: 'E_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 3,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 4,
            note: 'E_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 5,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 6,
            note: 'A_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 7,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 8,
            note: 'F_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 9,
            note: 'E_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 10,
            note: 'F_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 11,
            note: 'F_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 12,
            note: 'D_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 13,
            note: 'F_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 14,
            note: 'D_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 15,
            note: 'F_5',
            delay: 500,
            withNote: 200
        },
        {
            id: 16,
            note: 'G_5',
            delay: 500,
            withNote: 200
        },
        {
            id: 17,
            note: 'F_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 18,
            note: 'E_5',
            delay: 500,
            withNote: 200
        },
        {
            id: 19,
            note: 'D_5',
            delay: 500,
            withNote: 200
        },
        {
            id: 20,
            note: 'E_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 21,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 22,
            note: 'G_5',
            delay: 500,
            withNote: 200
        },
        {
            id: 23,
            note: 'E_5',
            delay: 500,
            withNote: 200
        },
        {
            id: 24,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 25,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 26,
            note: 'E_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 27,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 28,
            note: 'C_6',
            delay: 500,
            withNote: 20
        },
        {
            id: 29,
            note: 'B_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 30,
            note: 'A_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 31,
            note: 'G_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 32,
            note: 'A_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 33,
            note: 'B_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 34,
            note: 'B_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 35,
            note: 'B_5',
            delay: 500,
            withNote: 20
        },
        {
            id: 36,
            note: 'C_6',
            delay: 500,
            withNote: 20
        },
    ]
}

const NotePanel = props => {

    const appCtx = useContext(AppContext);

    const micLevel = appCtx.micLevel;

    const [timerOn, setTimerOn] = useState(false);
    const [index, setIndex] = useState(0);
    
    const [indexTransalte, setIndexTransalte] = useState(0);

    useEffect(() => {
        if (timerOn) {
            setTimeout(
                () =>
                    setIndex((prevIndex) =>
                    prevIndex === DUMMY_SONG.notes.length - 1 ? 0 : prevIndex + 1
                    ),
                DUMMY_SONG.notes[index].delay + 200
            );
            return () => {};
        }
    }, [index,timerOn]);

    useEffect(() => {
        // appCtx.setCurrentPlayTime(time);
        appCtx.setCurrentNote(DUMMY_SONG.notes[index].note);
        // console.log(DUMMY_SONG.notes[index].note, '- Has changed');
        },[index]); // <-- here put the parameter to listen

    useEffect(() => {
        console.log(timerOn, 'microphoneChecked - Has changed')
    },[timerOn]); // <-- here put the parameter to listen


    const micLevelChangeHandler = (value) => {
        appCtx.setMicLevel(value);
    };

    function nextSlide(n) {
        setIndexTransalte(indexTransalte+n);
        setTimerOn(!timerOn);
    }

    return <Fragment>
        <div className={classes.slideshowCenterContainer}>
            <div className={classes.slideshowContainer}>
                <div
                className={classes.mySlides}
                style={{ transform: `translate(${(-index * 20)-20 }px, 0)`, transitionDuration: `0.2s`}}
                >
                    {DUMMY_SONG.notes.map((backgroundColor, index) => (
                    <div 
                        className={classes.slideItem}
                        key={index}
                    >
                        <NoteImage letter={DUMMY_SONG.notes[index].note} withNote={DUMMY_SONG.notes[index].withNote} />
                    </div>

                    ))}
                </div>

            </div> 

            <div style={{width: "200px"}}>
                {index}:
                {indexTransalte}:
                {timerOn ? 'true' : 'false'}
                
                <a className={classes.left} onClick={() => nextSlide(-1)}>❮</a>  
                &nbsp;
                <a className={classes.right}onClick={() => nextSlide(1)}>❯</a>  
            </div>
            <div>
                <P5Example01 testIndx={index} currNote={DUMMY_SONG.notes[index].note} />
            </div>
            <div>
                <P5MicExample onMicLevelChange={micLevelChangeHandler} />
            </div>
        </div>
    </Fragment>
};

export default NotePanel;