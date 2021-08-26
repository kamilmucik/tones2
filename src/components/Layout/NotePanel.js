import {Fragment, useContext} from 'react';
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
        },
        {
            id: 2,
            note: 'E_5',
        },
        {
            id: 3,
            note: 'G_5',
        },
        {
            id: 4,
            note: 'E_5',
        },
        {
            id: 5,
            note: 'G_5',
        },
        {
            id: 6,
            note: 'A_5',
        },
        {
            id: 7,
            note: 'G_5',
        },
        {
            id: 8,
            note: 'F_5',
        },
        {
            id: 9,
            note: 'E_5',
        },
        {
            id: 10,
            note: 'F_5',
        },

        {
            id: 11,
            note: 'F_5',
        },
        {
            id: 12,
            note: 'D_5',
        },
        {
            id: 13,
            note: 'F_5',
        },
        {
            id: 14,
            note: 'D_5',
        },
        {
            id: 15,
            note: 'F_5',
        },
        {
            id: 16,
            note: 'G_5',
        },
        {
            id: 17,
            note: 'F_5',
        },
        {
            id: 18,
            note: 'E_5',
        },
        {
            id: 19,
            note: 'D_5',
        },
        {
            id: 20,
            note: 'E_5',
        },

        {
            id: 21,
            note: 'G_5',
        },
        {
            id: 22,
            note: 'G_5',
        },
        {
            id: 23,
            note: 'E_5',
        },

        {
            id: 24,
            note: 'G_5',
        },
        {
            id: 25,
            note: 'G_5',
        },
        {
            id: 26,
            note: 'E_5',
        },


        {
            id: 27,
            note: 'G_5',
        },
        {
            id: 28,
            note: 'C_6',
        },
        {
            id: 29,
            note: 'B_5',
        },
        {
            id: 30,
            note: 'A_5',
        },
        {
            id: 31,
            note: 'F_5',
        },
        {
            id: 32,
            note: 'A_5',
        },
        {
            id: 33,
            note: 'B_5',
        },
        {
            id: 34,
            note: 'B_5',
        },
        {
            id: 35,
            note: 'B_5',
        },
        {
            id: 36,
            note: 'C_6',
        },
    ]
}


const NotePanel = props => {

    const appCtx = useContext(AppContext);

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
    </Fragment>
};

export default NotePanel;