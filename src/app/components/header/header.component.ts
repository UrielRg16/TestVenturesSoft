import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoginModalOpen = false;
  isCardModalOpen = false;
  email: string = '';
  password: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    // Escuchar cambios del servicio para el modal de la tarjeta
    this.modalService.isCardModalOpen$.subscribe(status => {
      this.isCardModalOpen = status;
    });
  }

  // Métodos del modal de Login
  openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  closeLoginModal(): void {
    this.isLoginModalOpen = false;
  }

  login(): void {
    console.log('Login with email:', this.email);
    this.closeLoginModal();
  }

  openCardModal() {
    this.modalService.openCardModal();
  }
  
  // Métodos del modal de tarjeta
  closeCardModal(): void {
    this.modalService.closeCardModal();
  }

  linkCard(): void {
    console.log('Card linked with number:', this.cardNumber);
    this.closeCardModal();
  }
}
