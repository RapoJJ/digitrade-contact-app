export class Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: IAddress;

  constructor(firstName?: string, lastName?: string, phone?: string, email?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = {};
  }
  public setAddress(street, postalCode, city) {
    this.address.street = street;
    this.address.city = city;
    this.address.postalCode = postalCode;
  }
}

interface IAddress {
  street?: string;
  postalCode?: string;
  city?: string;
}
