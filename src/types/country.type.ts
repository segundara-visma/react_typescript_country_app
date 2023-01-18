export default interface countryType {
    flag: any;
    name?: nameType;
    region: string;
    population: number;
    languages: {};
    capital: string;
    subregion: string;
    latlng: number[];
}

interface nameType {
    common: string;
    nativeName: any;
}
