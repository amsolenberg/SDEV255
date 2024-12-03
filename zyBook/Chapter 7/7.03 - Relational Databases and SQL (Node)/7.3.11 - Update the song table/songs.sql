CREATE TABLE
    song (
        song_id INT,
        title VARCHAR(60),
        artist VARCHAR(60),
        release_year INT,
        PRIMARY KEY (song_id)
    );

INSERT INTO
    song
VALUES
    (100, 'Blinding Lights', 'The Weeknd', 2019),
    (200, 'One', 'U2', 1991),
    (
        300,
        'You\'ve Lost That Lovin\' Feeling',
        'The Righteous Brothers',
        1964
    ),
    (400, 'Johnny B. Goode', 'Chuck Berry', 1958);

UPDATE song SET title = 'With or Without You'
WHERE song_id = 200;

UPDATE song SET artist = 'Aretha Franklin'
WHERE song_id = 300;

UPDATE song SET release_year = 2021
WHERE release_year > 1990;

SELECT * 
FROM song;