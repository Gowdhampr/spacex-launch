/**
 * Get Current Year
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Get params by name
 */
export function getParamsByName(e) {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get(e);
}

/**
 * Generate query params by object
 */
export function generateQueryString(paramsObject){

  if (typeof paramsObject !== 'object') return '';
  const queryString = [];
  Object.keys(paramsObject).forEach((key) => (
    paramsObject[key] != null && String(paramsObject[key]) && queryString.push(`${key}=${paramsObject[key]}`)
  ));

  return queryString.join('&');
}
