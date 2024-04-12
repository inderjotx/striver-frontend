import { env } from "@/env.mjs";



export async function getTags(): Promise<string[]> {


    const response = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/tags`, {
        method: "GET",
    }).then(data => data.json());


    console.log("Tag response fromt the backend ")

    if (response.success) {
        return Object.keys(response.data)
    }

    return []
}