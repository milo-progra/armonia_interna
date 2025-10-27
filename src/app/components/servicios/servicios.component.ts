import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent {
  selectedService: Service | null = null;

  services: Service[] = [
    {
      id: 'biomagnetismo',
      name: 'Biomagnetismo',
      image: '/biomagnetismo.jpg',
      description: `Sabes qué es el biomagnetismo y cuáles son sus beneficios?

✨ El biomagnetismo es una terapia natural y no invasiva que utiliza imanes para equilibrar el pH de tu cuerpo, ayudando a mejorar tu salud desde la raíz. 🌿 
🔍 ¿Cómo funciona?
Los imanes se colocan estratégicamente en puntos específicos del cuerpo para:
✅ Neutralizar bacterias, virus, hongos y parásitos que pueden causar enfermedades.
✅ Restablecer el equilibrio energético del organismo.
✅ Promover la auto-sanación natural del cuerpo.

🌟 Beneficios del biomagnetismo:

✔️ Refuerza el sistema inmunológico.

✔️ Alivia dolores y molestias.

✔️ Mejora problemas digestivos y hormonales.

✔️ Ayuda con el estrés y el insomnio.

✔️ Fomenta un bienestar integral.

 

💆‍♂️ Es una alternativa natural, efectiva y no invasiva para mejorar tu salud y calidad de vida.

📞 Agenda tu cita al +569-64632443 y descubre cómo el biomagnetismo puede transformar tu   bienestar.

🕙 Horarios: lunes a viernes de 9:00 AM a 6:00 PM.

📍 Estamos en Av. Baquedano 1198, Paine.

 

✨ ¡Tu salud está en tus manos! Ven y prueba esta terapia con nosotros.`
    },
    {
      id: 'yoga',
      name: 'Yoga',
      image: 'yoga.jpg',
      description: `yoga es una práctica que une el cuerpo, la mente y el espíritu a través de posturas físicas, ejercicios de respiración y meditación. Sus beneficios incluyen mejoras en la flexibilidad y fuerza muscular, reducción del estrés y la ansiedad, y alivio de dolores crónicos. También contribuye a una mejor postura, concentración, equilibrio y salud cardiovascular, entre otros aspectos físicos y mentales. 

      ¿Qué es el yoga?

        Una práctica ancestral de la India que busca la unión del cuerpo, la mente y el espíritu. 
        Combina posturas físicas (asanas), técnicas de respiración (pranayama) y meditación. 
        Aunque históricamente tiene un componente espiritual, en Occidente se practica principalmente para mejorar la salud y reducir el estrés. 
        Beneficios del yoga

        Salud física:

            Mejora la flexibilidad, fuerza y equilibrio: Fortalece los músculos y aumenta la flexibilidad. 
            Alivia el dolor: Puede ayudar a reducir dolores crónicos, como el de espalda. 
            Mejora la salud cardiovascular: Reduce la presión arterial y la frecuencia cardíaca. 
            Fortalece el sistema inmunológico: Ayuda a fortalecer el sistema inmunológico. 

        Salud mental y emocional:

            Reduce el estrés y la ansiedad: Las técnicas de respiración y meditación calman el sistema nervioso. 
            Mejora la concentración: Ayuda a mantener el enfoque y a estar más presente.`
    },
    {
      id: 'constelacion-familiar',
      name: 'Constelación Familiar',
      image: 'constr.jpg',
      description: `[INFORMACIÓN SOBRE CONSTELACIÓN FAMILIAR]

Aquí puedes agregar toda la información detallada sobre la constelación familiar.`
    },
    {
      id: 'reflexologia-podal',
      name: 'Reflexología Podal',
      image: 'reflexologia-podal.jpg',
      description: `[INFORMACIÓN SOBRE REFLEXOLOGÍA PODAL]

Aquí puedes agregar toda la información detallada sobre la reflexología podal.`
    },
    {
      id: 'medicina-china',
      name: 'Medicina China',
      image: 'medicina-china.jpg',
      description: `Medicina China

• Acupuntura - [INFORMACIÓN ACERCA DE ACUPUNTURA]
• Ventosas - [INFORMACIÓN ACERCA DE VENTOSAS]
• Qi Gong - [INFORMACIÓN ACERCA DE QI GONG]
• Moxibustión - [INFORMACIÓN ACERCA DE MOXIBUSTIÓN]

Aquí puedes agregar toda la información detallada sobre la medicina china.`
    },
    {
      id: 'terapia-floral',
      name: 'Terapia Floral',
      image: 'terapia-floral.jpg',
      description: `[SACAR DE INSTAGRAM - INFORMACIÓN SOBRE TERAPIA FLORAL]

Aquí puedes agregar toda la información detallada sobre la terapia floral.`
    },
    {
      id: 'quiropraxia',
      name: 'Quiropraxia',
      image: 'quiropraxia.jpg',
      description: `[SACAR DE INSTAGRAM - INFORMACIÓN SOBRE QUIROPRAXIA]

Aquí puedes agregar toda la información detallada sobre la quiropraxia.`
    },
    {
      id: 'masajes-relajacion',
      name: 'Masajes de Relajación',
      image: 'masajes-relajacion.jpg',
      description: `[INFORMACIÓN SOBRE MASAJES DE RELAJACIÓN]

Aquí puedes agregar toda la información detallada sobre los masajes de relajación.`
    },
    {
      id: 'auriculoterapia',
      name: 'Auriculoterapia',
      image: 'auriculoterapia.jpg',
      description: `[INFORMACIÓN SOBRE AURICULOTERAPIA]

Aquí puedes agregar toda la información detallada sobre la auriculoterapia.`
    },
    {
      id: 'tarot',
      name: 'Lecturas de Tarot',
      image: 'tarot.jpg',
      description: `[INFORMACIÓN SOBRE LECTURAS DE TAROT]

Aquí puedes agregar toda la información detallada sobre las lecturas de tarot.`
    },
    {
      id: 'carta-astral',
      name: 'Carta Astral',
      image: 'carta-astral.jpg',
      description: `[INFORMACIÓN SOBRE CARTA ASTRAL]

Aquí puedes agregar toda la información detallada sobre la carta astral.`
    },
    {
      id: 'chakras',
      name: 'Alineación de Chakras',
      image: 'chakras.jpg',
      description: `[TENGO LA INFORMACIÓN - INFORMACIÓN SOBRE ALINEACIÓN DE CHAKRAS]

Aquí puedes agregar toda la información detallada sobre la alineación de chakras.`
    }
  ];

  openModal(service: Service) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}

