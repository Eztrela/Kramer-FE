import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../model/plan';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private baseUrl: string = 'http://localhost:3000/plans';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.baseUrl}?${item.key}=${item.value}`);
  }

  create(plan: Plan) {
    return this.http.post<Plan>(`${this.baseUrl}`, plan);
  }

  update(plan: Plan) {
    return this.http.put<Plan>(`${this.baseUrl}/plan/${plan.id}`, plan);
  }

  delete(plan: Plan) {
    return this.http.delete<Plan>(`${this.baseUrl}/plan/${plan.id}`);
  }
}
