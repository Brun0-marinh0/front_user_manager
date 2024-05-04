import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationToIlustrationService {

  private informTypeSubject = new Subject<any>();
  informType$ = this.informTypeSubject.asObservable();

  constructor() { }

  sendInformType(informType: any) {
    this.informTypeSubject.next(informType);
  }
}
