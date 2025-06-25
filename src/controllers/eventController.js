const Event = require('../models/Evento');
const EventManager = require('../services/EventManager')

const manager = new EventManager();

const registroEvent = (req,res) => {
    const { nombreEvento, descripcionSala, tiempoInicio, tiempoFin } = req.body;

    if ( !nombreEvento || !descripcionSala || !tiempoInicio || !tiempoFin) {
        return res.status(400).json({ success: false, message: 'Faltas Datos.' });
    }

    const event = new Event(nombreEvento, descripcionSala, tiempoInicio, tiempoFin);
    const result = manager.registrarEvent(event);
    return res.status(result.success ? 201 : 400).json(result);
}

const actualizarEvent = (req,res) => {
    const eventActualizar = req.body;

        if (!eventActualizar.nombreEvento) {
            return res.status(400).json({ success: false, message: 'El nombre del evento es obligatorio para actualizar.'
            });
        }
    const resultado = manager.actualizarEvent(eventActualizar);

    return res.status(resultado.success ? 200 : 404).json(resultado);
}

const eliminarEvent = (req , res ) => {
    const eventName = req.params.nombreEvento;
    const result = manager.cancelarEvent(eventName);
    res.status(result.success ? 200 : 404).json(result);
}

const listarEvent = (req , res) => {
     res.json(manager.listarEventos());
}

const actives = (req , res ) => {
    const { tiempoInicio, tiempoFin } = req.query;
    if (!tiempoInicio || !tiempoFin) {
        return res.status(400).json({ success: false, message: 'La horas se necesitan.' });
    }
    const activeEvents = manager.listarEventosActivo(tiempoInicio, tiempoFin);
    res.json(activeEvents);
}

module.exports = { registroEvent , actualizarEvent , eliminarEvent , listarEvent , actives }