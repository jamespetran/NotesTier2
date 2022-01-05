API - application programming interface
REST API, WEB API

A web server that works with data

This is an API design

CRUD              HTTP                    SQL
C CREATE          POST /endpoint          INSERT INTO database;                                       // inserts a single object
R READ            GET /endpoint           SELECT * FROM database;                                     // returns an array of objects
U UPDATE          PUT /endpoint/:id       UPDATE database SET $parameter = $newValue WHERE $id=:id;   // updates a single object
D DELETE          DELETE /endpoint/:id    DELETE FROM database WHERE id=:id;  // deletes a single object is much more common than deleting                                                                         all objects

another common web app interface is a detailed view: 
      R READ            GET /endpoint/:id       SELECT * FROM database WHERE $id=:id;                 // returns a single object


REST = REpresented State Transfer
Rest APIs... "is this API RESTful?"

for it to be RESTful....
- State passes back and forth between client and server
      
      Send state to the server
      POST /songs
      {
            "title": "Graceland",
            "artist": "Paul Simon",
      }

      Getting state back from the server:
      GET /songs
      [
            {
                  "title": "Graceland",
                  "artist": "Paul Simon",
            }
            {     
                  "title": "Boy in the Bubble",
                  "artist": "Paul Simon"
            }
      ]

**Using nonuns and verbs**

This is RESTful - because the HTTP methods are verbs and the endpoints are nouns

      GET /songs
      POST /songs

This is **not** RESTful - because there are VERBS in the endpoints instead of the METHODS

      POST /getSongs
      POST /createSongs
      POST /playSong

