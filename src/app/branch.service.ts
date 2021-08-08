import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Branches} from './branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  fetchBranches(queryText: string): Observable<Branches> {
    return this.http.get<Branches>(`${this.apiUrl}/branches?query=${queryText}&size=4`);
  }
}
