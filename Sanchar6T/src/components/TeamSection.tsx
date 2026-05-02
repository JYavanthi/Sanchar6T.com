import React from "react";

const teamMembers = [
  {
    name: "Aarav Malhotra",
    role: "Co-founder, CEO",
    img: "https://productcatalo.my.canva.site/buses/_assets/media/5fef04bbcad1023330078533aeb7a7b4.jpg",
  },
  {
    name: "Rhea D’Souza",
    role: "COO & Head of Product",
    img: "https://productcatalo.my.canva.site/buses/_assets/media/5f53a69824f58fa5824c58affdb1722b.jpg",
  },
  {
    name: "Mateo Alvarez",
    role: "Head of Engineering",
    img: "https://productcatalo.my.canva.site/buses/_assets/media/6652ca4f30c7e7c98e26319daea7bc87.jpg",
  },
  {
    name: "Varun Shetty",
    role: "Software Engineer",
    img: "https://productcatalo.my.canva.site/buses/_assets/media/de10f9cf591915c94da66e5a72883f22.jpg",
  },
  {
    name: "Meera Nair",
    role: "Head of Sales and Support",
    img: "https://productcatalo.my.canva.site/buses/_assets/media/de4c96d99ae27a1ad29a34314a9b9a09.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Travel Specialist",
    img: "https://productcatalo.my.canva.site/buses/_assets/media/fbc57aadfeb2bc55af2e820afc0a6a8f.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          The passionate people behind our success
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-44 h-44 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
