import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header Section -->
      <div class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios para tu bienestar integral
            </p>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Consultas -->
            <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div class="text-center mb-6">
                <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Consultas</h3>
                <p class="text-gray-600 mb-6 text-lg">Sesiones personalizadas</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  tipo consulta 1
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Tipo consulta 2
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  Tipo consulta 3
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  tipo consulta 4
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                  tipo consulta 5
                </li>
              </ul>
          
            </div>

            <!-- Charlas -->
            <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div class="text-center mb-6">
                <div class="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Charlas</h3>
                <p class="text-gray-600 mb-6 text-lg">Conferencias educativas sobre bienestar y desarrollo personal</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
                  Charla
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
                  Charla
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
                  Charla
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
                  Charla
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
                  Charla
                </li>
              </ul>
             
            </div>

            <!-- Talleres -->
            <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div class="text-center mb-6">
                <div class="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Talleres</h3>
                <p class="text-gray-600 mb-6 text-lg">Talleres prácticos y experienciales para el desarrollo personal</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
                  Taller 
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
                  Taller 
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
                  Taller
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
                  Taller
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
                  Taller
                </li>
              </ul>
              
            </div>

            <!-- Cursos -->
            <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div class="text-center mb-6">
                <div class="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Cursos</h3>
                <p class="text-gray-600 mb-6 text-lg">Cursos especializados de desarrollo personal y bienestar</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  curso
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  curso
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  curso
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  Curso
                </li>
                <li class="flex items-center text-gray-600">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-4"></span>
                  Curso
                </li>
              </ul>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ServiciosComponent {
  constructor() { }
}
