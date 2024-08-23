import _chisato from './chisato.png';
import _takina from './takina.png';
// import _chisaoAudio from './chisato.mp3';
// import _takinaAudio from './takina.mp3';
export interface SakanaWidgetState {
  /**
   * inertia
   */
  i: number;
  /**
   * stickiness
   */
  s: number;
  /**
   * decay
   */
  d: number;
  /**
   * angle
   */
  r: number;
  /**
   * height
   */
  y: number;
  /**
   * vertical speed
   */
  t: number;
  /**
   * horizontal speed
   */
  w: number;
}

export interface SakanaWidgetCharacter {
  image: string;
  audio: string
  initialState: SakanaWidgetState;
}

const chisato: SakanaWidgetCharacter = {
  image: _chisato,
  initialState: {
    i: 0.08,
    s: 0.1,
    d: 0.99,
    r: 1,
    y: 40,
    t: 0,
    w: 0,
  },
  // audio: '_takinaAudio',
  audio: 'https://od.lk/s/NjJfNzUzNDI2MjZf/chinanago.mp3',
};

const takina: SakanaWidgetCharacter = {
  image: _takina,
  initialState: {
    i: 0.08,
    s: 0.1,
    d: 0.988,
    r: 12,
    y: 2,
    t: 0,
    w: 0,
  },
  // audio: '_takinaAudio',
  audio: 'https://od.lk/s/NjJfNzUzNDI2MjVf/sakana.mp3'
};

export default {
  chisato,
  takina,
};
