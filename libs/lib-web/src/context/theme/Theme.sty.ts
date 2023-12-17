import { SimpdWebTheme, SimpdWebThemeName } from "context/theme/Theme.types";


export const simpdWebTheme: SimpdWebTheme = {
  name: SimpdWebThemeName.Brand,
  breakpoints: {
    laptop: '1200px',
  },
  color: {
    black: '#000000',
    brand: '#CC0048',
    s20: '#1c1c1eff',
    s30: '#2c2c2eff',
    s40: 'linear-gradient(178deg, rgba(203, 188, 188, 0.4) 0.2%, rgba(189, 171, 171, 0.1) 99.37%)',
    s50: '#8D8D93',
    s60: '#F6DEDE',
    s90: '#ffffffff',
  },
  fontFamily: {
    primary: `'Montserrat Alternates', sans-serif`
  },
  fontSize: {
    quarterUnit: '.4rem',
    halfUnit: '.8rem',
    oneUnit: '1.25rem',
    twoUnits: '1.83rem',
  },
  space: {
    quarterUnit: '4px',
    halfUnit: '8px',
    oneUnit: '16px',
    twoUnits: '32px',
    threeUnits: '48px',
  },
  radius: {
    oneUnit: '8px',
    twoUnits: '14px',
    round: '100%',
  },
  icon: {
    oneUnit: '1.4rem',
    twoUnits: '1.8rem',
    threeUnits: '2.4rem',
  },
  maxWidth: '1200px'
}