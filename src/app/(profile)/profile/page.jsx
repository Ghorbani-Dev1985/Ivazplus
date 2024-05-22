"use client";
import Loading from "@/UI/Loding";
import { useGetUser } from "src/hooks/useAuth";
import useTitle from "src/hooks/useTitle";
import ToLocalDateStringShort from "src/utils/ToLocalDateStringShort";


const Profile = () => {
    const title = useTitle("پروفایل کاربری | ایواز پلاس")
    const {data , isLoading} = useGetUser();
    const {user} = data || {};
    if(isLoading) return <Loading />
    return ( 
        <div>
            <p className="flex flex-col gap-y-2">
                <span><span className="text-emerald-500 font-bold">{user.name}</span> ؛ عزیز خوش آمدید</span>
             <span className="text-gray-400">تاریخ پیوستن: {ToLocalDateStringShort(user.createdAt)}</span>
            </p>
            
        </div>
     );
}
 
export default Profile;