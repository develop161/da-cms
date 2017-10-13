export interface IPatient{
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  dateOfBirth: string;
  visits: any[];
  updatedAt: string;
  createdAt: string;
  imageUrl: string;
}



// currently not used
export class Patient implements IPatient{

  constructor(
    public _id: string,
    public firstName: string,
    public lastName: string,
    public address: string,
    public dateOfBirth: string,
    public visits: any[],
    public updatedAt: string,
    public createdAt: string,
    public imageUrl: string,
  ){}

  calculateAge(): number{
      return
  }
}

