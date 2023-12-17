export enum SimpdWebThemeName {
  Brand = 'brand',
}

export interface SimpdWebTheme {
  name: SimpdWebThemeName;
  breakpoints: {
    laptop: string;
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
    quarterUnit: string;
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