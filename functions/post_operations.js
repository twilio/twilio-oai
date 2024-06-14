import { isInstancePath } from './utils';

export default (ops) => { 
    const results = []
    for (const [pathKey, pathObj] of Object.entries(ops)) {
        if (isInstancePath(pathKey)) {
            if (pathObj["put"]) {
                results.push(
                    {
                    message: "put operation not supported in instance path, please rename put to post ",
                    });
            }
        }
    }
    return results
}