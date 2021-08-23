import { useReducer } from "react";
import AppContext from "./app-context";

const defaultAppState = {
    notes: [],
    metronomTempoValue: 90,
    microphoneCheckedValue: false,
    playCheckedValue: false,
    chartCheckedValue: false,
    currentInstrument: 'sax',
    currentNote: 'Gh4',
    currentPlayTime: 0,
};

const appReducer = (state, action) => {
    
    const updatedMetronomTempoValue = state.metronomTempoValue;
    const microphoneCheckedValue = state.microphoneCheckedValue;
    const playCheckedValue = state.playCheckedValue;
    const chartCheckedValue = state.chartCheckedValue;
    const currentInstrument = state.currentInstrument;
    const currentNote = state.currentNote;
    const currentPlayTime = state.currentPlayTime;

    if (action.type === 'ADD') {
        const updatedMetronomTempoValue = state.metronomTempoValue + 5;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    if (action.type === 'REMOVE') {
        const updatedMetronomTempoValue = state.metronomTempoValue - 5;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    if (action.type === 'MICROPHONE') {
        const microphoneCheckedValue = action.item;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    if (action.type === 'PLAY') {
        const playCheckedValue = action.item;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    if (action.type === 'CHART') {
        const chartCheckedValue = action.item;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    if (action.type === 'INSTRUMENT') {
        const currentInstrument = action.item;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    
    if (action.type === 'NOTE') {
        const currentNote = action.item;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    
    if (action.type === 'PLAYTIMMER') {
        const currentPlayTime = action.item;
        return {
            notes: [],
            metronomTempoValue: updatedMetronomTempoValue,
            microphoneCheckedValue: microphoneCheckedValue,
            playCheckedValue: playCheckedValue,
            chartCheckedValue: chartCheckedValue,
            currentInstrument: currentInstrument,
            currentNote: currentNote,
            currentPlayTime: currentPlayTime
        };
    }
    
    return defaultAppState;
};

const AppProvider = props => {
    const [appState, dispatchAppAction] = useReducer(appReducer, defaultAppState);

    const incMetronomTempoHandler = number => {
        dispatchAppAction({type: 'ADD', item: number});
    };

    const decMetronomTempoHandler = number => {
        dispatchAppAction({type: 'REMOVE', item: number});
    };

    const setMicrophoneCheckedHandler = value => {
        dispatchAppAction({type: 'MICROPHONE', item: value});
    }

    const setPlayCheckedHandler = value => {
        dispatchAppAction({type: 'PLAY', item: value});
    }

    const setChartCheckedHandler = value => {
        dispatchAppAction({type: 'CHART', item: value});
    }
    const setCurrentInstrumentHandler = value => {
        dispatchAppAction({type: 'INSTRUMENT', item: value});
    }
    const setCurrentNoteHandler = value => {
        dispatchAppAction({type: 'NOTE', item: value});
    }
    const setCurrentPlayTimeHandler = value => {
        dispatchAppAction({type: 'PLAYTIMMER', item: value});
    }

    const appContext = {
        notes: appState.notes,
        metronomTempoValue: appState.metronomTempoValue,
        microphoneCheckedValue: appState.microphoneCheckedValue,  
        playCheckedValue: appState.playCheckedValue,
        chartCheckedValue: appState.chartCheckedValue,
        currentInstrument: appState.currentInstrument,
        currentNote: appState.currentNote,
        currentPlayTime: appState.currentPlayTime,
        incMetronomTempo: incMetronomTempoHandler,
        decMetronomTempo: decMetronomTempoHandler,
        setMicrophoneChecked: setMicrophoneCheckedHandler,
        setPlayChecked: setPlayCheckedHandler,
        setChartChecked: setChartCheckedHandler,
        setCurrentInstrument: setCurrentInstrumentHandler,
        setCurrentNote: setCurrentNoteHandler,
        setCurrentPlayTime: setCurrentPlayTimeHandler
    };

    return <AppContext.Provider value={appContext}>
        {props.children}
    </AppContext.Provider>
};

export default AppProvider;