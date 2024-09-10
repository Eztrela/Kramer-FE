import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clothing } from '../model/clothing';

@Injectable({
  providedIn: 'root',
})
export class ClothingService {
  private baseUrl: string = 'http://localhost:3000/clothing';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Clothing[]> {
    return this.http.get<Clothing[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<Clothing[]> {
    return this.http.get<Clothing[]>(`${this.baseUrl}?${item.key}=${item.value}`);
  }

  create(clothing: Clothing) {
    return this.http.post<Clothing>(`${this.baseUrl}`, clothing);
  }

  update(clothing: Clothing) {
    return this.http.put<Clothing>(`${this.baseUrl}/clothing/${clothing.id}`, clothing);
  }

  delete(clothing: Clothing) {
    return this.http.delete<Clothing>(`${this.baseUrl}/clothing/${clothing.id}`);
  }
}
