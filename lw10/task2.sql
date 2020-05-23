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
WHERE
    sqd_name = 'ИВТ'