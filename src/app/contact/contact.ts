export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  postalCode: string;


  constructor(id?: number, firstName?: string, lastName?: string, phone?: string,
              email?: string, street?: string, city?: string, postalCode?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
  }

  /*public setAddress(street, postalCode, city) {
     this.address.street = street;
     this.address.city = city;
     this.address.postalCode = postalCode;
   }*/
}

/*export interface IAddress {
  street?: string;
  postalCode?: string;
  city?: string;
}*/
