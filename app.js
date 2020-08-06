import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/users', userRoutes);

// when a random route is inputed
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to this API.',
  })
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;

/* const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const { sequelize, User } = db;
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'hbs');

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Сервер ожидает подключения...');
    });
  })
  .catch((err) => console.log(err));

// получение данных
app.get('/', (req, res) => {
  User.findAll({ raw: true })
    .then((data) => {
      res.render('index.hbs', {
        users: data,
      });
    })
    .catch((err) => console.log(err));
});

app.get('/create', (req, res) => {
  res.render('create.hbs');
});

// добавление данных
app.post('/create', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const username = req.body.name;
  const useremail = req.body.email;
  const userpassword = req.body.password;
  const usertoken = req.body.token;

  User.create({
    name: username,
    email: useremail,
    password: userpassword,
    token: usertoken,
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

// получаем объект по id для редактирования
app.get('/edit/:id', (req, res) => {
  const userid = req.params.id;
  User.findAll({ where: { id: userid }, raw: true })
    .then((data) => {
      res.render('edit.hbs', {
        user: data[0],
      });
    })
    .catch((err) => console.log(err));
});

// обновление данных в БД
app.post('/edit', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const username = req.body.name;
  const useremail = req.body.email;
  const userpassword = req.body.password;
  const usertoken = req.body.token;
  const userid = req.body.id;
  User.update(
    {
      name: username,
      email: useremail,
      password: userpassword,
      token: usertoken,
    },
    { where: { id: userid } }
  )
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

// удаление данных
app.post('/delete/:id', (req, res) => {
  const userid = req.params.id;
  User.destroy({ where: { id: userid } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
}); */

//const BookModel = require('./models/book');
//const RecipeModel = require('./models/recipe');

// const sequelize = new Sequelize('fusion', 'fusion', 'fusion', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// const Book = BookModel(sequelize, Sequelize);
// const Recipe = RecipeModel(sequelize, Sequelize);

// Book.belongsToMany(Recipe, { through: 'Book_Recipe' });
// Recipe.belongsToMany(Book, { through: 'Book_Recipe' });

//  sequelize
//     .sync()
//     .then(() => {
//       console.log('Tables have been created');
//     })
//     .catch((err) => console.log(err));

// Book.create({
//   user_id: 1,
//   recipe_id: 1,
// }).then((book) => console.log(book));

// Recipe.create({
//   name: 'cake',
//   description: 'description',
//   ingredients: 'ingredients',
//   cooking: 'cooking',
//   book_id: 1,
// }).then((recipe) => console.log(recipe));
