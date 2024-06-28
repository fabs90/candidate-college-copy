import { useRouter } from "next/navigation";
import { getToken } from "./token";
import { jwtDecode } from "jwt-decode";

export type IPayload = {
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  permissions: any[];
  prv: string;
  roles: string;
  sub: string;
};

export function redirectBasedRole(token: string) {
  if (!token) return "/auth";
  const jwt = jwtDecode<IPayload>(token);
  const role = jwt.roles.toLowerCase().replace(" ", "-");
  switch (role) {
    case "chief":
      return "/c-level";
    case "vice-chief":
      return "/c-level";
    case "head":
      return "/head";
    case "co-head":
      return "/co-head";
    case "staff":
      return "/staff";
    default:
      return "/auth";
  }
}
