
export default async function middlewareAuth(req){

    let strCookie = ""
    req.cookies.getAll().forEach((item) => {
        strCookie += `${item?.name}=${item.value}; `
    })
       const {data} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile` , {
            method: "GET",
            credentials: "include",
            headers: {
              Cookie: strCookie,
            },
        }).then((res) => res.json());
        const {user} = data || {};
        return user;
}