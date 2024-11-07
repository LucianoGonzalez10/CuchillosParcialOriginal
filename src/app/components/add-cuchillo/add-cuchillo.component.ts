import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Cuchillo } from '../../interface/cuchillo.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuchilloService } from '../../services/cuchillo.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-add-cuchillo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-cuchillo.component.html',
  styleUrl: './add-cuchillo.component.css'
})
export class AddCuchilloComponent {
  @Output()
  emitirCuchillo : EventEmitter<Cuchillo> = new EventEmitter();

  fb = inject(FormBuilder);
  cuchilloServicio = inject(CuchilloService);

  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    tipo: ['', [Validators.required, Validators.minLength(3)]],
    tipoFilo: ['', [Validators.required, Validators.minLength(3)]],
    materialHoja: ['', [Validators.required, Validators.minLength(3)]],
    materialMango: ['', [Validators.required, Validators.minLength(3)]],
    longitudHoja: [0, [Validators.required, Validators.minLength(3)]],
    longitudTotal: [0, [Validators.required, Validators.minLength(3)]],
  })

  agregarCuchillo(){
    if(this.formulario.invalid) return ;

    const cuchillo = this.formulario.getRawValue();
    this.agregarCuchilloDb(cuchillo);
    this.emitirCuchillo.emit(cuchillo);
  }

  agregarCuchilloDb(cuchillo : Cuchillo){
    this.cuchilloServicio.postCuchillos(cuchillo).subscribe({
      next: () =>{
        alert('Cuchillo agregado...');
      },
      error: (e: Error) =>{
        console.log(e.message);
      }
    })
  }
}
