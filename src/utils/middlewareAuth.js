import { ToStringCookies } from "./ToStringCookies";

export default async function middlewareAuth(req) {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: ToStringCookies(req.cookies),
      },
    }
  ).then((res) => res.json());
  const { user } = data || {};
  return user;
}
