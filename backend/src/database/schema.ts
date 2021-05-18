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
