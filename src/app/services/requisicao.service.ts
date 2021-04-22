import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Requisicao } from '../models/requisicao.model';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService extends ServiceFirebase<Requisicao> {
  constructor(firestore: AngularFirestore) {
    super(Requisicao, firestore, 'requisicoes');
  }
}