import dynamic from "next/dynamic";
const Login = dynamic(() => import("@/components/login"), { ssr: false });

export const metadata = {
  title: "X-Camp Academy",
  description: "X-Camp Academy | Programming and Education news from X-Camp",
};

const Page: React.FC = () => {
  return <Login />;
};

export default Page;