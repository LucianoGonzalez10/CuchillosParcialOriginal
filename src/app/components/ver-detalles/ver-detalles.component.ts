import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ver-detalles-cuchillo',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesCuchilloComponent implements OnInit {
  cuchillo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.obtenerCuchillo(id);
  }

  obtenerCuchillo(id: string | null) {
    this.http.get(`http://localhost:3000/cuchillos/${id}`).subscribe(
      (data) => {
        this.cuchillo = data;
      },
      (error) => {
        console.error('Error al obtener el cuchillo:', error);
      }
    );
  }
}
