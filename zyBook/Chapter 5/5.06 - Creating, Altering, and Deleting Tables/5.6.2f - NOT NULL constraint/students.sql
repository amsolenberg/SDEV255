CREATE TABLE
    student (
        stu_id INTEGER PRIMARY KEY,
        last_name VARCHAR(50),
        first_name VARCHAR(50) NOT NULL,
        birth_date DATE,
        gpa DECIMAL(2, 1)
    );