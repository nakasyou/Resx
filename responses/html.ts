import { deepMerge } from "../deps.ts"

export type HtmlInput = string

const defaultResponseOption = {
  headers: {
    "content-type": "text/html",
  }
}

/**
 * Returns HTML response.
 * @example
 * ```ts
 * import * as resx from "https://deno.land/x/resx"
 * 
 * const response: Response = resx.html(`
 *   <!doctype HTML>
 *   <html>
 *     <head>
 *        <!-- Head content here -->
 *     </head>
 *     <body>
 *       <h1>Hello World!!</h1>
 *     </body>
 *   </html>
 * `)
 * ```
 */
export function html(input: HtmlInput, responseOption?): Response { 
  const newResponseOption = deepMerge.deepMerge(defaultResponseOption, responseOption) // Merge response constructor option.

  return new Response(input, newResponseOption)
}
