import { containsPathInstance, isInstancePath } from './utils';


export default (ops) => {
    const results = []
    for (const [pathKey, pathObj] of Object.entries(ops)) {
        if (!containsPathInstance(pathObj) && !isInstancePath(pathKey)) {
            for (const [key, value] of Object.entries(pathObj)) {
                if (key === "get") {
                let flag = false;
                for (const [_, prop ] of Object.entries(pathObj["get"]["responses"]["200"]["content"]["application/json"]["schema"]["properties"])) {
                    if (prop["type"] == "array") {
                        flag = true;
                    }
                }
                if (!flag) {
                    results.push(
                        {
                        message: "Missing record Key",
                        }
                );
                }
            };
        }
    };
  }
  return results;
};