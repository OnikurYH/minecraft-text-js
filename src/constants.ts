export interface CodesSettings {
  [code: string]: {
    inline: string;
    className: string;
  };
}

export const COLOR_CODES: CodesSettings = {
  0: {
    inline: '#000000',
    className: '',
  },
  1: {
    inline: '#0000AA',
    className: '',
  },
  2: {
    inline: '#00AA00',
    className: '',
  },
  3: {
    inline: '#00AAAA',
    className: '',
  },
  4: {
    inline: '#AA0000',
    className: '',
  },
  5: {
    inline: '#AA00AA',
    className: '',
  },
  6: {
    inline: '#FFAA00',
    className: '',
  },
  7: {
    inline: '#AAAAAA',
    className: '',
  },
  8: {
    inline: '#555555',
    className: '',
  },
  9: {
    inline: '#5555FF',
    className: '',
  },
  a: {
    inline: '#55FF55',
    className: '',
  },
  b: {
    inline: '#55FFFF',
    className: '',
  },
  c: {
    inline: '#FF5555',
    className: '',
  },
  d: {
    inline: '#FF55FF',
    className: '',
  },
  e: {
    inline: '#FFFF55',
    className: '',
  },
  f: {
    inline: '#FFFFFF',
    className: '',
  },
};

export const STYLE_CODES: CodesSettings = {
  l: {
    inline: 'font-weight: bold',
    className: '',
  },
  m: {
    inline: 'text-decoration: line-through',
    className: '',
  },
  n: {
    inline: 'text-decoration: underline',
    className: '',
  },
  o: {
    inline: 'font-style: italic',
    className: '',
  },
};
