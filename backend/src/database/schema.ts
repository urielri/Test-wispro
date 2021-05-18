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
    sesiones: [Number],
  },
});
const UserAdmin = new Schema({
  user: String,
  psswd: String,
});
export const UserA = mongoose.model("UserAdmin", UserAdmin);
export const Users = mongoose.model("Users", UsersSchema);
const u = new Users({
  nombre: "pruebassss",
  apellido: "Casas",
  dni: "3423832",
  email: "chismososConchiste@gmail.com",
  alta: "no",
  domicilio: "L. alem 2432",
  actividad: {
    sesiones: ["1", "10", "13", "11", "5", "13", "8"],
  },
});
u.save();