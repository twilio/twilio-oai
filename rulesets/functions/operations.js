import { containsPathInstance, isInstancePath } from './utils';

const instanceMap = {
  "post": "Update",
  "get": "Fetch",
  "delete": "Delete"
};

const listMap = {
  "get" : "List", 
  "post": "Create"
}


export default (ops) => {
  const results = []
  for (const [pathKey, pathObj] of Object.entries(ops)) {
    let opMap = listMap
    if (containsPathInstance(pathObj) && isInstancePath(pathKey)) { 
      opMap = instanceMap
    }
    for (const [key, value] of Object.entries(pathObj)) {
      if (opMap[key] && !value.operationId.startsWith(opMap[key]))  {
        results.push(
                {
                  message: "Error operationId for path `${pathKey}`",
                }
        );
      };
    };
    }
  return results;
}

