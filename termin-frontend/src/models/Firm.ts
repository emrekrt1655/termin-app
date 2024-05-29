export interface Firm {
    id: string;
    name: string;
    email: string;
    bookingRequests: BookingRequest[];
  }
  
  export interface BookingRequest {
    id: string;
    customerName: string;
    date: string;
    details: string;
  }