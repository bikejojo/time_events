class Validaciones {

    /**
    * @param {Array} data - Lista de eventos
    */
    static validacionSala(data){
        console.log(data)
        if(data.length > 0){
             for (let i = 0; i < data.length; i++) {
                for (let j = i + 1; j < data.length; j++) {
                    if (data[i].descripcionSala === data[j].descripcionSala) {
                       const tiempoValido = this.validacionTiempo(data[i], data[j]);
                       console.log(tiempoValido)
                        if (!tiempoValido.valid) {
                            return tiempoValido; // Si hay conflicto, retornamos
                        }
                    }
                }
            }
        }
        return { valid: true, message: 'No hay conflictos de horarios en las salas.' };
    }

    static validacionTiempo(event1 , event2){
         if(event1.tiempoInicio < event2.tiempoFin && event2.tiempoInicio < event1.tiempoFin ){
            return {
                valid:false,
                message:`Conflicto de eventos ${event1.nombreEvento} con ${event2.nombreEvento}`
            };
        }
        return { valid: true };
    }
}

module.exports  = Validaciones;