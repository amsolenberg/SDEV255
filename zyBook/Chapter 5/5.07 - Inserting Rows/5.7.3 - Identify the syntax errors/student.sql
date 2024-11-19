-- Syntactically correct statement
INSERT INTO student (stu_id, last_name) VALUES (888, 'Wang');

-- Missing single quotation marks
INSERT INTO student VALUES (444, Black, Zack, 3.2);

-- Data is not in the correct order
INSERT INTO student VALUES ('Parks', 'Ebony', 555, 3.9);

-- Missing parenthesis around data values
INSERT INTO student VALUES 222, 'Woods', 'Darnell', 3.0;

-- Illegal use of single quotation mark
INSERT INTO student VALUES (777, 'O'Malley', 'Bill', 3.0);