export default function getStudentsByLocation(getList, city) {
  if (Array.isArray(getList)){
    return getList.filter((cty) => cty.location === city);
  }
  return [];
}
