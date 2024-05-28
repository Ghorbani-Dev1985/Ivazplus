"use client"
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loding";
import { useGetUsers } from "src/hooks/useAuth";

const Users = () => {
   const { data, isLoading } = useGetUsers();
   const {users} = data || {};
   if(isLoading) return <Loading />
   if(users.length === 0) return <Alert alertText="هیچ کاربری یافت نشد"></Alert>
     console.log(data)
    return ( 
        <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
             جزییات کاربرها  
      </span>
      </div>
     );
}
 
export default Users;



// biography
// : 
// "توسعه دهنده فرانت اند"
// cart
// : 
// {products: Array(1), coupon: null, _id: '66558eb98e3f51da8901f62f'}
// createdAt
// : 
// "2024-03-15T09:05:55.063Z"
// email
// : 
// "ghorbani.dev1985@gmail.com"
// isActive
// : 
// true
// isVerifiedPhoneNumber
// : 
// true
// likedProducts
// : 
// []
// name
// : 
// "محمد قربانی"
// otp
// : 
// {code: 246947, expiresIn: '2024-08-21T09:13:59.249Z'}
// phoneNumber
// : 
// "09112495538"
// resetLink
// : 
// null
// role
// : 
// "ADMIN"
// status
// : 
// 1