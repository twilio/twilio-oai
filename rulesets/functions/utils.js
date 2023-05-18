
 export const containsPathInstance = (pathObj) => {
    if (pathObj["x-twilio"]["pathType"] == "instance") {
      return true;
    }
    return false;
}
  
export const isInstancePath = (path) => {
    const paths = path.split("/");
    const last = paths[paths.length - 1];
    if (last[last.length - 1] == '}' || last.slice(last.length - 6 , last.length) == '}.json' ) {
      return true;
    }
    return false;
};

export const HTTP_OPS = ["get", "post", "delete", "put", "patch"];