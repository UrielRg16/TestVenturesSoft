import { Component, OnInit } from '@angular/core';

interface Brand {
    name: string;
    logo: string;
    description: string;
    popularity: number;
}

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})

export class MarcaComponent implements OnInit {
  viewMode: 'grid' | 'list' = 'grid';
  showAll: boolean = false; // Controla si se muestran todos los cupones o solo 8
  displayedBrands: Brand[] = []; // Aquí ya tiene el tipo correcto

  brands = [
    { name: 'National', logo: 'assets/national.png', description: 'Save 5% on car rentals', popularity: 10 },
    { name: 'Google Ads', logo: 'assets/google.png', description: 'Get $500 in Google ad spend', popularity: 8 },
    { name: 'TikTok', logo: 'assets/tiktok.png', description: 'Spend $200, Get $200', popularity: 9 },
    { name: 'Shutterstock', logo: 'assets/shutterstock.png', description: 'Save 20% at Shutterstock', popularity: 7 },
    { name: 'Nike', logo: 'assets/nike.png', description: '10% off on sportswear', popularity: 6 },
    { name: 'Adidas', logo: 'assets/adidas.png', description: '15% off new arrivals', popularity: 5 },
    { name: 'Amazon', logo: 'assets/amazon.png', description: 'Exclusive Prime deals', popularity: 9 },
    { name: 'eBay', logo: 'assets/ebay.png', description: 'Save 10% on selected items', popularity: 8 },
    { name: 'BestBuy', logo: 'assets/bestbuy.png', description: 'Up to 30% off electronics', popularity: 7 },
    { name: 'Samsung', logo: 'assets/samsung.png', description: 'Special deals on devices', popularity: 10 }
  ];

  ngOnInit() {
    this.updateDisplayedBrands();
  }

  setView(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  sortBy(criteria: string) {
    if (criteria === 'name') {
      this.brands.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'name-desc') {
      this.brands.sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === 'popularity') {
      this.brands.sort((a, b) => b.popularity - a.popularity);
    }
    this.updateDisplayedBrands();
  }

  toggleCoupons() {
    this.showAll = !this.showAll;
    this.updateDisplayedBrands();
  }

  updateDisplayedBrands() {
    this.displayedBrands = this.showAll ? this.brands : this.brands.slice(0, 8);
  }
}
