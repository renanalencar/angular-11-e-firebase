import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICrud } from './icrud.interface';
import { Model } from './model';

export abstract class ServiceFirebase<T extends Model> implements
    ICrud<T> {

    ref!: AngularFirestoreCollection<T>;

    constructor(protected myType: { new(): T; }, protected firestore:
        AngularFirestore, public caminho: string) {
        this.ref = this.firestore.collection<T>(this.caminho);
    }

    get(id: string): Observable<T> {
        let doc = this.ref.doc<T>(id);
        return doc.get().pipe(map(snapshot => this.docToClass(snapshot)));
    }
    list(): Observable<T[]> {
        return this.ref.valueChanges();
    }
    createOrUpdate(item: T): Promise<any> {
        let id = item.id;
        if (!item)
            return;

        let obj: object | null = null;

        if (item instanceof this.myType)
            obj = item.toObject();
        else
            obj = item;
        if (id) {
            return this.ref.doc(id).set(<any>obj);
        }
        else
            return this.ref.add(<any>obj).then(res => {
                obj.id = res.id;
                this.ref.doc(res.id).set(<any>obj);
            });
    }
    delete(id: string): Promise<void> {
        return this.ref.doc(id).delete();
    }

    docToClass(snapshotDoc: any): T {
        let obj = {
            id: snapshotDoc.id,
            ...(snapshotDoc.data() as T)
        };
        let typed = plainToClass(this.myType, obj);
        return typed;
    }

}