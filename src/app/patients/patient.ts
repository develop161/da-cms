export interface IPatient {
  firstName: string;
  lastName: string;
  address: string;
  dateOfBirth: string;
  _id?: string;
  visits?: any[];
  updatedAt?: string;
  createdAt?: string;
  imageUrl?: string;
}
