'use server'

import { formDataSchema } from "@/lib/validations";
import { formDataType } from "@/types/zodTypes";
import { env } from "@/env.mjs"
import { revalidatePath } from "next/cache";



interface SubmitDataResponse {
    success: boolean,
    error?: JudgeResult | string
}



export async function submitData(data: formDataType): Promise<SubmitDataResponse> {

    const isValid = formDataSchema.safeParse(data)

    try {

        if (!isValid.success) throw new Error("Invalid Form Data")


        const headers = {
            'Content-Type': 'application/json'
        };

        const response = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/code`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(isValid.data)
        }).then(data => data.json());


        // revalidating cache
        revalidatePath('/dashboard')

        return response


    }

    catch (err) {

        if (err instanceof Error) {
            return {
                success: false,
                error: err.message
            }
        }

        else {
            return {
                success: false,
                error: "Server Error"
            }
        }

    }
} 