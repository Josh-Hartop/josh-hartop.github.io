import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        github_url: z.string().url().optional(),

        // Todo: could probably query this information using GitHub's API but this'll do for now
        // A list of the names of files in the latest release, useful if you have multiple builds (such as one for each support platform)
        github_release_filenames: z.array(z.string()).optional(),

        other_url: z.string().url().optional(),
    }),
});

export const collections = {
    'projects': projectsCollection,
}