export enum SimpdWebThemeName {
  Brand = 'brand',
}

export interface SimpdWebTheme {
  name: SimpdWebThemeName;
  fontFamily: {
    primary: string;
  }
  fontSize: {
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
  }
  color: {
    black: string;
    brand: string;
    s20: string;
    s30: string;
    s40: string;
    s50: string;
    s90: string;
  };
  space: {
    quarterUnit: string;
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  };
  radius: {
    four: string;
    eight: string;
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
  fontFamily: {
    primary: 'Maven Pro'
  },
  fontSize: {
    halfUnit: '.8rem',
    oneUnit: '1.25rem',
    twoUnits: '1.83rem',
  },
  color: {
    black: '#000000',
    brand: '#711b1eff',
    s20: '#1c1c1eff',
    s30: '#2c2c2eff',
    s40: '#454547ff',
    s50: '#8D8D93',
    s90: '#ffffffff',
  },
  space: {
    quarterUnit: '4px',
    halfUnit: '8px',
    oneUnit: '16px',
    twoUnits: '32px',
    threeUnits: '48px',
  },
  radius: {
    four: '4px',
    eight: '8pxs',
  },
  icon: {
    oneUnit: '1.4rem',
    twoUnits: '1.8rem',
    threeUnits: '2.4rem',
  },
  maxWidth: '1400px'
}