## `WHERE` condition operators

| Operator | Description                                 | Example                    |
| -------- | ------------------------------------------- | -------------------------- |
| `=`      | Compares two values for equality            | `1 = 2` is false           |
| `!=`     | Compares two values for inequality          | `1 != 2` is true           |
| `<`      | Compares two values with <                  | `2 < 2` is false           |
| `<=`     | Compares two values with ≤                  | `2 <= 2` is true           |
| `>`      | Compares two values with >                  | `3 > 3` is false           |
| `>=`     | Compares two values with ≥                  | `3 >= 3` is true           |
| `AND`    | Performs logical AND between two conditions | `1 > 2 AND 2 < 3` is false |
| `OR`     | Performs logical OR between two conditions  | `1 > 2 OR 2 < 3` is true   |
| `NOT`    | Negates a condition                         | `NOT 1 > 2` is true        |

## Arithmetic operators

| Operator | Description                 | Example                        |
| -------- | --------------------------- | ------------------------------ |
| `+`      | Addition                    | `SELECT 1 + 2;` -- returns 3   |
| `-`      | Subtraction                 | `SELECT 2 - 1;` -- returns 1   |
| `*`      | Multiplication              | `SELECT 3 * 4;` -- returns 12  |
| `/`      | Division                    | `SELECT 7 / 2;` -- returns 3.5 |
| `%`      | Modulo (find the remainder) | `SELECT 7 % 2;` -- returns 1   |

## Common numeric functions

| Function      | Description                               | Example                                   |
| ------------- | ----------------------------------------- | ----------------------------------------- |
| `ABS(n)`      | Returns the absolute value of `n`         | `SELECT ABS(-5);` -- returns 5            |
| `LOG(n)`      | Returns the natural logarithm of `n`      | `SELECT LOG(10);` -- returns 2.302585...  |
| `POW(x, y)`   | Returns `x` to the power of `y`           | `SELECT POW(2, 3);` -- returns 8          |
| `ROUND(n, d)` | Returns `n` rounded to `d` decimal places | `SELECT ROUND(16.25, 1);` -- returns 16.3 |
| `SQRT(n)`     | Returns the square root of `n`            | `SELECT SQRT(25);` -- returns 5           |

## String functions

| Function                 | Description                                                                       | Example                                                                   |
| ------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `CONCAT(s1, s2, ...)`    | Returns the string that results from concatenating the string arguments           | `SELECT CONCAT("Dis", "en", "gage");` -- returns 'Disengage'              |
| `LOWER(s)`               | Returns the lowercase `s`                                                         | `SELECT LOWER("MySQL");` -- returns 'mysql'                               |
| `REPLACE(s, from, to)`   | Returns the string `s` with all occurrences of `from` replaced with `to`          | `SELECT REPLACE("This and that", "and", "or");` -- returns 'This or that' |
| `SUBSTRING(s, pos, len)` | Returns the substring from `s` that starts at position `pos` and has length `len` | `SELECT SUBSTRING("Boomerang", 1, 4);` -- returns 'Boom'                  |
| `TRIM(s)`                | Returns the string `s` without leading and trailing spaces                        | `SELECT TRIM("   test   ");` -- returns 'test'                            |
| `UPPER(s)`               | Returns the uppercase `s`                                                         | `SELECT UPPER("mysql");` -- returns 'MYSQL'                               |

## Date and time functions

| Function                 | Description                                                          | Example                                                          |
| ------------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `CURDATE()`              | Returns the current date in `YYYY-MM-DD` format                      | `SELECT CURDATE();` -- returns '2019-01-25'                      |
| `CURTIME()`              | Returns the current time in `HH:MM:SS` format                        | `SELECT CURTIME();` -- returns '21:05:44'                        |
| `NOW()`                  | Returns the current date and time in `YYYY-MM-DD HH:MM:SS` format    | `SELECT NOW();` -- returns '2019-01-25 21:05:44'                 |
| `DATE(expr)`             | Extracts the date from a date or datetime expression `expr`          | `SELECT DATE('2013-03-25 22:11:45');` -- returns '2013-03-25'    |
| `TIME(expr)`             | Extracts the time from a date or datetime expression `expr`          | `SELECT TIME('2013-03-25 22:11:45');` -- returns '22:11:45'      |
| `DAY(d)`                 | Returns the day from date `d`                                        | `SELECT DAY('2016-10-25');` -- returns 25                        |
| `MONTH(d)`               | Returns the month from date `d`                                      | `SELECT MONTH('2016-10-25');` -- returns 10                      |
| `YEAR(d)`                | Returns the year from date `d`                                       | `SELECT YEAR('2016-10-25');` -- returns 2016                     |
| `HOUR(t)`                | Returns the hour from time `t`                                       | `SELECT HOUR('22:11:45');` -- returns 22                         |
| `MINUTE(t)`              | Returns the minute from time `t`                                     | `SELECT MINUTE('22:11:45');` -- returns 11                       |
| `SECOND(t)`              | Returns the second from time `t`                                     | `SELECT SECOND('22:11:45');` -- returns 45                       |
| `DATEDIFF(expr1, expr2)` | Returns the difference between `expr1` and `expr2` in number of days | `SELECT DATEDIFF('2013-03-10', '2013-03-04');` -- returns 6      |
| `TIMEDIFF(expr1, expr2)` | Returns the difference between `expr1` and `expr2` in time values    | `SELECT TIMEDIFF('10:00:00', '09:45:30');` -- returns '00:14:30' |
