import { bundledLanguages, getHighlighter } from 'shiki/bundle/web';



export const getHighlightedCode = async ({ code, language }: { code: string, language: SupportedLanguages }) => {

    const highlighter = await getHighlighter({
        themes: ['aurora-x'],
        langs: [...Object.keys(bundledLanguages)]
    })


    return highlighter.codeToHtml(code, {
        lang: language.toLowerCase(),
        theme: "aurora-x"
    })
}

