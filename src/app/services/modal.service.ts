import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isCardModalOpenSubject = new BehaviorSubject<boolean>(false);
  isCardModalOpen$ = this.isCardModalOpenSubject.asObservable();

  openCardModal() {
    this.isCardModalOpenSubject.next(true);
  }

  closeCardModal() {
    this.isCardModalOpenSubject.next(false);
  }
}
