import { Component, OnInit } from '@angular/core';
import { tareaService } from '../tareas.service';
import { tareaPendiente } from '../tareaPendiente';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})


export class TareaComponent implements OnInit {
  tareaEditando: number | null = null;
  tareaPendiente: number;
  tareaRealizada: number;
  tareas: any[];
  nombreTarea = '';
  
  constructor( private tareaService: tareaService ){
    this.tareas = [];
this.tareaPendiente = this.tareas.filter(iten => !iten.terminada).length;
this.tareaRealizada = this.tareas.filter(iten => iten.terminada).length;
}
   

  guardarTareas(){
    const nuevaTarea = new tareaPendiente(this.nombreTarea);
    this.tareas.push(nuevaTarea);
    this.tareaService.guardarTareas(this.tareas);
    this.obtenerTareas();
    this.nombreTarea = '';
  }

ngOnInit(){
  this.obtenerTareas();
}

obtenerTareas(){
  this.tareas = this.tareaService.obtenerTareas();

  this.tareaPendiente = this.tareas.filter(iten => !iten.terminada).length;
  this.tareaRealizada = this.tareas.filter(iten => iten.terminada).length;
}

cambiarEstadodeTarea(){
  this.tareaService.guardarTareas(this.tareas)

  this.tareaPendiente = this.tareas.filter(iten => !iten.terminada).length;
  this.tareaRealizada = this.tareas.filter(iten => iten.terminada).length;
}

eliminarTarea(i: number){
const confirmar = confirm('Quieres eliminar la tarea');
if (confirmar) {
  this.tareas.splice(i, 1);
  this.tareaService.guardarTareas(this.tareas)
}
}

editarTareas(i: number){
  this.tareaEditando = i;
}

guardarEdicion(){
 this.tareaService.guardarTareas(this.tareas);
 this.tareaEditando = null;
}

cancelarEdicion(){
  this.tareaEditando = null;
}

}