USE
    university;
SELECT
    name,
    last_name,
    age
FROM
    students
JOIN
    squad ON students.std_squad = squad.id
JOIN
    faculty ON squad.sqd_faculty = faculty.id
WHERE
    fclt_name = 'РТФ'