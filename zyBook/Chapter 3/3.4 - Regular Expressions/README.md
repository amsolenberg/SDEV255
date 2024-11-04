# Pattern Tables

## Characters
| Character   | Description                                                 | Example                                             |
|-------------|-------------------------------------------------------------|-----------------------------------------------------|
| `*`         | Match the preceding character 0 or more times.              | `/ab*c/` matches "abc", "abbbbc", and "ac".         |
| `+`         | Match the preceding character 1 or more times.              | `/ab+c/` matches "abc" and "abbbbc" but not "ac".   |
| `?`         | Match the preceding character 0 or 1 time.                  | `/ab?c/` matches "abc" and "ac", but not "abbc".    |
| `^`         | Match at the beginning.                                     | `/^ab/` matches "abc" but not "cab".                |
| `$`         | Match at the end.                                           | `/ab$/` matches "cab" but not "abc".                |
| `\|`        | Match string on the left OR string on the right.            | `/ab\|cd/` matches "abc" and "bcd".                 |
| `[...]`     | Match any **one character** within the brackets.            | `[aeiou]` matches any vowel.                        |
| `[^...]`    | Match any **one character** ***except*** those in brackets. | `[^aeiou]` matches any character except a vowel     | 
| `[a-z]`     | Match any one character in the range (here, a-z)            | `[a-z]` matches any lowercase letter                | 
| `[0-9]`     | Match any one character in the range (here, 0-9)            | `[0-9]` matches any digit                           | 

## Metacharacters
| Metacharacter | Description                                                        | Example                                             |
|---------------|--------------------------------------------------------------------|-----------------------------------------------------|
| `.`           | Match any single character except newline.                         | `/a.b/` matches "aZb" and "a b".                    |
| `\w`          | Match any word character (alphanumeric and underscore).            | `/a\wb/` matches "aAb" and "a5b" but not "a b".     |
| `\W`          | Match any non-word character.                                      | `/a\Wb/` matches "a-b" and "a b" but not "aZb".     |
| `\d`          | Match any digit.                                                   | `/a\db/` matches "a2b" and "a9b", but not "aZb".    |
| `\D`          | Match any non-digit.                                               | `/a\Db/` matches "aZb" and "a b", but not "a2b".    |
| `\s`          | Match any whitespace character (space, tab, form feed, line feed). | `/a\sb/` matches "a b" but not "a4b".               |
| `\S`          | Match any non-whitespace character.                                | `/a\Sb/` matches "a!b" but not "a b".               |

## Mode Modifiers
| Flag | Description                                                                                     | Example                                                                              |
|------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| `i`  | Case insensitivity - Pattern matches upper or lowercase.                                        | `/aBc/i` matches "abc" and "AbC".                                                    |
| `m`  | Multiline - Pattern with `^` and `$` match beginning and end of any line in a multiline string. | `/^ab/m` matches the second line of `"cab \n abc"`, and `/ab$/m` matches the first line. |
| `g`  | Global search - Pattern is matched repeatedly instead of just once.                             | `/ab/g` matches "ab" twice in "cababc".                                              |
