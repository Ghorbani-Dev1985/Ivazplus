import Http from "./HttpServices"


export function GetOtp(data){
    return Http.post("/user/get-otp" , data).then(({data}) => data.data)
}

export function CheckOtp(data){
    return Http.post("/user/check-otp" , data).then(({data}) => data.data)
}

export function CompleteProfile(data){
    return Http.post("/user/complete-profile" , data).then(({data}) => data.data)
}

export function GetUser(){
    return Http.get("/user/profile").then(({data}) => data.data)
}

export function UpdateProfile(data) {
    return Http.patch("/user/update", data).then(({ data }) => data.data);
  }

export function LogoutUser(){
    return Http.post("/user/logout").then(({data}) => data.data)
}

export function GetAllUsers(){
    return Http.get("/admin/user/list").then(({data}) => data.data)
}

export function ChangeUserStatusApi({userId , data}){
    return Http.patch(`/admin/user/verify/${userId}` , data).then(({data}) => data.data)
}