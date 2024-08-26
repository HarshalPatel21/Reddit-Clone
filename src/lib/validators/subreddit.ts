import {z} from 'zod'

export const Subredditvalidator = z.object({
    name: z.string().min(3).max(21),
})

export const Subredditsubscriptionvalidator = z.object({
    subredditId: z.string()
})

export type CreateSubredditPayload = z.infer<typeof Subredditvalidator>
export type SubscribetoSubredditPayload = z.infer<typeof Subredditsubscriptionvalidator>