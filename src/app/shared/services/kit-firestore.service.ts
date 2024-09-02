import { Injectable } from '@angular/core';
import { from, map, Observable, filter } from 'rxjs';
import { Kit } from '../model/kit';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class KitFirestoreService {
  private kitCollection: AngularFirestoreCollection<Kit>;
  private COLLECTION_NAME: string = 'kits';

  constructor(private afs: AngularFirestore) {
    this.kitCollection = afs.collection(this.COLLECTION_NAME);
  }

  getAll(): Observable<Kit[]> {
    return this.kitCollection.valueChanges({ idField: 'id' });
  }

  getById(kitId: string): Observable<Kit> {
    const kitDoc: AngularFirestoreDocument<Kit> = this.afs.doc(`${this.COLLECTION_NAME}/${kitId}`);

    return kitDoc.valueChanges({ idField: 'id' }).pipe(
      filter(kit => !!kit),
      map(kit => kit as Kit)
    );
  }


  getByAny(item: { key: string; value: string }): Observable<Kit[]> {
    let kitByAny: AngularFirestoreCollection<Kit>;
    kitByAny = this.afs.collection(this.COLLECTION_NAME, (ref) =>
      ref.where(item.key, '==', item.value)
    );

    return kitByAny.get().pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data()))
    );
  }

  create(kit: Kit): Observable<object> {
    return from(this.kitCollection.add(Object.assign({}, kit)));
  }

  update(kit: Kit): Observable<void> {
    return from(this.kitCollection.doc(kit.id).update({ ...kit }));
  }

  delete(kit: Kit) {
    return from(this.kitCollection.doc(kit.id).delete());
  }
}
