// 30 días de JavaScript
// playground Obtén el promedio de los estudiantes

function getStudentAverage(students) {
    const clase = {
        classAverage: 0,
        students: []
      }
      let classAverage = 0;
    
      //Calcula el promedio de cada estudiante
      for (const student of students) {
        let average = 0;
        let sumaCalif = 0
        for (const calif of student.grades) { sumaCalif += calif; };
        average = sumaCalif / (student.grades.length);
        classAverage = classAverage + average;
        average = Number(average.toFixed(2));
        clase.students.push({ name: student.name, average })
      }
      // calcula el promedio de todos los estudiantes
      classAverage = classAverage / (students.length);
      clase.classAverage = Number(classAverage.toFixed(2));
    
      return clase;}


console.log(
    getStudentAverage([
        { name: "Pedro", grades: [90, 87, 88, 90] },
        { name: "Jose", grades: [99, 71, 88, 96] },
        { name: "Maria", grades: [92, 81, 80, 96] },
    ])   
);