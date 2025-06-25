const validacionEvent = require('../utils/validaciones')
const { events } = require ('../data/storage');
const typeStatus = require('../common/status');

class EventManager {
    registrarEvent(eventNuevo){
        try {
            const eventosConNuevo = [...events, eventNuevo];

            const revision = validacionEvent.validacionSala(eventosConNuevo);

            if(!revision.valid){
                return {success:false , message: revision.message}
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
            //events.splice(index,1);
            events[index].status = typeStatus.inactive;
            return { success:true , message: 'Eliminacion exitosa de evento'};


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

    listarEventosActivo(tiempoInicios , tiempoFins){
        const inicio = tiempoInicios;
        const fin = tiempoFins;
        return events.filter(event => event.tiempoInicio < fin && event.tiempoFin > inicio  && event.status === 1);
    }

    listarEventos(){
       return events.filter(event => event.status === 1);
    }
}

module.exports =  EventManager;