# APIs

## Example requests and responses for a Music API

| Resource         | Request verb | Description                       | Status code    |
| ---------------- | ------------ | --------------------------------- | -------------- |
| /songs           | GET          | Get a list of all songs           | 200 OK         |
| /songs?genre=pop | GET          | Get all songs in the pop genre    | 200 OK         |
| /songs/234       | GET          | Get song with ID 234              | 200 OK         |
| /songs/999       | GET          | Get non-existing song with ID 999 | 404 Not Found  |
| /songs           | POST         | Create a new song                 | 201 Created    |
| /songs/234       | PUT          | Update song with ID 234           | 204 No Content |
| /songs/234       | DELETE       | Delete song with ID 234           | 204 No Content |
