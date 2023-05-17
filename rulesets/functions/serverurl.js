module.exports = (ops) => {
    const results = []
    const info = ops.info
    if (info.servers) {
        return results
    }
    let flag = false;
    for (const [pathKey, pathObj] of Object.entries(ops.paths)) {
        if (!pathObj.servers) {
            flag = true
        }
    }
    if (flag == true) {
        results.push(
            {
            message: "Either add serverurl globallay or add it all the local paths",
            }
        )
    }
    return results
}