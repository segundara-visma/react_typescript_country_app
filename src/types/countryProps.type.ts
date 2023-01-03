export default interface ListingProps {
    countries: any[];
    sort?: (item: string) => void;
    icon?: string;
}