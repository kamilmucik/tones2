import React from 'react';

const AppContext = React.createContext({
    notes: [],
    metronomTempoValue: 90,
    microphoneCheckedValue: false,
    playCheckedValue: false,
    chartCheckedValue: false,
    currentInstrument: 'venova',
    currentNote: 'Gh4',
    currentPlayTime: 0,
    micLevel: 0.5,
    incMetronomTempo: () => { },
    decMetronomTempo: () => { },
    setMicrophoneChecked: () => { },
    setPlayChecked: () => { },
    setChartChecked: () => { },
    setCurrentInstrument: () => {},
    setCurrentNote: () => {},
    setCurrentPlayTime: () => {},
    setMicLevel: () => {}
});

export default AppContext;