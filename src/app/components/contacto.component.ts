import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header Section -->
      <div class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">Contacto</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos y comienza tu camino hacia el bienestar
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            

            <!-- Contact Information -->
            <div class="space-y-8">
              <!-- Office Info -->
              <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="bg-blue-100 p-2 rounded-full mr-4">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Dirección</p>
                      <p class="text-gray-600">Av. Principal 123, Centro<br>Ciudad, CP 12345</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-green-100 p-2 rounded-full mr-4">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Teléfono</p>
                      <p class="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-purple-100 p-2 rounded-full mr-4">
                      <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Email</p>
                      <p class="text-gray-600">info@armoniainterna.com</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-orange-100 p-2 rounded-full mr-4">
                      <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Horarios</p>
                      <p class="text-gray-600">Lunes - Viernes: 9:00 AM - 7:00 PM<br>Sábados: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Emergency Contact -->
              <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-red-800 mb-2">¿Necesitas ayuda inmediata?</h3>
                <p class="text-red-700 mb-4">Si estás pasando por una crisis, no dudes en contactarnos:</p>
                <div class="space-y-2">
                  <p class="text-red-800 font-medium">Línea de Emergencia: +1 (555) 911-HELP</p>
                  <p class="text-red-800 font-medium">Disponible 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <!-- Map Section -->
      <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Nuestra Ubicación</h2>
            <p class="text-lg text-gray-600">Encuéntranos fácilmente en el centro de la ciudad</p>
          </div>
          
          <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p class="text-gray-500">Mapa interactivo</p>
              <p class="text-sm text-gray-400">Av. Principal 123, Centro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactoComponent {
  constructor() { }
}
