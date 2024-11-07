import { Component, inject, OnInit, Output } from '@angular/core';
import { Cuchillo } from '../../interface/cuchillo.interface';
import { CuchilloService } from '../../services/cuchillo.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-cuchillo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-cuchillo.component.html',
  styleUrl: './list-cuchillo.component.css'
})
export class ListCuchilloComponent implements OnInit{
  ngOnInit(): void {
      this.listarCuchillos();
  }
  
  cuchillosService = inject(CuchilloService);
  listaCuchillos : Cuchillo[] = [];

  agregarCuchilloA(cuchillo : Cuchillo){
    this.listaCuchillos.push(cuchillo);
  }

  listarCuchillos(){
    this.cuchillosService.getCuchillos().subscribe({
      next: (cuchillo : Cuchillo[]) =>{
        this.listaCuchillos = cuchillo;
      },
      error: (e: Error) =>{
        console.log(e.message);
      }
    })
  }

  eliminarCuchillo(id : number | undefined  ){
    this.cuchillosService.deleteCuchillo(id).subscribe({
      next:() =>{
        this.listarCuchillos();
      },
      error: (e: Error) =>{
        console.log(e.message)
      }
    })
  }
}
