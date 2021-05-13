import { mongoose } from "./connect";
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
  nombre: String,
  apellido: String,
  dni: String,
  domicilio: String,
  alta: String,
  email: String,
  actividad: {
    sesiones: [String],
  },
});

export const Users = mongoose.model("Users", UsersSchema);
/*
const u = new Users({
  nombre: "pruebassssss",
  apellido: "Casas",
  dni: "3423832",
  email: "acasas@gmail.com",
  alta: "si",
  domicilio: "L. alem 2432",
  actividad: {
    sesiones: ["1", "4", "3", "12", "1", "3", "14"],
  },
});
u.save();
*/