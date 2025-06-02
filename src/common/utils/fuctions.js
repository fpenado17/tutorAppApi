export const _getFilterFromQueryParams = (queryParams = {})=>{
    const filter = {}
    const excludeKeys = ['top', 'limit', 'skip', 'sort', 'fields'];
    for (const key in queryParams) {
     if (
       Object.prototype.hasOwnProperty.call(queryParams, key) &&
       !excludeKeys.includes(key)
     ) {
       const value = queryParams[key];
       const valueSplit = String(value).trim().split(',');

       filter[key] = valueSplit.length > 1 ? valueSplit : value;
     }
  }

  return filter;
}