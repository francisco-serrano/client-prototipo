import { TestBed, inject } from '@angular/core/testing';

import { ConexionBackendService } from './conexion-backend.service';

describe('ConexionBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionBackendService]
    });
  });

  it('should be created', inject([ConexionBackendService], (service: ConexionBackendService) => {
    expect(service).toBeTruthy();
  }));
});
