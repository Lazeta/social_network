export const updateObjectToArray = (
  items,
  itemsId,
  objPropName,
  newObjProps
) => {
  return items.map((u) => {
    if (u[objPropName] === itemsId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
