import qs from "qs";

export function getRedirectPathFromLocation() {
  const queryParams = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  if (location.pathname === "/logout") {
    return null;
  }

  const redirectPath = queryParams?.redirectPath;

  if (redirectPath && isValidUrl(decodeURIComponent(redirectPath))) {
    const urlObject = new URL(decodeURIComponent(redirectPath));

    return encodeURIComponent(`${urlObject.pathname}${urlObject.search}`);
  }

  return redirectPath;
}

export function isValidUrl(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  ); // fragment locator
  return !!pattern.test(str);
}
