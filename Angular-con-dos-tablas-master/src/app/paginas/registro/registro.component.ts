import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  element = false;

  constructor(
    private readonly router: Router
  ) { }

  showData() {
    this.element = true;
  }

  hideData() {
    this.element = false;
  }

  IrRegistro(): void {

  }

}
