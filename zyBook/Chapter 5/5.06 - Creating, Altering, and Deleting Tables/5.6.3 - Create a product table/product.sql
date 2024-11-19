CREATE TABLE
    product (
        id INTEGER PRIMARY KEY,
        name VARCHAR(40),
        product_type CHAR(3),
        origin_date DATE,
        weight DECIMAL(5, 1)
    );

INSERT INTO
    product (id, name, product_type, origin_date, weight)
VALUES
    (100, 'Tricorder', 'COM', '2020-08-11', 2.4),
    (200, 'Food replicator', 'FOD', '2020-09-21', 54.2),
    (
        300,
        'Cloaking device',
        'SPA',
        '2019-02-04',
        177.9
    );

SELECT
    *
FROM
    product;