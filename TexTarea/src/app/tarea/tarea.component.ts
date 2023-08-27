import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  title: string = 'Lista de Tareas';

  tareas = [
    { position: ''},
  ];

  model:any = {};

  addTareas():void{
if (this.model.position.trim() !=='') {
  this.tareas.push({position: this.model.position});
  this.model.position = '';  
}
  }

  deleteTareas():void{

  }

  editTareas(): void{

  }

  updateTareas():void{

  }


}
