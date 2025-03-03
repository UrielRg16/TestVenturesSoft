
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  dataButtons: any = {}; // Cambiado de array a objeto
  selected = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.lista_categorias().subscribe(response => {
      this.dataButtons = response;
      this.dataButtons.menuItems = this.dataButtons.menuItems.map((item: any) => {
        return {
          ...item,
          descripcion: item['descripción'] // Copia el valor a una propiedad nueva sin tilde
        };
      });
    });
  }

  select(idMenu: number) {
    this.selected = idMenu;
    console.log('Seleccionado:', idMenu);
  }
}


