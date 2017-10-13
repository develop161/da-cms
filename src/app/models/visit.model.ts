export class Visit {
  constructor(
    public reasonOfVisit: string,
    public consult: string,
    public patient: string,
    public dateOfVisit?: string,
    public prescribedMedication?: any[]
  ) {}
}
