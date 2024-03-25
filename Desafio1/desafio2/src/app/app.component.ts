import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio2';
  hasError = true;
  students = [
    { nombre: 'Juan', approved: false },
    { nombre: 'Samantha', approved: false },
    { nombre: 'Luna', approved: true },
    { nombre: 'Franco', approved: true },
    { nombre: 'Adei', approved: false },
  ];

  //metodo
  alternarError() {
    this.hasError = !this.hasError;
  }
}
