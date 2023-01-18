import countryType from './country.type'
export default interface ListingProps {
    countries: countryType[];
    sort?: (item: string) => void;
    icon?: string;
}