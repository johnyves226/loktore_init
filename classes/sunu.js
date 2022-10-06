class SunuFds{
    constructor(id_fds_sunu, LiasseName, Company,drog=new drogs(),exam=new Exam(),professionalActe=new ProfessionalActe(),insuredName, patientName, paitentBirthDay, patientSexe, assuedNumber, repaymentRate, deseaseInfo,deseaseBegining, totalPrescription, PrescriptionModeratorTicket, prescriptionTotalInsurance, totalExam, ExamModeratorTicket, ExamTotalInsurance){
        this.id_fds_sunu=id_fds_sunu
        this.LiasseName=LiasseName
        this.Company=Company
        this.insuredName=insuredName
        this.patientName=patientName
        this.paitentBirthDay=paitentBirthDay
        this.patientSexe=patientSexe
        this.assuedNumber=assuedNumber
        this.repaymentRate=repaymentRate
        this.deseaseInfo=deseaseInfo
        this.deseaseBegining=deseaseBegining
        this.totalPrescription=totalPrescription
        this.PrescriptionModeratorTicket=PrescriptionModeratorTicket
        this.prescriptionTotalInsurance=prescriptionTotalInsurance
        this.totalExam=totalExam
        this.ExamModeratorTicket=ExamModeratorTicket
        this.ExamTotalInsurance=ExamTotalInsurance
        this.drogs=drog
        this.exam=exam
        this.professionalActe=professionalActe
    }

}


class drogs{
     constructor(idDrogs,drogName,Posologie,Quantity,Price){
        this.idDrogs=idDrogs
        this.drogName=drogName
        this.Posologie=Posologie
        this.Quantity=Quantity
        this.Price=Price

     }
    }
    
 class  Exam{ constructor(idExam,ActeNature,Codification,Price){
       
    this.idExam=idExam
    this.ActeNature=ActeNature
    this.Codification=Codification
    this.Price=Price
    }
    

}

class ProfessionalActe { constructor(idProfessionalActe,date,acteName,acteCode,actePrice,acteticket,remainderToPaid){
    this.idProfessionalActe=idProfessionalActe
     this.date=date
     this.acteName=acteName
     this.acteCode=acteCode
     this.actePrice=actePrice
     this.acteticket=acteticket
     this.remainderToPaid=remainderToPaid
}
   
}


module.exports = { SunuFds,drogs,Exam,ProfessionalActe };