// import Header from "@/components/Header";
// import ContactSection from "@/components/contact-us/ContactSection";
// import ContactForm from "@/components/contact-us/ContactForm";
// import PeoplesChoice from "@/components/contact-us/PeoplesChoice";
// import Footer from "@/components/Footer";
// import Map from "@/components/contact-us/Map";

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
      
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Contact Info */}
//           <div className="lg:col-span-1">
//             <ContactSection />
//           </div>
          
//           {/* Middle Column - Contact Form */}
//           <div className="lg:col-span-1">
//             <ContactForm />
//           </div>
          
//           {/* Right Column - People's Choice */}
//           <div className="lg:col-span-1">
//             <PeoplesChoice />
//           </div>
//         </div>
//       </main>
//       <Map />
//       <Footer />
      
      
//     </div>
//   );
// };

// export default ContactUs;


import Header from "@/components/Header";
import ContactSection from "@/components/contact-us/ContactSection";
import ContactForm from "@/components/contact-us/ContactForm";
import PeoplesChoice from "@/components/contact-us/PeoplesChoice";
import Footer from "@/components/Footer";
import Map from "@/components/contact-us/Map";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <ContactSection />
          </div>
          
          {/* Middle Column - Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
          
          {/* Right Column - People's Choice */}
          <div className="lg:col-span-1">
            <PeoplesChoice />
          </div>
        </div>
      </main>
      <Map />
      <Footer />
      
      
    </div>
  );
};

export default ContactUs;