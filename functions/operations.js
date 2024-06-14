import { containsPathInstance, isInstancePath, HTTP_OPS } from './utils';


const instanceMap = {
  "post": "Update",
  "get": "Fetch",
  "delete": "Delete"
};

const listMap = {
  "get" : "List", 
  "post": "Create"
}


const urlOperation = (pathKey, pathObj, isInstance) => {
  const results = []
  const opMap = isInstance ? instanceMap : listMap
  for (const [key, value] of Object.entries(pathObj)) {
    if (!HTTP_OPS.includes(key)) {
      continue
    }
    if (opMap[key] && !value.operationId.startsWith(opMap[key]))  {
      results.push(
              {
                message: "Error operationId for path " + pathKey + " has invalid operationId of " + value.operationId,
              }
      );
    };
  };
  return results
}

const pathTypeOperation = (pathKey, pathObj) => {
  const results = []
  for (const [key, value] of Object.entries(pathObj)) {
    if (!HTTP_OPS.includes(key)) {
      continue
    }
    if (!value.operationId.startsWith(listMap[key]) || !value.operationId.startsWith(instanceMap[key])) {
      const pathType = pathObj["x-twilio"]["pathType"] ;
      results.push({
        message: "Error operationId for path " + pathKey + " of defined pathType " + pathType + " has invalid operationId of " + value.operationId,
      });
    }
  }
  results;
}

export default (ops) => {
  const results = []
  for (const [pathKey, pathObj] of Object.entries(ops)) {
    if (containsPathInstance(pathObj) ) { 
      results.concat(pathTypeOperation(pathKey, pathObj));
    }
    else{
      results.concat(urlOperation(pathKey, pathObj, isInstancePath(pathKey)));
    }
  }
  return results;
}  

