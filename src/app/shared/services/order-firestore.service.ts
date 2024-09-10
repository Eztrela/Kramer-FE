import { Injectable } from '@angular/core';
import {filter, from, map, Observable, of, switchMap} from 'rxjs';
import { Order } from '../model/order';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class OrderFirestoreService {
  private orderCollection: AngularFirestoreCollection<Order>;
  private COLLECTION_NAME: string = 'orders';

  constructor(private afs: AngularFirestore) {
    this.orderCollection = afs.collection(this.COLLECTION_NAME);
  }

  getAll(): Observable<Order[]> {
    return this.orderCollection.valueChanges({ idField: 'id' });
  }

  getById(orderId: string): Observable<Order> {
    const orderDoc: AngularFirestoreDocument<Order> = this.afs.doc(`${this.COLLECTION_NAME}/${orderId}`);

    return orderDoc.valueChanges({ idField: 'id' }).pipe(
      filter(order => !!order),
      map(order => order as Order)
    );
  }

  getByUserId(userId: string): Observable<Order[]> {
    const orderCollection = this.afs.collection<Order>('orders', ref => ref.where('userId', '==', userId));

    return orderCollection.snapshotChanges().pipe(
      map((actions: DocumentChangeAction<Order>[]) => {
        return actions.map((a: DocumentChangeAction<Order>) => {
          const data = a.payload.doc.data() as Order;
          return { ...data };
        });
      })
    );
  }

  getByAny(item: { key: string; value: string }): Observable<Order[]> {
    let orderByAny: AngularFirestoreCollection<Order>;
    orderByAny = this.afs.collection(this.COLLECTION_NAME, (ref) =>
      ref.where(item.key, '==', item.value)
    );

    return orderByAny.get().pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data()))
    );
  }

  create(order: Order): Observable<Order> {
    // @ts-ignore
    delete order.id;

    return from(this.orderCollection.add({ ...order }))
      .pipe(
        switchMap(docRef => {
          const orderId = docRef.id;
          const orderWithId = new Order(
            orderId,
            order.date,
            order.devolutionDate,
            order.status,
            order.price,
            order.kitId,
            order.planId,
            order.clothesIds,
            order.userId
          );

          return of(orderWithId);
        })
      );
  }


  update(order: Order): Observable<void> {
    return from(this.orderCollection.doc(order.id).update({ ...order }));
  }

  delete(order: Order) {
    return from(this.orderCollection.doc(order.id).delete());
  }
}
