import {Fragment, useContext, useState, useEffect} from 'react';
import AppContext from '../../store/app-context';
import classes from './NotePanel.module.css';
import NoteImage from './NoteImage';

const DUMMY_SONG = {
    title: 'Sto lat',
    grande: 'ludowa',
    type: 'Marsz',
    author: '',
    notes: [
        {
            id: 1,
            note: 'G_5',
            delay: 500
        },
        {
            id: 2,
            note: 'E_5',
            delay: 500
        },
        {
            id: 3,
            note: 'G_5',
            delay: 500
        },
        {
            id: 4,
            note: 'E_5',
            delay: 500
        },
        {
            id: 5,
            note: 'G_5',
            delay: 500
        },
        {
            id: 6,
            note: 'A_5',
            delay: 500
        },
        {
            id: 7,
            note: 'G_5',
            delay: 500
        },
        {
            id: 8,
            note: 'F_5',
            delay: 500
        },
        {
            id: 9,
            note: 'E_5',
            delay: 500
        },
        {
            id: 10,
            note: 'F_5',
            delay: 500
        },
        {
            id: 11,
            note: 'F_5',
            delay: 500
        },
        {
            id: 12,
            note: 'D_5',
            delay: 500
        },
        {
            id: 13,
            note: 'F_5',
            delay: 500
        },
        {
            id: 14,
            note: 'D_5',
            delay: 500
        },
        {
            id: 15,
            note: 'F_5',
            delay: 500
        },
        {
            id: 16,
            note: 'G_5',
            delay: 500
        },
        {
            id: 17,
            note: 'F_5',
            delay: 500
        },
        {
            id: 18,
            note: 'E_5',
            delay: 500
        },
        {
            id: 19,
            note: 'D_5',
            delay: 500
        },
        {
            id: 20,
            note: 'E_5',
            delay: 500
        },
        {
            id: 21,
            note: 'G_5',
            delay: 500
        },
        {
            id: 22,
            note: 'G_5',
            delay: 500
        },
        {
            id: 23,
            note: 'E_5',
            delay: 500
        },
        {
            id: 24,
            note: 'G_5',
            delay: 500
        },
        {
            id: 25,
            note: 'G_5',
            delay: 500
        },
        {
            id: 26,
            note: 'E_5',
            delay: 500
        },
        {
            id: 27,
            note: 'G_5',
            delay: 500
        },
        {
            id: 28,
            note: 'C_6',
            delay: 500
        },
        {
            id: 29,
            note: 'B_5',
            delay: 500
        },
        {
            id: 30,
            note: 'A_5',
            delay: 500
        },
        {
            id: 31,
            note: 'F_5',
            delay: 500
        },
        {
            id: 32,
            note: 'A_5',
            delay: 500
        },
        {
            id: 33,
            note: 'B_5',
            delay: 500
        },
        {
            id: 34,
            note: 'B_5',
            delay: 500
        },
        {
            id: 35,
            note: 'B_5',
            delay: 500
        },
        {
            id: 36,
            note: 'C_6',
            delay: 500
        },
    ]
}

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const NotePanel = props => {

    const appCtx = useContext(AppContext);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === DUMMY_SONG.notes.length - 1 ? 0 : prevIndex + 1
            ),
        // delay
        DUMMY_SONG.notes[index].delay
        );
        return () => {};
    }, [index]);

    function changeNoteFunction(name) {
        // console.log(`hello, ${name}`);
        appCtx.setCurrentNote(name);
      }

    const noteList = DUMMY_SONG.notes.map(note => 
    <li className={classes.li}>
        <a className={classes.a} onClick={() => changeNoteFunction(note.note)}>
            <NoteImage letter={note.note} />
        </a>
    </li>);

    return <Fragment>
        <ul className={classes.ul}>
            {noteList}
        </ul>

        <div className={classes.slideshow}>
            <div
                className={classes.slideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {DUMMY_SONG.notes.map((backgroundColor, index) => (
                <div
                    className={classes.slide}
                    key={index}
                    // style={{ backgroundColor }}
                >
                    {/* {DUMMY_SONG.notes[index].note} */}
                    {/* a_{index} */}
                    <NoteImage letter={DUMMY_SONG.notes[index].note} />
                </div>

                ))}
            </div>
        </div>

        <p>
            {index}
        </p>
        {/* <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className={classes.slide}
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className={classes.slideshowDots}>
        {colors.map((_, idx) => (
          <div key={idx} className={classes.slideshowDot}></div>
        ))}
      </div>
    </div> */}
    </Fragment>
};

export default NotePanel;