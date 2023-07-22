import { Component } from '@angular/core';
import { Tarea } from '../intefaz/tareainterfaz';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.css']
})
export class ListaDeTareasComponent {
  tarea: Tarea[] = [];
  nuevaTarea: string = '';
  tareaPendientes: Tarea[] = [];
  tareaCompletadas: Tarea[] = [];
  errorAgregarTarea: boolean = false;

  ngOnInit() {
    this.cargarLocalStorage();
    this.actualizarListasTareas();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      const newTask: Tarea = { titulo: this.nuevaTarea.trim(), completed: false };
      this.tarea.push(newTask);
      this.guardarLocalStorage();
      this.actualizarListasTareas();
      this.nuevaTarea = '';
      this.errorAgregarTarea = false;
    } else {
      this.errorAgregarTarea = true;
    }
  }

  cambioTarea(task: Tarea) {
    this.guardarLocalStorage();
    this.actualizarListasTareas();
  }

  borrarTarea(task: Tarea) {
    const index = this.tarea.indexOf(task);
    if (index !== -1) {
      this.tarea.splice(index, 1);
      this.guardarLocalStorage();
      this.actualizarListasTareas();
    }
  }

  guardarLocalStorage() {
    localStorage.setItem('tarea', JSON.stringify(this.tarea));
  }

  cargarLocalStorage() {
    const guardaTarea = localStorage.getItem('tarea');
    if (guardaTarea) {
      this.tarea = JSON.parse(guardaTarea);
    }
  }

  actualizarListasTareas() {
    this.tareaPendientes = this.tarea.filter((task) => !task.completed);
    this.tareaCompletadas = this.tarea.filter((task) => task.completed);
  }
}