import { User } from "components/interface";
import { checkAdmin } from "api";

export async function setLogg(
  req: { user: string; psswd: string },
  setU: Function
): Promise<{ status: string }> {
  const u = {
    user: req.user,
    psswd: req.psswd,
    logged: false,
  };
  const response = await checkAdmin(u.user, u.psswd).then((res) => {
     res.status === "ok" ? (u.logged = true) : (u.logged = false);
     return res
  });
  setU(u);
  return {status: response};
}
export function check(ob: any) {
  if (typeof ob === "object") {
    const arrOb = Object.values(ob);
    const empty = [];
    arrOb.map((res) => {
      if (res === "") {
        empty.push(true);
      }
    });
    return empty.length === 0 ? true : false;
  }
}
