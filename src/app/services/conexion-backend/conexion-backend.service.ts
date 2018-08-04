import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionBackendService {

  private readonly URL_LOCAL = 'http://localhost:8080';
  private readonly URL_REMOTE = 'https://server-prototipo.herokuapp.com/';

  private url_utilizar = window.location.href.includes('localhost') ? this.URL_LOCAL : this.URL_REMOTE;

  constructor(private http: HttpClient) { }

  lecturaInformacion(): Observable<any> {
    console.log('Se hizo una llamada al metodo lecturaInformacion');
    console.log('URL Utilizada: ' + this.url_utilizar);
    return this.http.get(this.url_utilizar + '/lecturainformacion', {responseType: 'text'});
  }

  busquedaCoincidencias(): Observable<any> {
    console.log('Se hizo una llamada al metodo busquedaCoincidencias');
    console.log('URL Utilizada: ' + this.url_utilizar);
    return this.http.get(this.url_utilizar + '/busquedacoincidencias', {responseType: 'text'});
  }

  construccionEnsambles(archivo_entrada, opcion_ensamble, archivo_salida): Observable<any> {
    console.log('Se hizo una llamada al metodo construccionEnsambles');
    console.log('URL Utilizada: ' + this.url_utilizar);

    const Params = new HttpParams()
      .append('archivo_entrada', archivo_entrada)
      .append('opcion_ensamble', opcion_ensamble)
      .append('archivo_salida', archivo_salida);

    // AGREGAR LOS PARAMETROS AL GET
    return this.http.get(this.url_utilizar + '/construccionensambles', {
      responseType: 'text',
      params: Params});
  }

  generacionInformes(): Observable<any> {
    console.log('Se hizo una llamada al metodo generacionInformes');
    console.log('URL Utilizada: ' + this.url_utilizar);
    return this.http.get(this.url_utilizar + '/generacioninformes', {responseType: 'text'});
  }
}
