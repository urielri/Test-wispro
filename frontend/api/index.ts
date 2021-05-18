const API: string = "http://localhost:3030";
export const getUsers = async () => {
  try {
    const request = await fetch(`${API}/users/`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};

export const getUser = async (id: string) => {
  try {
    const request = await fetch(`${API}/user/${id}`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const updateUser = async (
  id: string,
  datos: { nombre: string; apellido: string; dni: string; domicilio: string }
) => {
  try {
    const request = await fetch(
      `${API}/update/${id}&${datos.nombre}&${datos.apellido}&${datos.dni}&${datos.domicilio}`
    );
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const deleteUser = async (id: string) => {
  try {
    const request = await fetch(`${API}/delete/${id}`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const checkAdmin = async (user: string, psswd: string) => {
  try {
    const request = await fetch(`${API}/admin/${user}&${psswd}`);
    const response = request.json();
    return response;
  } catch (err) {
    return err;
  }
};
