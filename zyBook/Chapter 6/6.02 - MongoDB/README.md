# MongoDB

## Common MongoDB Query Operators

| Operator      | Description                                                                        | Example                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `field:value` | Matches documents with fields that are equal to the given value.                   | `// Matches student with this _id`<br>`{ "_id" : ObjectId("62794229fc4ebd4933877a9d") }`                            |
| `$eq` `$ne`   | Matches values `=` or `≠` to the given value.                                      | `// Matches all docs except Sue`<br>`{ name: { $ne: "Sue" } }`                                                      |
| `$gt` `$gte`  | Matches values `>` or `≥` to the given value.                                      | `// Matches students with gpa > 3.5`<br>`{ gpa: { $gt: 3.5 } }`                                                     |
| `$lt` `$lte`  | Matches values `<` or `≤` to the given value.                                      | `// Matches students with gpa <= 3.0`<br>`{ gpa: { $lte: 3.0 } }`                                                   |
| `$in` `$nin`  | Matches values in or not in a given array.                                         | `// Matches Sue, Susan, or Susie`<br>`{ name: { $in: ["Sue", "Susan", "Susie"] } }`                                 |
| `$and`        | Joins query clauses with a logical AND, returns documents that match both clauses. | `// Matches student with gpa >= 3.0 and gpa <= 3.5`<br>`{ $and: [{ gpa: { $gte: 3.0 } }, { gpa: { $lte: 3.5 } }] }` |
| `$or`         | Joins query clauses with a logical OR, returns documents that match either clause. | `// Matches students with gpa >= 3.9 or gpa <= 3.0`<br>`{ $or: [{ gpa: { $gte: 3.9 } }, { gpa: { $lte: 3.0 } }] }`  |

## Common MongoDB Update Operators

| Operator       | Description                                        | Example                                                                                                                                                 |
| -------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$currentDate` | Sets a field's value to the current date/time      | `// Sue's "birthDate" : ISODate("2022-05-09T16:39:00.121Z")`<br>`db.students.updateOne({ name: 'Sue' },`<br>`   { $currentDate: { birthDate: true } })` |
| `$inc`         | Increments a field's value by the specified amount | `// Sue's "gpa" incremented from 3.1 to 3.2`<br>`db.students.updateOne({ name: 'Sue' },`<br>`   { $inc: { gpa: 0.1 } })`                                |
| `$rename`      | Renames a field                                    | `// Sue's "name" is now "firstName"`<br>`db.students.updateOne({ name: 'Sue' },`<br>`   { $rename: { name: 'firstName' } })`                            |
| `$set`         | Sets a field's value                               | `// Sue's "gpa" : 4.0`<br>`db.students.updateOne({ name: 'Sue' },`<br>`   { $set: { gpa: 4.0 } })`                                                      |
| `$unset`       | Removes a field                                    | `// Removes Sue's "gpa" and "birthDate" fields`<br>`db.students.updateOne({ name: 'Sue' },`<br>`   { $unset: { gpa: "", birthDate: "" } })`             |

