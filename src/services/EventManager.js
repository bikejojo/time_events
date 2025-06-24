const validacionEvent = require('../utils/validaciones')
const { events } = require ('../data/storage')

class EventManager {
    registrarEvent(eventNuevo){
        try {
            const revision = events.some(event => validacionEvent.validacionSala(event,eventNuevo));
            if(revision){
                return {success:false , message:'El evento a registrar choca con otro evento previamente registrado'}
            }

            events.push(eventNuevo);
            return { success:true , message: 'Registro exitoso de evento'};

        } catch(err){
            console.log('Fallas en la funcion de registrar Eventos y son:' + err.message);
            return {
                success:false,
                message:'Fallas en la funcion de registrar Eventos y son:' + err.message
            }
        }
    }

    cancelarEvent(eventName){
        try {
            const cleanString = str => str.trim().toLowerCase();

            const index = events.findIndex(event => cleanString(event.nombreEvento) === cleanString(eventName) )
            if(index === -1 ){
                return {
                    success: false , message:'Fallas al cancelar.'
                }
            }
            events.splice(index,1);
        }catch(err){
            console.log('Error en la funcion CancEven y son: ' + err.message);
            return {
                success:false,
                message:'Error en la funcion CancEven y son: ' + err.message
            }
        }
    }

    actualizarEvent(eventActualizar){
        try {
            const cleanString = str => str.trim().toLowerCase();
            const index = events.findIndex(event => cleanString(event.nombreEvento) === cleanString(eventActualizar.nombreEvento) )

            if (index === -1) {
                return {
                    success: false,
                    message: 'Evento no encontrado.'
                };
            }

            events[index] = { ...events[index],...eventActualizar}

            return {
                success: true,
                message: 'Evento actualizado correctamente.'
            };

        }catch(err){
            console.log('Error en la funcion ActEven y son: ' + err.message);
            return {
                success:false,
                message:'Error en la funcion ActEven y son: ' + err.message
            }
        }
    }

    listarEvents(){
        try {

        }catch(err){
            console.log('Error en la funcion ListEven y son: ' + err.message);
            return {
                success:false,
                message:'Error en la funcion ListEven y son: ' + err.message
            }
        }
    }
}

module.exports =  EventManager;