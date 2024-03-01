module.exports = (ops) => {
    const results = []
    const info = ops.info
    if (info.servers) {
        return results
    }
    let flag = false;
    for (const [_, pathObj] of Object.entries(ops.paths)) {
        if (!pathObj.servers) {
            flag = true
        }
    }
    if (flag == true) {
        results.push(
            {
            message: "Either add serverurl globally or add it serverurl for all the paths",
            }
        )
    }
    return results
}