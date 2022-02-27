const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://overlord:Edb22edb22@cluster0.e2awg.mongodb.net/Books-store")
  .then(() => console.log("Соединение с MongoDB прошло успешно"))
  .catch(() => console.log("Ошибка при соединении с MongoDB"));

app.use(require("./routes"));

app.listen(3000, () => console.log("Сервер успешно запушен"))
