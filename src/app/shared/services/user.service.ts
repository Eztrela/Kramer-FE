import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:3000/users';
  private islogged: boolean = false;

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?${item.key}=${item.value}`);
  }

  create(user: User) {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  update(user: User) {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }

  delete(user: User) {
    return this.http.delete<User>(`${this.baseUrl}/${user.id}`);
  }

  changeLoggedIn(bool: boolean) {
    this.islogged = bool;
  }

  isLoggedIn(): boolean {
    return this.islogged;
  }
}
