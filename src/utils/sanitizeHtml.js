import DOMPurify from "dompurify"

export const sanitizeHtml = dirtyHtml => {
  if (typeof window === "undefined") return dirtyHtml

  return DOMPurify.sanitize(dirtyHtml)
}
