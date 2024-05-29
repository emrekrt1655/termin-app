export interface User {
    id: string;
    photo: string;
    name: string;
    surname: string;
    age: number;
    carModel: string;
    userNumber: string;
    appointments: Appointment[];
    favoriteFirms: Firm[];
  }
  
  export interface Appointment {
    id: string;
    date: string;
    details: string;
  }
  
  export interface Firm {
    id: string;
    name: string;
  }