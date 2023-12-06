import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        github_url: z.string().optional(),
        other_url: z.string().optional(),
    }),
});

export const collections = {
    'projects': projectsCollection,
}