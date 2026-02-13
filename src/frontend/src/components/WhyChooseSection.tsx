import { Heart, Sparkles, Gift, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    icon: Heart,
    title: 'Handmade with love & care',
    description: 'Every item is crafted with attention to detail and genuine care',
  },
  {
    icon: Sparkles,
    title: 'Unique & stylish designs for all ages',
    description: 'From babies to adults, we have something special for everyone',
  },
  {
    icon: Gift,
    title: 'Perfect gifts for birthdays, weddings, or just because',
    description: 'Thoughtful, handmade gifts that show you care',
  },
  {
    icon: Shield,
    title: 'Soft, safe, and high-quality materials',
    description: 'We use only the best materials to ensure comfort and durability',
  },
];

export default function WhyChooseSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {reasons.map((reason, index) => {
        const Icon = reason.icon;
        return (
          <Card key={index} className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{reason.title}</CardTitle>
                  <CardContent className="p-0 text-sm text-muted-foreground">
                    {reason.description}
                  </CardContent>
                </div>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
