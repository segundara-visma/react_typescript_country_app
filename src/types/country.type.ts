export default interface countryType {
    flag: any;
    name?: nameType;
    region: string;
    population: number;
    languages: any;
    capital: string;
    subregion: string;
    latlng: any[];
}

interface nameType {
    common: string;
    nativeName: any;
}
