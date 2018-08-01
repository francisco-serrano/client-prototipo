import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionBackendService {

  private readonly URL_LOCAL = 'http://localhost:8080';
  private readonly URL_REMOTE = 'https://server-prototipo.herokuapp.com/';

  private url_utilizar = window.location.protocol === 'https:' ? this.URL_REMOTE : this.URL_LOCAL;

  constructor(private http: HttpClient) { }

  lecturaInformacion(): Observable<any> {
    console.log('Se hizo una llamada al metodo lecturaInformacion');
    console.log('URL Utilizada: ' + this.url_utilizar);
    return this.http.get(this.url_utilizar + '/lecturainformacion', {responseType: 'text'});
  }

  busquedaCoincidencias(): Observable<any> {
    console.log('Se hizo una llamada al metodo busquedaCoincidencias');
    return this.http.get(this.url_utilizar + '/busquedacoincidencias', {responseType: 'text'});
  }

  construccionEnsambles(): Observable<any> {
    console.log('Se hizo una llamada al metodo construccionEnsambles');
    return this.http.get(this.url_utilizar + '/construccionensambles', {responseType: 'text'});
  }

  generacionInformes(): Observable<any> {
    console.log('Se hizo una llamada al metodo generacionInformes');
    return this.http.get(this.url_utilizar + '/generacioninformes', {responseType: 'text'});
  }
}
