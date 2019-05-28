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
}


