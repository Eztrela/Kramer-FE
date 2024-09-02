import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kit } from '../model/kit';

@Injectable({
  providedIn: 'root',
})
export class KitService {
  private baseUrl: string = 'http://localhost:3000/kits';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Kit[]> {
    return this.http.get<Kit[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<Kit[]> {
    return this.http.get<Kit[]>(`${this.baseUrl}?${item.key}=${item.value}`);
  }

  create(kit: Kit) {
    return this.http.post<Kit>(`${this.baseUrl}`, kit);
  }

  update(kit: Kit) {
    return this.http.put<Kit>(`${this.baseUrl}/kit/${kit.id}`, kit);
  }

  delete(kit: Kit) {
    return this.http.delete<Kit>(`${this.baseUrl}/kit/${kit.id}`);
  }
}
