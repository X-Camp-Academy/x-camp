import { PageTitle, generateMetadata } from '@/utils/metadata';
import ContactUsContent from '@/components/about-us/contact-us';

export const metadata = {
  ...generateMetadata(PageTitle.ContactUs)
};

const ContactUs: React.FC = () => {
  return <ContactUsContent />;
};

export default ContactUs;
