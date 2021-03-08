# Path Query
process url and get its properties in Node with this small and effective module

### Usage:
```javascript
const pq = requirre('path-query');

const url = "https://www.youtube.com/watch?v=abcd1234";

pq.getQuery(url);
```
Returns
```json
{
  "protocol" : "https",
  "subdomain" : "www",
  "domain" : "youtube.com",
  "port" : 80,
  "paths" : ["watch"],
  "resource" : "watch",
  "extension" : null,
  "forbidden" : false,
  "variables" : ["v=abcd1234"]
}
```

### Functions:
```javascript
// Get all data in a json object
pathquery.getQuery(path);

// Get only the protocol
pathquery.getProtocol(path);

// Get only the subdomain
pathquery.getSubdomain(path);

// Get only the domain
pathquery.getDomain(path);

// Get only the port
pathquery.getPort(path);

// Get only the paths (Return a list)
pathquery.getPaths(path);

// Get only the resource name (file/script name)
pathquery.getResource(path);

// Get only the resource extension (i.e; .html .img .css .php)
pathquery.getExtension(path);

// Get if the resource if forbidden (file name starts with a dot)
pathquery.getForbidden(path);

// Get list variables (i.e; domain.com/?variable1=value1&variable2=value2)
pathquery.getVariables(path);
```

###### Coded with ❤️ by aeon#1116 on * Discord
