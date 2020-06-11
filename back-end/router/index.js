const express = require('express');
// const movie = require('../dataBase/movieModel.js');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  console.log(req.query);
  if (req.query.extra === 'abcd') {
    // console.log('hello');
    res.json({
      recordsTotal: 15,
      draw: req.query.draw,
      recordsFiltered: 30,
      data: [
        {
          name: 'time',
          age: 'Systajsdn j',
          height: 10
        },
        {
          name: 'time',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'time',
          age: 'Systajsdn j',
          height: 10
        },
        {
          name: 'time',
          age: 'Systenajsndj',
          height: 30
        }
      ]
    });
  }
  if (req.query.search.value === 'sss') {
    res.json({
      recordsTotal: 15,
      draw: req.query.draw,
      recordsFiltered: 30,
      data: [
        {
          name: 'lee',
          age: 'Systajsdn j',
          height: 10
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        }
      ]
    });
  } else {
    res.json({
      recordsTotal: 15,
      draw: req.query.draw,
      recordsFiltered: 30,
      data: [

        {
          name: 'lee',
          age: 'Systajsdn j',
          height: 10
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        },
        {
          name: 'liu',
          age: 'Systenajsndj',
          height: 30
        }
      ]
    });
  }
});
module.exports = indexRouter;
