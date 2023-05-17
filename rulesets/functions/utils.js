
 export const containsPathInstance = (pathObj) => {
    if (pathObj["x-twilio"]["pathType"] === "instance") {
      return true;
    }
    return false;
}
  
export const isInstancePath = (path) => {
    const paths = path.split("/");
    const last = paths[paths.length - 1];
    if (last[last.length - 1] == '}') {
      return true;
    }
    return false;
};