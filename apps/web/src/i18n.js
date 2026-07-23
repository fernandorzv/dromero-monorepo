const translations = {
  en: {
    languageName: 'English',
    alternateLanguage: 'ES',
    nav: {
      home: 'Home',
      service: 'Service',
      project: 'Project',
      team: 'Team',
      contact: 'Contact'
    },
    common: {
      logoAlt: 'Symetris home',
      primaryNav: 'Primary',
      homeAria: 'Symetris home',
      previous: 'Previous',
      next: 'Next'
    },
    home: {
      heroAria: 'Hero section',
      navigationAria: 'Hero navigation',
      heading: 'Designing Dreams, Building Futures with Timeless Elegance and Innovation',
      playVideo: 'Play Video',
      overviewAria: 'Overview section',
      thumbnailsAria: 'Project thumbnails',
      previousThumbnail: 'Previous thumbnail',
      nextThumbnail: 'Next thumbnail',
      overviewTitle: 'Serenity Haven: Embracing Nature in Architecture',
      overviewText:
        'In our eco-nature-themed architecture project, we integrate natural elements such as wood, stone, and natural lighting to create a soothing and refreshing environment.',
      metricsAria: 'Project metrics',
      metrics: [
        { value: '150+', label: 'Master Design' },
        { value: '1200+', label: 'Happy Client' },
        { value: '5000+', label: 'Project Finished' }
      ],
      reviews: 'See Reviews',
      recommendationAria: 'Recommendation section',
      recommendationMediaAria: 'Recommendation media card',
      mediaCaption: 'Explore architectural collections for forward-thinking brands.',
      mediaIndex: '03 - Iconic Architecture',
      recommendationEyebrow: 'Recommendation',
      recommendationTitle: 'We provide the best architecture categories',
      recommendationText: 'Welcome to our curated selection of architectural wonders and inspirations.',
      recommendationCategoriesAria: 'Recommendation categories',
      categories: ['Smart House', 'Real Estate', 'Iconic Architecture'],
      socialAria: 'Social media section',
      socialTitle: 'Follow Us',
      socialLinksAria: 'Social media links'
    },
    projects: {
      pageAria: 'Projects page',
      navigationAria: 'Projects navigation',
      introAria: 'Projects introduction',
      eyebrow: 'Our Project',
      heading: 'Explore Our Projects: A Journey of Design and Innovation',
      categoriesAria: 'Project categories',
      showcaseAria: 'Project showcase',
      controlsAria: 'Carousel controls',
      paginationAria: 'Carousel pagination',
      previousProjects: 'Previous projects',
      nextProjects: 'Next projects',
      viewDetails: 'View Details',
      close: 'Close',
      dialogTitle: 'Project details',
      goTo: 'Go to',
      categories: [
        {
          id: 'residential',
          label: 'Residential',
          description:
            'Designed for habitation, including single-family homes, multifamily housing, condominiums, and apartment complexes.',
          slides: [
            {
              id: 'residential-single-family',
              subtype: 'Single-Family Homes',
              note: 'Private dwellings optimized for comfort, daylight, and neighborhood context.',
              details:
                'These homes prioritize privacy, natural ventilation, and a strong indoor-outdoor connection through patios, gardens, and shaded openings.',
              image:
                'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'residential-multifamily',
              subtype: 'Multifamily Housing',
              note: 'Efficient apartment and condo layouts for high-density urban living.',
              details:
                'Multifamily buildings balance shared amenities, circulation efficiency, and acoustic comfort while maximizing usable floor area.',
              image:
                'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'commercial',
          label: 'Commercial',
          description:
            'Focused on economic activity and services, such as offices, retail stores, shopping centers, and hotels.',
          slides: [
            {
              id: 'commercial-office',
              subtype: 'Office Environments',
              note: 'Flexible workplaces built for collaboration, focus, and brand identity.',
              details:
                'Commercial office design integrates modular meeting areas, adaptable workstations, and biophilic strategies to improve productivity.',
              image:
                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'commercial-retail',
              subtype: 'Retail and Hospitality',
              note: 'Customer-first spaces with clear flow, visibility, and experiential zoning.',
              details:
                'Retail and hotel architecture emphasizes circulation sequencing, storefront presence, and memorable interiors that support conversion and retention.',
              image:
                'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'institutional-public',
          label: 'Institutional or Public',
          description:
            'Created for social well-being and administration, covering schools, hospitals, libraries, and government buildings.',
          slides: [
            {
              id: 'institutional-education',
              subtype: 'Education Facilities',
              note: 'Schools and campuses planned for inclusive, adaptable learning.',
              details:
                'Institutional education projects combine intuitive wayfinding, safe circulation, and multi-use spaces for teaching, community events, and recreation.',
              image:
                'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'institutional-healthcare',
              subtype: 'Healthcare and Civic',
              note: 'Public-service buildings balancing accessibility, resilience, and dignity.',
              details:
                'Healthcare and civic architecture requires efficient zoning, hygienic material systems, and clear public interfaces for high daily throughput.',
              image:
                'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'cultural',
          label: 'Cultural',
          description:
            'Spaces for art and social interaction, including museums, theaters, community centers, and auditoriums.',
          slides: [
            {
              id: 'cultural-museum',
              subtype: 'Museums and Galleries',
              note: 'Exhibition-oriented environments that control light, flow, and storytelling.',
              details:
                'Cultural institutions use neutral envelope design, lighting hierarchy, and curated procession routes to frame artistic narratives.',
              image:
                'https://images.unsplash.com/photo-1577083552431-6e5fd01988f9?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'cultural-performance',
              subtype: 'Performance Venues',
              note: 'Acoustically tuned theaters and auditoriums for immersive events.',
              details:
                'Performance buildings integrate acoustic shell geometry, audience sightlines, and backstage logistics for operational excellence.',
              image:
                'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'industrial',
          label: 'Industrial',
          description:
            'Structures for production and manufacturing, including factories, warehouses, and processing plants.',
          slides: [
            {
              id: 'industrial-factory',
              subtype: 'Manufacturing Plants',
              note: 'Process-driven facilities engineered for throughput and safety.',
              details:
                'Industrial plants rely on robust structural grids, heavy-load logistics paths, and ventilation systems sized for specialized machinery.',
              image:
                'https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'industrial-warehouse',
              subtype: 'Logistics Warehouses',
              note: 'High-bay storage and distribution hubs optimized for rapid movement.',
              details:
                'Warehouse architecture prioritizes truck court layout, dock efficiencies, and adaptable rack systems to support changing supply chains.',
              image:
                'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'infrastructure',
          label: 'Infrastructure',
          description: 'Essential civil works such as bridges, transport stations, and airports.',
          slides: [
            {
              id: 'infrastructure-bridge',
              subtype: 'Bridge Systems',
              note: 'Civil structures connecting regions with structural clarity and resilience.',
              details:
                'Bridge projects demand advanced load analysis, durable materials, and phased construction planning to reduce service disruption.',
              image:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'infrastructure-hub',
              subtype: 'Transit and Airport Hubs',
              note: 'Passenger-focused transport nodes with high-capacity circulation.',
              details:
                'Transit infrastructure balances wayfinding legibility, crowd management, and multimodal integration to improve user experience.',
              image:
                'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        }
      ]
    }
  },
  es: {
    languageName: 'Español',
    alternateLanguage: 'EN',
    nav: {
      home: 'Inicio',
      service: 'Servicios',
      project: 'Proyectos',
      team: 'Equipo',
      contact: 'Contacto'
    },
    common: {
      logoAlt: 'Inicio de Symetris',
      primaryNav: 'Principal',
      homeAria: 'Inicio de Symetris',
      previous: 'Anterior',
      next: 'Siguiente'
    },
    home: {
      heroAria: 'Sección principal',
      navigationAria: 'Navegación principal',
      heading: 'Diseñamos sueños y construimos futuros con elegancia e innovación atemporales',
      playVideo: 'Ver video',
      overviewAria: 'Sección de resumen',
      thumbnailsAria: 'Miniaturas del proyecto',
      previousThumbnail: 'Miniatura anterior',
      nextThumbnail: 'Miniatura siguiente',
      overviewTitle: 'Serenity Haven: arquitectura que abraza la naturaleza',
      overviewText:
        'En nuestro proyecto de arquitectura eco-natural integramos madera, piedra e iluminación natural para crear un ambiente sereno, fresco y acogedor.',
      metricsAria: 'Métricas del proyecto',
      metrics: [
        { value: '150+', label: 'Diseños maestros' },
        { value: '1200+', label: 'Clientes satisfechos' },
        { value: '5000+', label: 'Proyectos terminados' }
      ],
      reviews: 'Ver reseñas',
      recommendationAria: 'Sección de recomendaciones',
      recommendationMediaAria: 'Tarjeta multimedia de recomendación',
      mediaCaption: 'Explora colecciones arquitectónicas para marcas con visión de futuro.',
      mediaIndex: '03 - Arquitectura icónica',
      recommendationEyebrow: 'Recomendación',
      recommendationTitle: 'Ofrecemos las mejores categorías de arquitectura',
      recommendationText: 'Bienvenido a nuestra selección curada de maravillas e inspiraciones arquitectónicas.',
      recommendationCategoriesAria: 'Categorías recomendadas',
      categories: ['Casa inteligente', 'Bienes raíces', 'Arquitectura icónica'],
      socialAria: 'Sección de redes sociales',
      socialTitle: 'Síguenos',
      socialLinksAria: 'Enlaces de redes sociales'
    },
    projects: {
      pageAria: 'Página de proyectos',
      navigationAria: 'Navegación de proyectos',
      introAria: 'Introducción de proyectos',
      eyebrow: 'Nuestro proyecto',
      heading: 'Explora nuestros proyectos: un recorrido de diseño e innovación',
      categoriesAria: 'Categorías de proyectos',
      showcaseAria: 'Galería de proyectos',
      controlsAria: 'Controles del carrusel',
      paginationAria: 'Paginación del carrusel',
      previousProjects: 'Proyectos anteriores',
      nextProjects: 'Proyectos siguientes',
      viewDetails: 'Ver detalles',
      close: 'Cerrar',
      dialogTitle: 'Detalles del proyecto',
      goTo: 'Ir a',
      categories: [
        {
          id: 'residential',
          label: 'Residencial',
          description:
            'Diseñado para la vivienda, incluyendo casas unifamiliares, vivienda multifamiliar, condominios y complejos de departamentos.',
          slides: [
            {
              id: 'residential-single-family',
              subtype: 'Casas unifamiliares',
              note: 'Viviendas privadas optimizadas para confort, luz natural y contexto urbano.',
              details:
                'Estas casas priorizan privacidad, ventilación natural y una conexión interior-exterior mediante patios, jardines y vanos sombreados.',
              image:
                'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'residential-multifamily',
              subtype: 'Vivienda multifamiliar',
              note: 'Departamentos y condominios eficientes para vida urbana de alta densidad.',
              details:
                'Los edificios multifamiliares equilibran amenidades compartidas, circulación eficiente y confort acústico mientras maximizan el área útil.',
              image:
                'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'commercial',
          label: 'Comercial',
          description:
            'Enfocado en actividad económica y servicios, como oficinas, tiendas, centros comerciales y hoteles.',
          slides: [
            {
              id: 'commercial-office',
              subtype: 'Entornos de oficina',
              note: 'Espacios flexibles para colaboración, concentración e identidad de marca.',
              details:
                'El diseño de oficinas integra salas modulares, estaciones adaptables y estrategias biofílicas para mejorar la productividad.',
              image:
                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'commercial-retail',
              subtype: 'Retail y hospitalidad',
              note: 'Espacios centrados en el cliente con flujo claro, visibilidad y zonas experienciales.',
              details:
                'La arquitectura para retail y hoteles enfatiza circulación, presencia de fachada e interiores memorables que impulsan conversión y retención.',
              image:
                'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'institutional-public',
          label: 'Institucional o público',
          description:
            'Creado para bienestar social y administración, incluyendo escuelas, hospitales, bibliotecas y edificios gubernamentales.',
          slides: [
            {
              id: 'institutional-education',
              subtype: 'Instalaciones educativas',
              note: 'Escuelas y campus planeados para aprendizaje inclusivo y adaptable.',
              details:
                'Los proyectos educativos combinan orientación intuitiva, circulación segura y espacios multiuso para enseñanza, comunidad y recreación.',
              image:
                'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'institutional-healthcare',
              subtype: 'Salud y espacios cívicos',
              note: 'Edificios de servicio público que equilibran accesibilidad, resiliencia y dignidad.',
              details:
                'La arquitectura de salud y cívica requiere zonificación eficiente, materiales higiénicos e interfaces públicas claras para alto flujo diario.',
              image:
                'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'cultural',
          label: 'Cultural',
          description:
            'Espacios para arte e interacción social, incluyendo museos, teatros, centros comunitarios y auditorios.',
          slides: [
            {
              id: 'cultural-museum',
              subtype: 'Museos y galerías',
              note: 'Ambientes expositivos que controlan luz, recorrido y narrativa.',
              details:
                'Las instituciones culturales usan envolventes neutras, jerarquía lumínica y recorridos curados para enmarcar narrativas artísticas.',
              image:
                'https://images.unsplash.com/photo-1577083552431-6e5fd01988f9?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'cultural-performance',
              subtype: 'Recintos escénicos',
              note: 'Teatros y auditorios acústicamente calibrados para experiencias inmersivas.',
              details:
                'Los edificios escénicos integran geometría acústica, visuales del público y logística tras bambalinas para excelencia operativa.',
              image:
                'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'industrial',
          label: 'Industrial',
          description:
            'Estructuras para producción y manufactura, incluyendo fábricas, almacenes y plantas de procesamiento.',
          slides: [
            {
              id: 'industrial-factory',
              subtype: 'Plantas de manufactura',
              note: 'Instalaciones guiadas por procesos y diseñadas para productividad y seguridad.',
              details:
                'Las plantas industriales dependen de retículas estructurales robustas, rutas de carga pesada y ventilación para maquinaria especializada.',
              image:
                'https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'industrial-warehouse',
              subtype: 'Almacenes logísticos',
              note: 'Centros de almacenamiento y distribución optimizados para movimiento rápido.',
              details:
                'La arquitectura de almacenes prioriza patios de maniobra, eficiencia de andenes y sistemas de racks adaptables a cadenas de suministro cambiantes.',
              image:
                'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        },
        {
          id: 'infrastructure',
          label: 'Infraestructura',
          description: 'Obras civiles esenciales como puentes, estaciones de transporte y aeropuertos.',
          slides: [
            {
              id: 'infrastructure-bridge',
              subtype: 'Sistemas de puentes',
              note: 'Estructuras civiles que conectan regiones con claridad estructural y resiliencia.',
              details:
                'Los puentes requieren análisis avanzado de cargas, materiales durables y construcción por fases para reducir interrupciones.',
              image:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80'
            },
            {
              id: 'infrastructure-hub',
              subtype: 'Centros de transporte y aeropuertos',
              note: 'Nodos de transporte orientados al pasajero con circulación de alta capacidad.',
              details:
                'La infraestructura de transporte equilibra orientación clara, manejo de multitudes e integración multimodal para mejorar la experiencia.',
              image:
                'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=80'
            }
          ]
        }
      ]
    }
  }
}

export default translations