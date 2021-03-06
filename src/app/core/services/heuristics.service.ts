import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {BaseService} from './base.service';

@Injectable()
export class HeuristicService extends BaseService {
  userId: any;

  constructor(
    private http: HttpClient,
  ) {
    super(http);
  }

  searchHeuristics() {
    return this.getAll('Heuristics');
  }

  getNielsen() {
    return this.getAll('Heuristics/nielsen');
  }

  createHeuristic(heuristic: any) {
    return this.insert('Heuristics', heuristic);
  }

  updateHeuristic(heuristic: any) {
    return this.update('Heuristics', heuristic.Id, heuristic);
  }

  deleteHeuristic(id: number) {
    return this.delete('Heuristics', id);
  }

}
