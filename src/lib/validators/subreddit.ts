import {z} from 'zod'

export const Subredditvalidator = z.object({
    name: z.string().min(3).max(21),
})

export const SubredditSubscriptionValidator = z.object({
    subredditId: z.string()
})

export type CreateSubredditPayload = z.infer<typeof Subredditvalidator>
export type SubscribeToSubredditPayload = z.infer<typeof SubredditSubscriptionValidator>