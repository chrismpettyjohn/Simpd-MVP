export enum SimpdWebThemeName {
  Brand = 'brand',
}

export interface SimpdWebTheme {
  name: SimpdWebThemeName;
  breakpoints: {
    phone: string;
    tablet: string;
    desktop: string;
  };
  color: {
    black: string;
    brand: string;
    s20: string;
    s30: string;
    s40: string;
    s50: string;
    s60: string;
    s90: string;
  };
  fontFamily: {
    primary: string;
  }
  fontSize: {
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
  }
  space: {
    quarterUnit: string;
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  };
  radius: {
    oneUnit: string;
    twoUnits: string;
    round: string;
  };
  icon: {
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  }
  maxWidth: string;
}

export const simpdWebTheme: SimpdWebTheme = {
  name: SimpdWebThemeName.Brand,
  breakpoints: {
    phone: '400px',
    tablet: '800px',
    desktop: '1400px',
  },
  color: {
    black: '#000000',
    brand: '#711b1eff',
    s20: '#1c1c1eff',
    s30: '#2c2c2eff',
    s40: '#454547ff',
    s50: '#8D8D93',
    s60: '#F6DEDE',
    s90: '#ffffffff',
  },
  fontFamily: {
    primary: `'Montserrat Alternates', sans-serif`
  },
  fontSize: {
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
    oneUnit: '4px',
    twoUnits: '8px',
    round: '100%',
  },
  icon: {
    oneUnit: '1.4rem',
    twoUnits: '1.8rem',
    threeUnits: '2.4rem',
  },
  maxWidth: '1500px'
}