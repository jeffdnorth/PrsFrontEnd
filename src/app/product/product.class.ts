import { Vendor } from "../vendor/vendor.class";

export class Product {
    id: number = 0;
    partNbr: string = '';
    name: string = '';
    price: number = 0;
    unit: string = 'per';
    photopath: string = '';

    vendorId: number = 0;
    
    vendor!: Vendor
    
    //vendor: Vendor | null = null;

}
