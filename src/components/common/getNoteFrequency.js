

// {
//     "C": [16.35, 32.70, 65.41, 130.81, 261.63, 523.25, 1046.50, 2093.00, 4186.01],
//    "Db":   [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92],
//     "D":   [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.64],
//    "Eb":   [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03],
//     "E":   [20.60, 41.20, 82.41, 164.81, 329.63, 659.26, 1318.51, 2637.02],
//     "F":   [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83],
//    "Gb":   [23.12, 46.25, 92.50, 185.00, 369.99, 739.99, 1479.98, 2959.96],
//     "G":   [24.50, 49.00, 98.00, 196.00, 392.00, 783.99, 1567.98, 3135.96],
//    "Ab":   [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22, 3322.44],
//     "A":   [27.50, 55.00, 110.00, 220.00, 440.00, 880.00, 1760.00, 3520.00],
//    "Bb":   [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31],
//     "B":   [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07]
//  }

const freqArray = {
    "C_0":   16.35,
    "C#0":   17.32,
    "Db0":   17.32,
    "D_0":   18.35,
    "D#0":   19.45,
    "Eb0":   19.45,
    "E_0":   20.60,
    "F_0":   21.83,
    "F#0":   23.12,
    "Gb0":   23.12,
    "G_0":   24.50,
    "G#0":   25.96,
    "Ab0":   25.96,
    "A_0":   27.50,
    "A#0":   29.14,
    "Bb0":   29.14,
     "B_0":   30.87,
     "C_1":   32.70,
    "C#1":   34.65,
    "Db1":   34.65,
     "D_1":   36.71,
    "D#1":   38.89,
    "Eb1":   38.89,
     "E_1":   41.20,
     "F_1":   43.65,
    "F#1":   46.25,
    "Gb1":   46.25,
     "G_1":   49.00,
    "G#1":   51.91,
    "Ab1":   51.91,
     "A_1":   55.00,
    "A#1":   58.27,
    "Bb1":   58.27,
     "B_1":   61.74,
     "C_2":   65.41,
    "C#2":   69.30,
    "Db2":   69.30,
     "D_2":   73.42,
    "D#2":   77.78,
    "Eb2":   77.78,
     "E_2":   82.41,
     "F_2":   87.31,
    "F#2":   92.50,
    "Gb2":   92.50,
     "G_2":   98.00,
    "G#2":  103.83,
    "Ab2":  103.83,
     "A_2":  110.00,
    "A#2":  116.54,
    "Bb2":  116.54,
     "B_2":  123.47,
     "C_3":  130.81,
    "C#3":  138.59,
    "Db3":  138.59,
     "D_3":  146.83,
    "D#3":  155.56,
    "Eb3":  155.56,
     "E_3":  164.81,
     "F_3":  174.61,
    "F#3":  185.00,
    "Gb3":  185.00,
     "G_3":  196.00,
    "G#3":  207.65,
    "Ab3":  207.65,
     "A_3":  220.00,
    "A#3":  233.08,
    "Bb3":  233.08,
     "B_3":  246.94,
     "C_4":  261.63,
    "C#4":  277.18,
    "Db4":  277.18,
     "D_4":  293.66,
    "D#4":  311.13,
    "Eb4":  311.13,
     "E_4":  329.63,
     "F_4":  349.23,
    "F#4":  369.99,
    "Gb4":  369.99,
     "G_4":  392.00,
    "G#4":  415.30,
    "Ab4":  415.30,
     "A_4":  440.00,
    "A#4":  466.16,
    "Bb4":  466.16,
     "B_4":  493.88,
     "C_5":  523.25,
    "C#5":  554.37,
    "Db5":  554.37,
     "D_5":  587.33,
    "D#5":  622.25,
    "Eb5":  622.25,
     "E_5":  659.26,
     "F_5":  698.46,
    "F#5":  739.99,
    "Gb5":  739.99,
     "G_5":  783.99,
    "G#5":  830.61,
    "Ab5":  830.61,
     "A_5":  880.00,
    "A#5":  932.33,
    "Bb5":  932.33,
     "B_5":  987.77,
     "C_6": 1046.50,
    "C#6": 1108.73,
    "Db6": 1108.73,
     "D_6": 1174.66,
    "D#6": 1244.51,
    "Eb6": 1244.51,
     "E_6": 1318.51,
     "F_6": 1396.91,
    "F#6": 1479.98,
    "Gb6": 1479.98,
     "G_6": 1567.98,
    "G#6": 1661.22,
    "Ab6": 1661.22,
     "A_6": 1760.00,
    "A#6": 1864.66,
    "Bb6": 1864.66,
     "B_6": 1975.53,
     "C_7": 2093.00,
    "C#7": 2217.46,
    "Db7": 2217.46,
     "D_7": 2349.32,
    "D#7": 2489.02,
    "Eb7": 2489.02,
     "E_7": 2637.02,
     "F_7": 2793.83,
    "F#7": 2959.96,
    "Gb7": 2959.96,
     "G_7": 3135.96,
    "G#7": 3322.44,
    "Ab7": 3322.44,
     "A_7": 3520.00,
    "A#7": 3729.31,
    "Bb7": 3729.31,
     "B_7": 3951.07,
     "C_8": 4186.01,
    "C#8": 4434.92,
    "Db8": 4434.92,
     "D_8": 4698.64,
    "D#8": 4978.03,
    "Eb8": 4978.03
}

function getNoteFrequenc(key: string) {
    return freqArray[key]
  }
  
  export default getNoteFrequenc;