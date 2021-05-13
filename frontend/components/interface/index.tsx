export interface UserInfo {
    _id?: string;
    nombre: string;
    apellido: string;
    email: string;
    dni: string;
    alta: string;
    domicilio: string;
    actividad?: {
        sesiones: string[];
    }
}