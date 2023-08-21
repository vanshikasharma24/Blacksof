import { useRouter } from "next/router";
import Home from "./Home";

const Index = () => {
  const router = useRouter();

  return (
    <div>
      <Home />
    </div>
  );
};

export default Index;
