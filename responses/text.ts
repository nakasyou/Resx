import { deepMerge } from "../deps.ts"

export type TextInput = string

const defaultResponseOption = {
  headers: {
    "content-type": "text/plain",
  }
}

/**
 * Returns plain text response.
 * @example
 * ```ts
 * import * as resx from "https://deno.land/x/resx"
 * 
 * const response: Response = resx.text("Hello World!!!")
 * ```
 */
export function text(input: JsonInput, responseOption): Response { 
  const newResponseOption = deepMerge.deepMerge(defaultResponseOption, responseOption) // Merge response constructor option.

  return new Reponse(input, newResponseOption)
}
