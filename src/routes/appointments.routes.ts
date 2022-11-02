import { Router, Request, Response } from "express"
import { parseISO } from "date-fns"
import AppointmentsRepository from "../repository/AppointmentsRepository"
import CreateAppointmentService from "../services/CreateAppointmentService"

const appointmentsRoutes = Router()

const appointmentsRepository = new AppointmentsRepository()

appointmentsRoutes.get("/", (req: Request, res: Response) => {
  const appointments = appointmentsRepository.all()
  return res.json(appointments)
})

appointmentsRoutes.post("/", (req: Request, res: Response) => {
  try{
    const { provider, date } = req.body

    const parsedDate = parseISO(date)

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
  )

    const appointment = createAppointment.execute({ provider, date: parsedDate })

    return res.json({
      message: "Appointment Created!",
      data: appointment,
    })

  }catch(err) {
    return res.status(400).json({ error: err})
  }
})

export default appointmentsRoutes
