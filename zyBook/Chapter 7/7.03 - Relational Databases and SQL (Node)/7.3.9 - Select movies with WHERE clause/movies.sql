CREATE TABLE
    movie (
        movie_id INT AUTO_INCREMENT,
        title VARCHAR(100),
        rating CHAR(5),
        release_date DATE,
        PRIMARY KEY (movie_id)
    );

INSERT INTO
    movie (title, rating, release_date)
VALUES
    ('Casablanca', 'PG', '1943-01-23'),
    ('Bridget Jones\'s Diary', 'PG-13', '2001-04-13'),
    ('The Dark Knight', 'PG-13', '2008-07-18'),
    ('Hidden Figures', 'PG', '2017-01-06'),
    ('Toy Story', 'G', '1995-11-22'),
    ('Rocky', 'PG', '1976-11-21'),
    ('Crazy Rich Asians', 'PG-13', '2018-08-15');

-- Modify the SELECT statement:
SELECT
    *
FROM
    movie
WHERE
    release_date < '2000-01-01';