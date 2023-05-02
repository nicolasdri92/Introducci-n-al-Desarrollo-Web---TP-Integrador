import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL_API: string = 'http://localhost:3000/api';

  constructor(private _http: HttpService) {}

  getCarreras() {
    return this._http.get(this.URL_API + '/carreras');
  }

  getCarrera(id: string) {
    return this._http.get(this.URL_API + `/carrera/${id}`);
  }

  addCarrera(body: any) {
    return this._http.post(this.URL_API + '/carrera', body);
  }

  editCarrera(id: string, body: any) {
    return this._http.put(this.URL_API + `/carrera/${id}`, body);
  }

  deleteCarrera(id: string) {
    return this._http.delete(this.URL_API + `/carrera/${id}`);
  }

  getMaterias(params?: any) {
    return this._http.get(this.URL_API + '/materias', params);
  }

  getMateria(id: string) {
    return this._http.get(this.URL_API + `/materia/${id}`);
  }

  addMateria(body: any) {
    return this._http.post(this.URL_API + '/materia', body);
  }

  editMateria(id: string, body: any) {
    return this._http.put(this.URL_API + `/materia/${id}`, body);
  }

  deleteMateria(id: string) {
    return this._http.delete(this.URL_API + `/materia/${id}`);
  }

  getEstudiantes(params?: any) {
    return this._http.get(this.URL_API + '/estudiantes', params);
  }

  getEstudiante(id: string) {
    return this._http.get(this.URL_API + `/estudiante/${id}`);
  }

  addEstudiante(body: any) {
    return this._http.post(this.URL_API + '/estudiante', body);
  }

  editEstudiante(id: string, body: any) {
    return this._http.put(this.URL_API + `/estudiante/${id}`, body);
  }

  deleteEstudiante(id: string) {
    return this._http.delete(this.URL_API + `/estudiante/${id}`);
  }
}
