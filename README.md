# Resx
Resx is powerful response module.
## Example
If you want to response JSON:
```ts
import * as resx from "https://deno.land/x/resx"

const response: Response = resx.json({
  status: "ok",
})
```
For vanilla:
```ts
const json = JSON.stringify({
  status: "ok",
})
const response: Response = new Response(json, {
  headers: {
    "content-type": "application/json",
  },
})
```
...

```
＿人人人人人人人人人人人人人＿  
＞ Can you understand ＜  
￣Y^Y^Y^Y^^Y^Y^Y^Y^Y^Y￣
＿人人人人人人人人人人人人人人人＿  
＞　おわかりいただけただろうか　＜  
￣Y^Y^Y^YY^Y^Y^Y^Y^Y^Y^Y^￣
```

