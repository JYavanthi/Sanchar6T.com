import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-form-bg p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-background border-border"
        />
        
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-background border-border"
        />
        
        <Input
          type="tel"
          placeholder="Phone No."
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="bg-background border-border"
        />
        
        <Select onValueChange={(value) => setFormData({ ...formData, destination: value })}>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder="Choose your destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tirupati">Tirupati</SelectItem>
            <SelectItem value="shirdi">Shirdi</SelectItem>
            <SelectItem value="madurai">Madurai Meenakshi</SelectItem>
            <SelectItem value="coorg">Coorg</SelectItem>
            <SelectItem value="kashi">Kashi</SelectItem>
          </SelectContent>
        </Select>
        
        <Textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-background border-border min-h-[120px]"
        />
        
        <Button 
          type="submit" 
          className="bg-[#134a74] hover:bg-[#134a74]-dark text-white px-8 py-2 rounded-md font-medium"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;