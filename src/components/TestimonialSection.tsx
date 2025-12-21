import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TestimonialSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className={`${isMobile ? 'py-6' : 'py-12 md:py-20'} bg-sage-light`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`${isMobile ? 'max-w-sm mx-auto p-4 bg-background/50 rounded-lg border border-border/30' : 'max-w-3xl mx-auto'} text-center opacity-0 animate-fade-up`}>
          {/* 5 Stars */}
          <div className="flex justify-center gap-1 mb-3 md:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${isMobile ? 'w-3 h-3' : 'w-5 h-5 md:w-6 md:h-6'} text-yellow-500 fill-yellow-500`}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className={`${isMobile ? 'text-sm' : 'text-lg md:text-xl lg:text-2xl'} text-foreground font-heading leading-relaxed mb-3 md:mb-6`}>
            "Je recommande vivement Ilana. C'est une professionnelle sérieuse, à l'écoute et 
            bienveillante, qui accorde une réelle importance à la qualité de la relation thérapeutique."
          </blockquote>

          {/* Author */}
          <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm md:text-base'} mb-4 md:mb-8`}>
            — Hugo H., ostéopathe
          </p>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
