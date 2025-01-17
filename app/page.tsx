import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { ArrowRight, Code2, Layout, Palette } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-lg">UI Playground</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore, Preview, and Reuse{' '}
              <span className="text-primary">UI Components</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive library of beautiful, accessible, and responsive UI components
              ready for your next project.
            </p>
            <Link href="/components">
              <Button size="lg" className="font-semibold">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Layout className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Modern Components</h3>
                <p className="text-muted-foreground">
                  Beautifully designed components that follow modern design principles and best practices.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Code2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Framework Ready</h3>
                <p className="text-muted-foreground">
                  Code snippets available in multiple frameworks including React, Vue, and Angular.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Palette className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-muted-foreground">
                  Easily customize components to match your brand and design requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-5 w-5" />
              <span className="font-semibold">UI Playground</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}