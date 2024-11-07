import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Cuchillo } from '../../interface/cuchillo.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuchilloService } from '../../services/cuchillo.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-cuchillo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-cuchillo.component.html',
  styleUrl: './update-cuchillo.component.css'
})
export class UpdateCuchilloComponent {
  @Output()
  emitirCuchillo : EventEmitter<Cuchillo> = new EventEmitter();

  fb = inject(FormBuilder);
  cuchilloServicio = inject(CuchilloService);
  route = inject(ActivatedRoute);

  cuchilloId: string | null = null;
  
  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    tipo: ['', [Validators.required, Validators.minLength(3)]],
    tipoFilo: ['', [Validators.required, Validators.minLength(3)]],
    materialHoja: ['', [Validators.required, Validators.minLength(3)]],
    materialMango: ['', [Validators.required, Validators.minLength(3)]],
    longitudHoja: [0, [Validators.required, Validators.minLength(3)]],
    longitudTotal: [0, [Validators.required, Validators.minLength(3)]]
  })

  constructor(){
    this.cuchilloId = this.route.snapshot.paramMap.get('id');
  }

  actualizarCuchillo(){
    if(this.formulario.invalid){ return ;}

    const cuchillo = this.formulario.getRawValue();
    if(this.cuchilloId){
      this.actualizarCuchilloDb(cuchillo, this.cuchilloId);
    }
  }

  actualizarCuchilloDb(cuchillo : Cuchillo, id: string){
    this.cuchilloServicio.putCuchillo(cuchillo, id).subscribe({
      next:(cuchillo : Cuchillo) =>{
        console.log(cuchillo);
      },
      error: (e : Error) =>{
        console.log(e.message);
      }
    })
  }
}
