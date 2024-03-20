
import { execCodeSchema } from "@/lib/validations";
import { executeCodeType } from "@/types/zodTypes";
import { env } from "@/env.mjs";





export async function executeCode(data: executeCodeType): Promise<ExecuteCodeReturn<boolean>> {

    const isValid = execCodeSchema.safeParse(data)

    try {

        if (!isValid.success) throw new Error("Invalid Form Data")


        const headers = {
            'Content-Type': 'application/json'
        };

        const response = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/exec`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(isValid.data)
        }).then(data => data.json());



        return response



    }

    catch (err) {

        console.log(err)
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