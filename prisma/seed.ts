import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const scholarships = [
  {
    id: "seed-rita-cetina",
    title: "Beca Universal Rita Cetina Gutiérrez",
    description:
      "Programa del Gobierno de México para familias con estudiantes de educación básica en escuelas públicas elegibles. Consulta los requisitos y el periodo de registro vigentes en el sitio oficial.",
    url: "https://www.gob.mx/becasbenitojuarez/articulos/beca-universal-de-educacion-basica-rita-cetina",
    category: "Beca gubernamental",
  },
  {
    id: "seed-benito-juarez-media-superior",
    title: "Beca Benito Juárez Media Superior",
    description:
      "Apoyo del Gobierno de México dirigido a estudiantes inscritos en bachillerato o profesional técnico bachiller en escuelas públicas. Consulta las reglas y fechas vigentes en el sitio oficial.",
    url: "https://www.gob.mx/becasbenitojuarez/articulos/beca-universal-de-educacion-media-superior-benito-juarez",
    category: "Beca gubernamental",
  },
  {
    id: "seed-pilares-cdmx",
    title: "Talleres y Ciberescuelas PILARES CDMX",
    description:
      "Oferta pública de asesorías académicas, talleres y servicios de ciberescuela en los PILARES de la Ciudad de México. Revisa sedes, actividades y disponibilidad en el portal oficial.",
    url: "https://pilares.cdmx.gob.mx/",
    category: "Apoyo educativo",
  },
  {
    id: "seed-bbva-chavos-que-inspiran",
    title: "Becas Fundación BBVA Chavos que Inspiran",
    description:
      "Programa de becas de Fundación BBVA para acompañar a estudiantes talentosos durante su trayectoria educativa. Consulta requisitos, resultados y próximas convocatorias en el sitio oficial.",
    url: "https://www.fundacionbbva.mx/",
    category: "Beca privada",
  },
  {
    id: "seed-olimpiada-mexicana-matematicas",
    title: "Olimpiada Mexicana de Matemáticas",
    description:
      "Convocatoria y procesos de selección de la OMM para estudiantes interesados en competencias matemáticas. Consulta las convocatorias y fechas de registro vigentes en el sitio oficial.",
    url: "https://www.ommenlinea.org/",
    category: "Olimpiada académica",
  },
];

async function seed() {
  for (const scholarship of scholarships) {
    await prisma.scholarship.upsert({
      where: { id: scholarship.id },
      update: {
        ...scholarship,
        deadline: null,
        isActive: true,
      },
      create: {
        ...scholarship,
        deadline: null,
        isActive: true,
      },
    });
  }

  const savedScholarships = await prisma.scholarship.findMany({
    where: {
      id: { in: scholarships.map(({ id }) => id) },
    },
    select: {
      id: true,
      title: true,
    },
    orderBy: { id: "asc" },
  });

  if (savedScholarships.length !== scholarships.length) {
    throw new Error(
      `Expected ${scholarships.length} seeded opportunities, found ${savedScholarships.length}.`,
    );
  }

  console.log(`Verified ${savedScholarships.length} saved opportunities:`);
  for (const scholarship of savedScholarships) {
    console.log(`- ${scholarship.title}`);
  }
}

seed().finally(async () => {
  await prisma.$disconnect();
});
