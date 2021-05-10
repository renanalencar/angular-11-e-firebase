import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICrud } from './icrud.interface';
import { Model } from './model';

export abstract class ServiceFirebase<T extends Model> implements ICrud<T> {


    ref: AngularFirestoreCollection<T>;

    constructor(protected classType: new () => T, protected firestore: AngularFirestore, public classPath: string) {
        this.ref = this.firestore.collection<T>(this.classPath);
    }

    get(id: string): Observable<T> {
        const doc = this.ref.doc<T>(id);
        return doc.get().pipe(map(snapshot => this.docToClass(snapshot)));
    }

    list(): Observable<T[]> {
        return this.ref.valueChanges();
    }

    async createOrUpdate(item: T): Promise<any> {
        if (!item) {
            return;
        }

        let obj: T | any = null;

        if (item instanceof this.classType) {
            obj = item.toObject();
        }
        else {
            obj = item;
        }

        const id = item.id;
        if (id) {
            return this.ref.doc(id).set(obj as any);
        }
        else {
            return this.ref.add(obj as any).then(res => {
                obj.id = res.id;
                this.ref.doc(res.id).set(obj as any);
            });
        }
    }

    delete(id: string): Promise<void> {
        return this.ref.doc(id).delete();
    }

    docToClass(snapshotDoc: any): T {
        const obj = {
            id: snapshotDoc.id,
            ... (snapshotDoc.data() as T) as any
        };
        const typed = plainToClass(this.classType, obj);
        return typed;
    }


}
