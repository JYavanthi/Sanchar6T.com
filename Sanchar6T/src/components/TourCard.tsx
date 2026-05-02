interface TourCardProps {
  title: string;
  description: string;
  image: string;
  duration?: string;
}

const TourCard = ({ title, description, image, duration }: TourCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="flex">
        <div className="w-28 h-24 flex-shrink-0 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10 group-hover:to-primary/20 transition-colors duration-300"></div>
        </div>
        
        <div className="flex-1 p-4">
          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 text-base">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* Hover Arrow */}
        <div className="flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            className="w-5 h-5 text-primary transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TourCard;