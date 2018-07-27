import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionBackendService {

  private readonly URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  prueba(): Observable<any> {
    console.log('Se hizo una llamada al método hello del servicio');
    return this.http.get(this.URL + '/', {responseType: 'text'});
  }

  lecturaInformacion(): Observable<any> {
    console.log('Se hizo una llamada al metodo lecturaInformacion');
    return this.http.get(this.URL + '/lecturainformacion', {responseType: 'text'});
  }

  busquedaCoincidencias(): Observable<any> {
    console.log('Se hizo una llamada al metodo busquedaCoincidencias');
    return this.http.get(this.URL + '/busquedacoincidencias', {responseType: 'text'});
  }

  construccionEnsambles(): Observable<any> {
    console.log('Se hizo una llamada al metodo construccionEnsambles');
    return this.http.get(this.URL + '/construccionensambles', {responseType: 'text'});
  }

  generacionInformes(): Observable<any> {
    console.log('Se hizo una llamada al metodo generacionInformes');
    return this.http.get(this.URL + '/generacioninformes', {responseType: 'text'});
  }
}
