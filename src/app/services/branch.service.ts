import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

import {Branches} from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  constructor(private http: HttpClient) {
  }

  fetchBranches(queryText: string, pageNumber: number, pageSize: number): Observable<Branches> {
    return this.http.get<Branches>(`${environment.apiUrl}/branches?query=${queryText}&size=${pageSize}&page=${pageNumber}`);
  }

}
