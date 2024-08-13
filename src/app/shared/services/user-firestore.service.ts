import { Injectable } from '@angular/core';
import { from, map, Observable, filter } from 'rxjs';
import { User } from '../model/user';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class UserFirestoreService {
  private userCollection: AngularFirestoreCollection<User>;
  private COLLECTION_NAME: string = 'users';
  private islogged: boolean = false;

  constructor(private afs: AngularFirestore) {
    this.userCollection = afs.collection(this.COLLECTION_NAME)
  }

  getAll(): Observable<User[]> {
    return this.userCollection.valueChanges({idField: 'id'});
  }

  getById(userId: string): Observable<User> {
    const userDoc: AngularFirestoreDocument<User> = this.afs.doc(`${this.COLLECTION_NAME}/${userId}`);

    return userDoc.valueChanges({ idField: 'id' }).pipe(
      filter(user => !!user),
      map(user => user as User)
    );
  }

  getByAny(item: { key: string; value: string }): Observable<User[]> {
    let userByAny: AngularFirestoreCollection<User>;
    userByAny = this.afs.collection(this.COLLECTION_NAME, ref =>
      ref.where(item.key, '==', item.value)
    );

    return userByAny.get().pipe(
      map(snapshot => {
        return snapshot.docs.map(doc => {
          const data = doc.data() as User;
          const id = doc.id;
          const { id: _, ...userData } = data;
          return { id, ...userData };
        });
      })
    );
  }

  create(user: User): Observable<object> {
    // @ts-ignore
    delete user.id;
    return from(this.userCollection.add({...user}));
  }

  update(user: User): Observable<void> {
    return from(this.userCollection.doc(user.id).update({...user}));
  }

  delete(user: User) {
    return from(this.userCollection.doc(user.id).delete())
  }

  changeLoggedIn(bool: boolean) {
    this.islogged = bool;
  }

  isLoggedIn(): boolean {
    return this.islogged;
  }
}
