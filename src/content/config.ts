import { defineCollection, z } from 'astro:content';

const skillsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['technique', 'humaine']),
    level: z.number().min(1).max(5),
    icon: z.string().optional(),
    order: z.number(),
    relatedProjects: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    context: z.string(),
    technologies: z.array(z.string()),
    relatedSkills: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

const experiencesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['experience', 'formation', 'certification']),
    organization: z.string(),
    location: z.string().optional(),
    logo: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    relatedSkills: z.array(z.string()).optional(),
    relatedProjects: z.array(z.string()).optional(),
  }),
});

export const collections = {
  skills: skillsCollection,
  projects: projectsCollection,
  experiences: experiencesCollection,
};
