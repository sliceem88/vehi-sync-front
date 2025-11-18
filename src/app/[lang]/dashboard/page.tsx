import {auth} from "@/auth";
import {getProfile} from "@/lib/queries/getProfile";

export default async function DashboardPage() {
    const profileData = await getProfile();

    console.log(profileData);
  return (
    <div>
        DashboardPage
    </div>
  );
}
