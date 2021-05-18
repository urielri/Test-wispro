export interface UserInfo {
    _id?: string;
    nombre: string;
    apellido: string;
    email: string;
    dni: string;
    alta: string;
    domicilio: string;
    actividad?: {
        sesiones: number[];
    }
}
export interface User {
    user: string;
    psswd: string;
    logged: boolean;
  }