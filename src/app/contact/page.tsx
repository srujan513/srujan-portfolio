import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Contact Me
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={6} />
              </div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <h2 className="font-headline text-2xl font-bold text-foreground">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">Reach out via email for a quick response.</p>
                <a href="mailto:hello@persona.dev" className="text-primary hover:underline">
                  hello@persona.dev
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">Available for calls during business hours.</p>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">Based in the beautiful city of San Francisco, CA.</p>
                <p className="text-primary">Open to remote collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
