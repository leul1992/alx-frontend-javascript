export default function updateStudentGradeByCity(getList, city, newGrades) {
  return getList.map(
    (theList) => newGrades.filter(
        (grades) => theList.id == grades.studentId)
    );
}