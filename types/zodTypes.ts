import { execCodeSchema, formDataSchema } from "@/lib/validations";
import { z } from "zod";



export type formDataType = z.infer<typeof formDataSchema>
export type executeCodeType = z.infer<typeof execCodeSchema>