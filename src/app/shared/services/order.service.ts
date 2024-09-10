import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl: string = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}?${item.key}=${item.value}`);
  }

  create(order: Order) {
    return this.http.post<Order>(`${this.baseUrl}`, order);
  }

  update(order: Order) {
    return this.http.put<Order>(`${this.baseUrl}/${order.id}`, order);
  }

  delete(order: Order) {
    return this.http.delete<Order>(`${this.baseUrl}/${order.id}`);
  }
}