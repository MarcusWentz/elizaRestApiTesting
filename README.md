# elizaRestApiTesting

## Eliza

https://github.com/elizaOS/eliza

## Overview

Testing agent communication via REST API commands instead of the frontend interface for automation. 

Instead of using:
```ts
import { DirectClientInterface } from "@eliza/client-direct";
```
from:

https://elizaos.github.io/eliza/docs/packages/clients/#direct-client

the following npm package is used instead:
```js
const axios = require('axios');
```
since axios is a popular REST API package.
