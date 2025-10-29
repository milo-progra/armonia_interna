import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.interface';
import { SERVICES } from './services.data';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styles: [`
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(-30px);
      }
    }

    .animate-slide-in {
      animation: slideIn 0.6s ease-out forwards;
    }

    .animate-fade-out {
      animation: fadeOut 0.3s ease-in forwards;
    }
  `]
})

export class ServiciosComponent {

  selectedService: Service | null = null;
  currentPage: number = 1;
  itemsPerPage: number = 3;
  isAnimating: boolean = false;
  list_services:Service[] = [];
  //services: Service[] = SERVICES;
  isMobile: boolean = false;


  ngOnInit() {
   this.list_services = SERVICES;
    console.log("Hola mundo");
    console.log(this.isMobile);
    
    this.checkScreenSize();
  
    
  }

  //Verificamos si estamos viendo la pagina en un dispositivo movil
  checkScreenSize() {
    console.log(window.innerWidth);
    this.isMobile = window.innerWidth < 768; // móvil < 768px
    console.log("es movil:",this.isMobile);
    
  }


  openModal(service: Service) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }

  get totalPages(): number {
    return Math.ceil(this.list_services.length / this.itemsPerPage);
  }

  get carouselServices(): Service[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.list_services.slice(startIndex, endIndex);
  }

  previousSlide() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    
    if (this.currentPage > 1) {
      this.currentPage--;
    } else {
      // Loop to the end
      this.currentPage = this.totalPages;
    }

    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  nextSlide() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    } else {
      // Loop to the beginning
      this.currentPage = 1;
    }

    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }

  goToPage(page: number) {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.currentPage = page;
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }
}

