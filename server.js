import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import todosRoutes from "./routes/todos.routes.js";

//Variables de entorno
const PORT = process.env.PORT || 8000;

//Con esto guardamos todos los metodos de expresss en una variable.
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", todosRoutes);

//************AQUI EMPIEZA EL SERVIDOR ************ */

//Con "listen" ya iniciamos el servidor

app.listen(PORT, () => {
  console.log(`El servidor esta iniciado en el puerto ${PORT}`);
});

//Get obtenemos los datos del servidor

app.get("/", (req, res) => {
  res.send("Hola mundo mio");
});

//Nos conectamos a MongoDB con mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error(err));
