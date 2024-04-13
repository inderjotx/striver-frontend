import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatTime(timeString: string): string {

  const date = new Date(timeString);

  if (isNaN(date.getTime())) {
    return "";
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    day: 'numeric',
    month: 'long',
  };


  const formatter = new Intl.DateTimeFormat('en-IN', options);
  return formatter.format(date);
}


export function getFilteredSnippets(data: Snippet[], filter: string[]) {

  if (typeof filter === "string") {
    filter = [filter]
  }

  const arr: Snippet[] = []
  data.forEach((snippet) => {

    let score = 0

    filter.forEach((tag) => {
      const idx = snippet.tags.indexOf(tag)
      if (idx === -1) {
        return
      }
      else {
        score++
      }
    })

    if (score === filter.length) {
      arr.push(snippet)
    }


  })


  return arr

}