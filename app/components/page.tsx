'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { Code2, Search, AlertCircle, Mail, Lock, ChevronRight, Check, Menu, X, CreditCard, User, Bell, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Link from 'next/link';

const components = [
  // ... (previous components array remains unchanged)
];

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Array.from(new Set(components.map(c => c.category)));

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-lg">UI Playground</span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search components..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold mb-2">Categories</h3>
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setSelectedCategory('all')}
              >
                All Components
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </aside>

          <div className="flex-1 space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Components</h1>
              <p className="text-sm text-muted-foreground">
                {filteredComponents.length} components
              </p>
            </div>
            
            <div className="grid gap-8">
              {filteredComponents.length > 0 ? (
                filteredComponents.map((component) => (
                  <div key={component.id} className="border rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold">{component.name}</h2>
                        <p className="text-sm text-muted-foreground">{component.category}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md bg-muted/50">
                      {component.preview}
                    </div>

                    <Tabs defaultValue="react">
                      <TabsList>
                        {component.frameworks.map((framework) => (
                          <TabsTrigger key={framework} value={framework}>
                            {framework.charAt(0).toUpperCase() + framework.slice(1)}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {component.frameworks.map((framework) => (
                        <TabsContent key={framework} value={framework}>
                          <div className="relative">
                            <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                              <code>{component.code[framework]}</code>
                            </pre>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => {
                                navigator.clipboard.writeText(component.code[framework]);
                                toast.success('Code copied to clipboard');
                              }}
                            >
                              Copy
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">No components found</h2>
                  <p className="text-muted-foreground">
                    {searchQuery ? (
                      <>No components match your search "{searchQuery}"</>
                    ) : (
                      <>No components found in the selected category</>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}