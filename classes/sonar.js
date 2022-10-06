class SonarFds {
    constructor(Id_fds_sonar,insuredName,insuredSurname,PoliceNumber,insuredNumber,insureAge,assignmentCode,ordinance= new Ordinance(),date,doctorName,totalOrdinance,totalInsurance
    ) {
        this.Id_fds_sonar=Id_fds_sonar;
        this.insuredName=insuredName;
        this.insuredSurename=insuredSurname;
        this.PoliceNumber=PoliceNumber;
        this.insuredNumber=insuredNumber;
        this.insureAge=insureAge;
        this.assignmentCode=assignmentCode;
        this.ordinance=ordinance;
        this.date=date;
        this.doctorName=doctorName;
        this.totalOrdinance=totalOrdinance;
        this.totalInsurance=totalInsurance;
      
    }
  }



 class Ordinance{ constructor(idlabel,label,dosage,price,insurancePortion){
    this.idlabel=idlabel;
    this.label=label;
    this.dosage=dosage;
    this.price=price;
    this.insurancePortion=insurancePortion;

 }

}

module.exports = { SonarFds,Ordinance };
