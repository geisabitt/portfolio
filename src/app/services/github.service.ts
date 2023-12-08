import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Repository } from '../types/repository.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly API = 'https://api.github.com/users/geisabitt/repos';

  constructor(private httpClient: HttpClient) {}

  getRepository(): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(this.API);
  }
  getLanguages(url: string): Observable<any[]> {
    return this.httpClient.get<any>(url);
  }

  // getRepository(): Observable<HttpResponse<Repository[]>> {
  //   return this.httpClient.get<HttpResponse<Repository[]>>(this.API);
  // }
}
