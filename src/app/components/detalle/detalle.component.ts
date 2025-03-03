import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  constructor(private modalService: ModalService) {}

  openCardModal() {
    this.modalService.openCardModal();
  }
  items = [
    {
      image: 'assets/chevron.png',
      title: 'Chevron',
      description: '2% cashback on all Chevron fuel purchases'
    },
    {
      image: 'assets/mgm-grand.png',
      title: 'MGM Grand',
      description: '5% cashback'
    },
    {
      image: 'assets/panera-bread.png',
      title: 'Panera Bread',
      description: '2% cashback on purchases of $35 or more'
    },
    {
      image: 'assets/mailchimp.png',
      title: 'Mailchimp',
      description: '5% cashback on purchases at Mailchimp'
    }
  ];
}


