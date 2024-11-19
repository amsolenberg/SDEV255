CREATE TABLE
    song (
        song_id INT,
        title VARCHAR(60),
        artist VARCHAR(60),
        release_year INT,
        genre VARCHAR(20),
        PRIMARY KEY (song_id)
    );

INSERT INTO
    song
VALUES
    (100, 'Hey Jude', 'Beatles', 1968, 'pop rock'),
    (200, 'You Belong With Me', 'Taylor Swift', 2008, 'country pop'),
    (300, 'You''re Still the One', 'Shania Twain', 1998, 'country pop'),
    (400, 'Need You Now', 'Lady Antebellum', 2011, 'country pop'),
    (500, 'You''ve Lost That Lovin'' Feeling', 'The Righteous Brothers', 1964, 'R&B'),
    (600, 'That''s The Way Love Goes', 'Janet Jackson', 1993, 'R&B'),
    (700, 'Smells Like Teen Spirit', 'Nirvana', 1991, 'grunge'),
    (800, 'Even Flow', 'Pearl Jam', 1992, 'grunge'),
    (900, 'Black Hole Sun', 'Soundgarden', 1994, 'grunge');

SELECT
    genre,
    COUNT(*),
    MAX(release_year)
FROM
    song
GROUP BY
    genre
HAVING
    MAX(release_year) > 1970;

