import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const ContactUsContent = dynamic(() => import('@/components/about-us/contact-us'), { ssr: false });

export const metadata = {
  ...generateMetadata(PageTitle.ContactUs)
};

const ContactUs: React.FC = () => {
  return <ContactUsContent />;
};

export default ContactUs;
