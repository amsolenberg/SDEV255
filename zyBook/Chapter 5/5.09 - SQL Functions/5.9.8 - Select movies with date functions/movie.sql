/* 
The given SQL creates a movie table, inserts some movies, and selects all movies.

Using the YEAR() and MONTH() functions, modify the SELECT statement to select movies that are released after 2017 or in November.

Run your solution and verify the result table shows just the movies with IDs 5, 6, 7, and 9. 
 */
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
    ('Rogue One: A Star Wars Story', 'PG-13', '2016-12-16'),
    ('Casablanca', 'PG', '1943-01-23'),
    ('The Dark Knight', 'PG-13', '2008-07-18'),
    ('Hidden Figures', 'PG', '2017-01-06'),
    ('Toy Story', 'G', '1995-11-22'),
    ('Rocky', 'PG', '1976-11-21'),
    ('Crazy Rich Asians', 'PG-13', '2018-08-15'),
    ('Bridget Jones''s Diary', 'PG-13', '2001-04-13'),
    ('Avengers: Endgame', 'PG-13', '2019-04-26');

SELECT
    *
FROM
    movie
WHERE
    YEAR (release_date) > 2017
    OR MONTH (release_date) = 11;