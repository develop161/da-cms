export interface IPatient{
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


/*


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

}


*/
