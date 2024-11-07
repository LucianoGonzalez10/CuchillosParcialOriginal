import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuchillo } from '../interface/cuchillo.interface';

@Injectable({
  providedIn: 'root'
})
export class CuchilloService {

  constructor(private http : HttpClient) { }

  urlBase = 'http://localhost:3000/cuchillos';

  getCuchillos():Observable<Cuchillo[]>{
    return this.http.get<Cuchillo[]>(this.urlBase);
  }

  postCuchillos(cuchillo : Cuchillo):Observable<Cuchillo>{
    return this.http.post<Cuchillo>(this.urlBase, cuchillo);
  }
  
  deleteCuchillo(id: number | undefined):Observable<Cuchillo>{
    return this.http.delete<Cuchillo>(`${this.urlBase}/${id}`);
  }

  putCuchillo(cuchillo : Cuchillo, id: string):Observable<Cuchillo>{
    return this.http.put<Cuchillo>(`${this.urlBase}/${id}`, cuchillo);
  }
}
