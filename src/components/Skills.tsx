import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "SASS", "Bootstrap", "Tailwind CSS", "JavaScript", "TypeScript","React"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Java", "Python", "PHP", "REST APIs"]
    },
    {
      category: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "npm"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Habilidades</span> & Tecnologias
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas e tecnologias que domino
          </p>
        </div>

        <div 
          ref={skillsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${
                skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: skillsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;