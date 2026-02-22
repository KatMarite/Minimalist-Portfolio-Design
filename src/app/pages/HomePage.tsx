import { HeroWithCursor } from '../components/HeroWithCursor';
import { ImpactMetrics } from '../components/ImpactMetrics';
import { FeaturedWork } from '../components/FeaturedWork';
import { Skills } from '../components/Skills';
import { AboutMe } from '../components/AboutMe';
import { Certificates } from '../components/Certificates';
import { ContactForm } from '../components/ContactForm';
import { AnimatedSection } from '../components/AnimatedSection';

export function HomePage() {
    return (
        <main>
            <HeroWithCursor />

            <AnimatedSection delay={0.1}>
                <ImpactMetrics />
            </AnimatedSection>

            <AnimatedSection delay={0.05} direction="up">
                <FeaturedWork />
            </AnimatedSection>

            <AnimatedSection delay={0.05} direction="right">
                <Skills />
            </AnimatedSection>

            <AnimatedSection delay={0.05} direction="left">
                <AboutMe />
            </AnimatedSection>

            <AnimatedSection delay={0.05} direction="up">
                <Certificates />
            </AnimatedSection>

            <AnimatedSection delay={0.05} direction="right">
                <ContactForm />
            </AnimatedSection>
        </main>
    );
}
