import { containsPathInstance, isInstancePath } from './utils';

const isRecordKey = (value) => {
    const results = [];
    let flag = false;
    for (const [_, prop ] of Object.entries(value["responses"]["200"]["content"]["application/json"]["schema"]["properties"])) {
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
    };
    return results;
}


export default (ops) => {
    const results = []
    for (const [pathKey, pathObj] of Object.entries(ops)) {
        if (!containsPathInstance(pathObj) && !isInstancePath(pathKey)) {
            for (const [key, value] of Object.entries(pathObj)) {
                if (key == "get") {
                    results.concat(isRecordKey(value));
                }  
            }
        };
    }
  return results;
};