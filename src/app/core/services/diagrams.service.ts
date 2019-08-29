import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class DiagramsService extends BaseService {
  userId: any;

  constructor(private http: HttpClient) {
    super(http);
  }

  searchDiagrams() {
    return this.getAll('Diagrams');
  }

  getDiagramsByVersionId(id) {
    return this.get('Diagrams', id);
  }

  getTableDiagramByVersionId(id) {
    return this.get('Diagrams/table', id);
  }
}
