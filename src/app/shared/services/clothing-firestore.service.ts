import { Injectable } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';
import { Clothing } from '../model/clothing';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ClothingFirestoreService {
  private clothingCollection: AngularFirestoreCollection<Clothing>;
  private COLLECTION_NAME: string = 'clothing';

  constructor(private afs: AngularFirestore) {
    this.clothingCollection = afs.collection(this.COLLECTION_NAME);
  }

  getAll(): Observable<Clothing[]> {
    return this.clothingCollection.valueChanges({ idField: 'id' });
  }

  getByKitId(kitId: string): Observable<Clothing[]> {
    const clothingCollection = this.afs.collection<Clothing>(
      'clothing',
      (ref) => ref.where('kitId', '==', kitId)
    );

    return clothingCollection.snapshotChanges().pipe(
      map((actions: DocumentChangeAction<Clothing>[]) => {
        return actions.map((a: DocumentChangeAction<Clothing>) => {
          const data = a.payload.doc.data() as Clothing;
          return { ...data };
        });
      })
    );
  }


  getByAny(item: { key: string; value: string }): Observable<Clothing[]> {
    let clothingByAny: AngularFirestoreCollection<Clothing>;
    clothingByAny = this.afs.collection(this.COLLECTION_NAME, (ref) =>
      ref.where(item.key, '==', item.value)
    );

    return clothingByAny
      .get()
      .pipe(map((snapshot) => snapshot.docs.map((doc) => doc.data())));
  }

  create(clothing: Clothing): Observable<object> {
    return from(this.clothingCollection.add(Object.assign({}, clothing)));
  }

  update(clothing: Clothing): Observable<void> {
    return from(
      this.clothingCollection.doc(clothing.id).update({ ...clothing })
    );
  }

  delete(clothing: Clothing) {
    return from(this.clothingCollection.doc(clothing.id).delete());
  }
}
