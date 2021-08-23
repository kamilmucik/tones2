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
    incMetronomTempo: () => { },
    decMetronomTempo: () => { },
    setMicrophoneChecked: () => { },
    setPlayChecked: () => { },
    setChartChecked: () => { },
    setCurrentInstrument: () => {},
    setCurrentNote: () => {},
    setCurrentPlayTime: () => {}
});

export default AppContext;