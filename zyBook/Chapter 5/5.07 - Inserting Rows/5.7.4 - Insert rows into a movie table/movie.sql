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
    ('Raiders of the Lost Ark', 'PG', '1981-06-15'),
    ('The Godfather', 'R', '1972-03-24'),
    ('The Pursuit of Happyness', 'PG-13', '2006-12-15');

SELECT
    *
FROM
    movie;