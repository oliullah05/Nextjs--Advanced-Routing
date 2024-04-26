import wait from "@/lib/wait";
import Link from "next/link";

export default async function NotificationsPage() {
    await wait(4000)
    return (
        <div className="text-xl gap-4 p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
           <span>All NOTIFICATIONS</span>
           <div>
            <Link className="text-blue-400" href={"/parallel-dashboard/seen"}>SEEN</Link>
           </div>
        </div>
    );
}