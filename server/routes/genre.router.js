const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

router.get('/details/:id', (req, res) => {
  const queryText = `SELECT * FROM movies JOIN movies_genres 
                      ON movies_genres.movie_id = movies.id JOIN genres 
                      ON movies_genres.genre_id = genres.id 
                      WHERE movies.id = $1;`;
  console.log('req.params is', req.params);
  pool.query(queryText, [req.params.id])
    .then(result => {
      res.send(result.rows);
      console.log('THIS IS RESULT.ROWS', result.rows);
    })
    .catch((error) => {
      console.log('Error completing SELECT genre query', error);
      res.sendStatus(500);
    })
})

module.exports = router;