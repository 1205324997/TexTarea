import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTareasComponent } from './lista-de-tareas.component';

describe('ListaDeTareasComponent', () => {
  let component: ListaDeTareasComponent;
  let fixture: ComponentFixture<ListaDeTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeTareasComponent]
    });
    fixture = TestBed.createComponent(ListaDeTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
