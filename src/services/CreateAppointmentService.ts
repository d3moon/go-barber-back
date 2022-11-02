import { startOfHour } from 'date-fns'
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repository/AppointmentsRepository'

/**
 * [x]Separando regras de negócios de transformação de dados na rota e no service
 * [x]Recebimento das informações
 * [x]Tratativa de erros e exceções
 * [x]Acesso ao repositório
 */

//SOLID

//Single Respobsability Principle
//Dependency Invertion Principle

interface Request {
  provider: string,
  date: Date
}

class CreateAppointmentService {

  private appointmentsRepository: AppointmentsRepository

  constructor(appointmentsRepository: AppointmentsRepository){
    this.appointmentsRepository = appointmentsRepository
  }

  public execute({ provider, date}: Request): Appointment {
    const appointmentDate = startOfHour(date)

    const findAppointmentsInSameDate = this.appointmentsRepository.findByDate(date)

    if(findAppointmentsInSameDate) throw Error('This appointments is already booked')

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate
      })

      return appointment
    }
}

export default CreateAppointmentService
