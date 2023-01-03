export default function getListStudentIds(getList) {
  if (Array.isArray(getList)) {
    return getList.map((lists) => lists.id);
  }
  return [];
}
