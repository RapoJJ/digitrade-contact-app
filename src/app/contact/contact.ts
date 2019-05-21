export class Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: IAddress;

  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, address?: IAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}

interface IAddress {
  street: string;
  postalCode: string;
  city: string;
}
