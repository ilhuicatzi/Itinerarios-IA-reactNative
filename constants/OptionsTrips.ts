export const TravelerOptions = [
  {
    id: 1,
    title: "Solo",
    description: "Viaja solo y disfruta de la experiencia",
    icon: "user",
    people: 1,
  },
  {
    id: 2,
    title: "Pareja",
    description: "Viaja con tu pareja y disfruta de la experiencia",
    icon: "heart",
    people: 2,
  },
  {
    id: 3,
    title: "Familia",
    description: "Viaja con tu familia y disfruta de la experiencia",
    icon: "home",
    people: 4,
  },
  {
    id: 4,
    title: "Grupo",
    description: "Viaja con un grupo y disfruta de la experiencia",
    icon: "slideshare",
    people: 8,
  },
];

export const BudgetOptions = [
  {
    id: 1,
    title: "Económico",
    description: "Viaja con un presupuesto económico",
    icon: "hand-holding-dollar",
    budget: 500,
  },
  {
    id: 2,
    title: "Medio",
    description: "Viaja con un presupuesto medio",
    icon: "dollar-sign",
    budget: 1500,
  },
  {
    id: 3,
    title: "Alto",
    description: "Viaja con un presupuesto alto",
    icon: "sack-dollar",
    budget: 3000,
  },
  {
    id: 4,
    title: "Muy Alto",
    description: "Viaja con un presupuesto muy alto",
    icon: "money-check-dollar",
    budget: 6000,
  },
];

// const trip = {
//   selectBudget: {
//     budget: 500,
//     description: "Viaja con un presupuesto económico",
//     icon: "hand-holding-dollar",
//     id: 1,
//     title: "Económico",
//   },
//   selectDate: { endDate: "2024-07-26", startDate: "2024-07-24", totalDays: 3 },
//   selectPlace: {
//     coordinates: { lat: 38.963745, lng: 35.243322 },
//     name: "Turquía",
//     photoReference:
//       "AUc7tXXEmlIvRLd_GMwVC2ZkENFWXljFy5eBTJj8O3MLb5_C-zInKCHJeQwQgtvoFrLeA2ow3yYHNnDGQNMtTwMCSH0zpzFyHQUf1S__bj_KEpxnhV81xeeE1VUuE8D5jwFHG6muTIUpcAt_Skbe1UIkScm78uXbIjYZZni0R_V98TMNRmdL",
//     urlReference:
//       "https://maps.google.com/?q=Turqu%C3%ADa&ftid=0x14b0155c964f2671:0x40d9dbd42a625f2a",
//   },
//   selectTraveler: {
//     description: "Viaja con tu pareja y disfruta de la experiencia",
//     icon: "heart",
//     id: 2,
//     people: 2,
//     title: "Pareja",
//   },
// };


// export const AI_PROMPT = 'Generar Plan de Viaje para Destino: {trip.selectPlace.name}, Duración: {trip.selectDate.totalDays} Día y {trip.selectDate.totalDays -1 } Noche, Para ir: { trip.selectTraveler.title } aproximadamente {trip.selectTraveler.people}, Intención: {trip.selectTraveler.description}, Presupuesto: { trip.selectBudget.title } considera { trip.selectBudget.budget} dolares. Incluir: Detalles de Vuelo, Precio del Vuelo con URL de Reserva, Lista de Opciones de Hoteles con Nombre del Hotel, Dirección, Precio, URL de Imagen del Hotel, Coordenadas Geográficas, Calificación, Descripción y Lugares para Visitar Cerca del Hotel con Nombre del Lugar, Detalles del Lugar, URL de Imagen del Lugar, Coordenadas Geográficas, Precio de la Entrada, Tiempo de Viaje a Cada Lugar para un viaje de {trip.selectDate.totalDays} día y {trip.selectDate.totalDays } noche. Incluir un Plan Diario con las Mejores Horas para Visitar Cada Lugar en Formato JSON.';
