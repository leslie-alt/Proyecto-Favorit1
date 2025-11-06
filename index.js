import express from "express"
import rutas from "./routes/rutas.js"
import conectarBD from "./bd/bd.js"
import session from "express-session";



const app = express()
app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.use(session({
  secret: "clave_super_secreta",  // puedes cambiarlo
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,  // en true si usas HTTPS
    maxAge: 1000 * 60 * 60 // 1 hora
  }
}));

// Use the router
app.use("/", rutas)

const PORT = process.env.PORT; // Render asigna este puerto automáticamente
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor en puerto ${PORT}`);
});

//coneccion a render 

const startServer = async () => {
  try {
    await conectarBD(); // Espera la conexión a MongoDB Atlas
    console.log("✅ Conexión establecida con MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB o iniciar el servidor:", error.message);
  }
};

startServer();


