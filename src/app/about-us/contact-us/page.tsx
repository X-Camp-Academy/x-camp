import dynamic from "next/dynamic";
const ContactUsContent = dynamic(() => import("@/components/about-us/contact-us"), { ssr: false });


export const metadata = {
  title: "X-Camp Academy",
  description: "X-Camp Academy | Programming and Education news from X-Camp",
};

const ContactUs: React.FC = () => {
  return <ContactUsContent />;
};

export default ContactUs;
