import { TestBed, inject } from '@angular/core/testing';

import { ConexionDialogService } from './conexion-dialog.service';

describe('ConexionDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConexionDialogService]
    });
  });

  it('should be created', inject([ConexionDialogService], (service: ConexionDialogService) => {
    expect(service).toBeTruthy();
  }));
});
