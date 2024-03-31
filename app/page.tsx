import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        This is a screen for authenticated users only
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Home;