export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  streetAddress: string;
  city: string;
  postalCode: string;


  constructor(id?: number, firstName?: string, lastName?: string, phone?: string,
              email?: string, street?: string, city?: string, postalCode?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phone;
    this.emailAddress = email;
    this.streetAddress = street;
    this.city = city;
    this.postalCode = postalCode;
  }
}
