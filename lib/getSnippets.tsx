
import { env } from "@/env.mjs"

type GetSnippetsResponse<T extends boolean> = T extends true ? { success: T, data: Snippet[] } : { success: T, error: string }

export async function getSnippets(): Promise<GetSnippetsResponse<boolean>> {

    const response = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/snippets`, { cache: "no-store" }).then(data => data.json())
    return response

}