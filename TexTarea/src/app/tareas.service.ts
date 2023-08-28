import { Injectable } from "@angular/core";
import { tareaPendiente } from "./tareaPendiente";

@Injectable ({
    providedIn: 'root'
})
export class tareaService{
    CLAVE_LOCAL_STORAGE = 'tareas_angular'

    constructor(){}

    obtenerTareas(): tareaPendiente[]{
        return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || '[]')
    }

    guardarTareas(tareas: tareaPendiente[]){
        localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas))
    }
}
