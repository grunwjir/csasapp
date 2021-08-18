import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Branches} from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  fetchBranches(queryText: string, pageNumber: number = 0, pageSize: number = 4): Observable<Branches> {
    return this.http.get<Branches>(`${this.apiUrl}/branches?query=${queryText}&size=${pageSize}&page=${pageNumber}`);
  }
}
