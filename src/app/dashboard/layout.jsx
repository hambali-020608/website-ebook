
import AuthUser from "../../lib/authUser";
import Aside from "../../components/dashboard/Aside";

export default async function DashboardLayout({children}){
    const user = await AuthUser()
    return(
        <>
<Aside user={user}/>
<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
   {children}
   </div>
</div>
</>
    )
}