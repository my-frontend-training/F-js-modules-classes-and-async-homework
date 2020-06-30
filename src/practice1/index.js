import getUrl from "./utils";
import * as constant from "./constant";

const { path, port, address, region } = constant;
const url = getUrl(address, port, path);

export { url, region };
