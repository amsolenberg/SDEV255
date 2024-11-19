CREATE TABLE
    faculty (
        fac_id INTEGER,
        last_name VARCHAR(50),
        first_name VARCHAR(50),
        dept_code VARCHAR(4),
        hire_date DATE,
        tenured BOOLEAN,
        PRIMARY KEY (fac_id),
        FOREIGN KEY (dept_code) REFERENCES department (dept_code)
    );