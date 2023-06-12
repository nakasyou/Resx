import { deepMerge } from "../deps.ts"

type Func = ()=>void
export type JavaScriptInput = Func | string

const defaultResponseOption = {
  headers: {
    "content-type": "text/javascript",
  },
}

/**
 * Returns JavaScript response.
 * @param input - Script string or JavaScript function.
 * @example
 * ```ts
 * import * as resx from "https://deno.land/x/resx"
 * 
 * const response: Response = resx.javascript(()=>{
 *   alert("Hello!")
 * })
 * ```
 * @example
 * ```ts
 * import * as resx from "https://deno.land/x/resx"
 * 
 * const response: Response = resx.javascript(`alert("Hello!")`)
 * ```
 */
export function html(input: JavaScriptInput, responseOption): Response { 
  const newResponseOption = deepMerge.deepMerge(defaultResponseOption, responseOption) // Merge response constructor option.
  
  let code: string
  if(typeof input === "string"){
    // Is string
    code = input
  }else{
    // Is function
    code = input.toString() + "()"
  }
  return new Reponse(code, newResponseOption)
}
