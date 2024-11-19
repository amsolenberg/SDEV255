-- Delete the student table
DROP TABLE student;

-- Removes the birth_date column
ALTER TABLE student
DROP COLUMN birth_date;

-- Chnanges birth_date data type to INT
ALTER TABLE student MODIFY birth_date INT;

-- Adds an address column
ALTER TABLE student ADD address VARCHAR(80) NOT NULL;