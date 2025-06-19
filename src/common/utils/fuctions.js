export const _getFilterFromQueryParams = (queryParams = {})=>{
    const filter = {}
    const excludeKeys = ['top', 'limit', 'skip', 'sort', 'fields'];
    for (const key in queryParams) {
     if (
       Object.prototype.hasOwnProperty.call(queryParams, key) &&
       !excludeKeys.includes(key)
     ) {
       const value = queryParams[key];

       if (key.endsWith('_ilike')) {
         const field = key.replace('_ilike', '');
         const pattern = String(value).trim().replace(/%/g, '.*');
         filter[field] = { $regex: new RegExp(pattern, 'i') };
       } else {
         const valueSplit = String(value).trim().split(',');
         filter[key] = valueSplit.length > 1 ? valueSplit : value;
       }
     }
  }

  return filter;
}