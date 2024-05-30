"use client";
import Alert from "@/UI/Alert";
import Loading from "@/UI/Loading";
import { useGetUsers } from "src/hooks/useAuth";
import UsersList from "./UsersList";
import useTitle from "src/hooks/useTitle";
const Users = () => {
  const title = useTitle("کاربرها | ایواز پلاس");
  const { data, isLoading } = useGetUsers();
  const { users } = data || {};
  if (isLoading) return <Loading />;
  if (users.length === 0)
    return <Alert alertText="هیچ کاربری یافت نشد"></Alert>;
  return (
    <div className="flex flex-col items-center">
      <span className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
        جزییات کاربرها
      </span>
      <UsersList
        userArrayItem={users.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )}
      />
    </div>
  );
};

export default Users;
