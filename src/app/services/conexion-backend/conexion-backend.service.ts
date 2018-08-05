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

  constructor(private http: HttpClient) {}

  lecturaInformacion(readsIn1, readsIn2, readsOut1, readsOut2): Observable<any> {
    console.log('Se hizo una llamada al metodo lecturaInformacion');
    console.log('URL Utilizada: ' + this.url_utilizar);

    const Params = new HttpParams()
      .append('reads_in_1', readsIn1)
      .append('reads_in_2', readsIn2)
      .append('reads_out_1', readsOut1)
      .append('reads_out_2', readsOut2);

    return this.http.get(this.url_utilizar + '/lecturainformacion', {
      responseType: 'text',
      params: Params
    });
  }

  busquedaCoincidencias(archivoReferencia, genomaAnalizar, archivoSalida): Observable<any> {
    console.log('Se hizo una llamada al metodo busquedaCoincidencias');
    console.log('URL Utilizada: ' + this.url_utilizar);

    const Params = new HttpParams()
      .append('archivo_referencia', archivoReferencia)
      .append('genoma_analizar', genomaAnalizar)
      .append('archivo_salida', archivoSalida);

    return this.http.get(this.url_utilizar + '/busquedacoincidencias', {
      responseType: 'text',
      params: Params
    });
  }

  construccionEnsambles(archivoEntrada, opcionEnsamble, archivoSalida): Observable<any> {
    console.log('Se hizo una llamada al metodo construccionEnsambles');
    console.log('URL Utilizada: ' + this.url_utilizar);

    const Params = new HttpParams()
      .append('archivo_entrada', archivoEntrada)
      .append('opcion_ensamble', opcionEnsamble)
      .append('archivo_salida', archivoSalida);

    return this.http.get(this.url_utilizar + '/construccionensambles', {
      responseType: 'text',
      params: Params
    });
  }

  generacionInformes(archivo1, archivo2, archivo3): Observable<any> {
    console.log('Se hizo una llamada al metodo generacionInformes');
    console.log('URL Utilizada: ' + this.url_utilizar);

    const Params = new HttpParams()
      .append('archivo_1', archivo1)
      .append('archivo_2', archivo2)
      .append('archivo_3', archivo3);

    return this.http.get(this.url_utilizar + '/generacioninformes', {
      responseType: 'text',
      params: Params
    });
  }
}
