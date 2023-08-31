import dynamic from "next/dynamic";
const Article = dynamic(() => import("@/components/resources/article"));

export const metadata = {
  title: "X-Camp Academy",
  description: "X-Camp Academy | Programming and Education news from X-Camp",
};

export default function Page() {
  return <Article />;
}
