import { IPatient } from '../patients/patient';

export class Patient {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public dateOfBirth: string,
    public _id?: string,
  ){}
}
