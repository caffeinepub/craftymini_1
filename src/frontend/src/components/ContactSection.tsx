import { Mail } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Have questions? We'd love to hear from you. Reach out through email or Instagram.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground break-all">
                  minicrafty63@gmail.com
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a href="mailto:minicrafty63@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Instagram */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <SiInstagram className="h-4 w-4" />
                <span>Instagram</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  @minicrafty.co�
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/minicrafty.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiInstagram className="mr-2 h-4 w-4" />
                    Visit Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
