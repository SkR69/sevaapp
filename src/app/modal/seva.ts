export interface SevaDetails {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string | number;
    sevaList?: Seva[];
    nakshatra: string;
    gothra: string;
    rashi: string;
    address1: string;
    address2: string;
    state: string;
    city: string;
    pincode: string;
}

export interface Seva{
    name: string;
    calendar: string;
    performDate: Date | string;
    maasa: string;
    paksha: string;
    tithi: string;
    bookingDate: Date | string;
    quantity: number;
    amount: number;
    status: string;
}