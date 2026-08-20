import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cursos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cursos" }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    precio: z.number().optional(),
    earlyBird: z.number().optional(),
    duracion: z.string().optional(),
    proximaFecha: z.string().default("Próximas fechas por anunciar"),
    lugar: z.string().optional(),
    paymentLink: z.string().nullable().optional(),
    orden: z.number(),
  }),
});

export const collections = { cursos };
