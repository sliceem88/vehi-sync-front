import { getUser } from "@/lib/queries/user";

export default async function DashboardPage() {
    const profileData = await getUser();

    console.log(profileData);
  return (
    <div>
        DashboardPage
    </div>
  );
}
