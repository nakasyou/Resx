import { deepMerge } from "../deps.ts"

export type JsonInput = any

const defaultResponseOption = {
  headers: {
    "content-type": "application/json",
  }
}

/**
 * Returns JSON response.
 */
export function json(input: JsonInput, responseOption?): Response {
  const json = JSON.stringify(input)
  
  const newResponseOption = deepMerge.deepMerge(defaultResponseOption, responseOption) // Merge response constructor option.

  return new Response(json, newResponseOption)
}
