type SupportedLanguages = "JavaScript" | "OCaml" | "Pascal" | "PHP" | "Rust" | "Python" | "Java" | "C#" | "C++" | "TypeScript" | "Ruby" | "Go";



interface JudgeResult {
    stdout: string | null,
    time: string;
    memory: number;
    stderr: string | null;
    message: string | null;
    status: {
        id: number;
        description: string;
    };
}

interface Snippet {
    id: number;
    firstName: string;
    lastName: string;
    code: string;
    language: string;
    stdIn?: string | null;
    stdOut: string;
    createdAt: string;
    updatedAt: string;
    tags: string[]
}




type ExecuteCodeReturn<T extends boolean> = T extends true ? { success: true, judgeResult: JudgeResult } : { success: false, error: string | JudgeResult }
