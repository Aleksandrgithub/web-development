USE
    university;
SELECT
    sqd_name,
    fclt_name
FROM
    students
JOIN
    squad ON students.std_squad = squad.id
JOIN
    faculty ON squad.sqd_faculty = faculty.id
WHERE
    name = 'Иван' AND last_name = 'Иванов'