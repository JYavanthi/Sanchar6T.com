const ContactSection = () => {
  return (
    <div className="bg-background p-6">
      <h2 className="text-3xl font-bold text-foreground mb-2">Contact Us</h2>
      <p className="text-muted-foreground mb-8">Sanchar6T Bus Booking</p>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Address:</h3>
          <p className="text-muted-foreground leading-relaxed">
            #293, 17th cross,<br />
            sampige road, malleshwaram, 2nd<br />
            floor,<br />
            Above Vodafone outlet, Opp to<br />
            Vijaylakshmi Silk and Sarees.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-2">Contact No.:</h3>
          <p className="text-muted-foreground">
            +91 9731312275,<br />
            8197882511.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-2">Email:</h3>
          <p className="text-travel-blue">sanchar6t@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;