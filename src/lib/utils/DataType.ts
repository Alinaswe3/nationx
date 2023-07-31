export interface Country {
  name: {
    common: string;
    nativeName: {
      eng: {
        common: string;
      };
    };
  };
  tld: Array<string>;
  currencies: object;
  capital: Array<string>;
  region: string;
  subregion: string;
  languages: object;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
