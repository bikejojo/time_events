const typeStatus = require("../common/status");

class Evento {
    constructor(nombreEvento,descripcionSala,tiempoInicio,tiempoFin){
        this.nombreEvento = nombreEvento
        this.descripcionSala = descripcionSala;
        this.tiempoInicio = tiempoInicio;
        this.tiempoFin = tiempoFin;
        this.status = typeStatus.active;
    }
}

module.exports = Evento