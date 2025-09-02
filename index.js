const students = [
      { name:"A",marks:85 },
      { name:"B",marks:42 },
      { name:"C",marks:73 },
      { name:"D",marks:55 },
    ];

    students.map((student) => 
        {
      let grade = "";

      if (student.marks >= 80) grade = "A";
      else if (student.marks >= 60) grade = "B";
      else if (student.marks >= 40) grade = "C";
      else grade = "F";

      console.log(`${student.name} gets grade ${grade}`);
    });

    const firstStudent = students[0];
    let grade = "";
    if(firstStudent.marks>=80) grade="A";
    else if(firstStudent.marks>=60)grade="B";
    else if (firstStudent.marks >= 40)grade="C";
    else grade="F";

    document.getElementById("1").innerText =`${firstStudent.name} gets grade ${grade}`;
    document.getElementById("1").innerText =`${students[1].name} gets grade ${grade}`;
    document.getElementById("1").innerText =`${students[2].name} gets grade ${grade}`;

