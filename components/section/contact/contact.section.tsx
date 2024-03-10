import ContactForm from "@/components/contactform/contactform.component";
import ContactLinks from "@/components/contactlinks/contactlinks.component";
import Container from "@/components/container/container.component";
import SectionHeading from "@/components/sectionheading/sectionheading";

export default function ContactSection() {
  return (
    <section>
      <Container>
        <SectionHeading>Contact</SectionHeading>
        <div className="grid grid-cols-2 py-4 xs:grid-cols-1" >
          <ContactLinks />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

