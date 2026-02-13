import { useState, FormEvent } from 'react';
import { Copy, Mail, Check } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface FormData {
  name: string;
  phone: string;
  address: string;
  itemName: string;
  category: string;
  size: string;
  color: string;
  quantity: string;
  notes: string;
}

export default function OrderNowForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    itemName: '',
    category: '',
    size: '',
    color: '',
    quantity: '1',
    notes: '',
  });

  const [showMessage, setShowMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateEmailBody = () => {
    return `Hello CraftyMini,

I would like to place an order with the following details:

Customer Details:
Name: ${formData.name}
Phone Number: ${formData.phone}
Address: ${formData.address}

Order Details:
Item Name/Design: ${formData.itemName}
Category: ${formData.category}
Size: ${formData.size}
Color: ${formData.color}
Quantity: ${formData.quantity}
${formData.notes ? `Additional Notes: ${formData.notes}` : ''}

Please confirm the details and send payment information.

Thank you!`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.address || !formData.itemName || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }

    if (parseInt(formData.quantity) < 1) {
      alert('Quantity must be at least 1');
      return;
    }

    const subject = encodeURIComponent('CraftyMini Order Request');
    const body = encodeURIComponent(generateEmailBody());
    const mailtoLink = `mailto:minicrafty63@gmail.com?subject=${subject}&body=${body}`;

    // Try to open mailto
    window.location.href = mailtoLink;

    // Show fallback message
    setShowMessage(true);
  };

  const copyToClipboard = () => {
    const message = generateEmailBody();
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Order Form</CardTitle>
          <CardDescription>
            Fill in your details and we'll get back to you with confirmation and payment information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Customer Details</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  required
                  placeholder="Your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  required
                  placeholder="Your delivery address"
                  rows={3}
                />
              </div>
            </div>

            <Separator />

            {/* Order Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Order Details</h3>

              <div className="space-y-2">
                <Label htmlFor="itemName">Item Name / Design *</Label>
                <Input
                  id="itemName"
                  value={formData.itemName}
                  onChange={(e) => handleChange('itemName', e.target.value)}
                  required
                  placeholder="Describe the item you want"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Baby Booties">Baby Booties</SelectItem>
                    <SelectItem value="Hair Crochet Clip">Hair Crochet Clip</SelectItem>
                    <SelectItem value="Crochet Bow">Crochet Bow</SelectItem>
                    <SelectItem value="Crochet Purse">Crochet Purse</SelectItem>
                    <SelectItem value="Custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="size">Size</Label>
                  <Input
                    id="size"
                    value={formData.size}
                    onChange={(e) => handleChange('size', e.target.value)}
                    placeholder="e.g., Small, 0-6 months"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    value={formData.color}
                    onChange={(e) => handleChange('color', e.target.value)}
                    placeholder="e.g., Pink, Blue"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="Any special requests or details"
                  rows={3}
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Mail className="mr-2 h-5 w-5" />
              Send Order via Email
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Fallback Message */}
      {showMessage && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Order Details Ready</CardTitle>
            <CardDescription>
              If your email client didn't open, you can copy the message below and send it manually
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email Address:</Label>
              <div className="flex items-center gap-2">
                <Input value="minicrafty63@gmail.com" readOnly className="font-mono" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Message:</Label>
              <Textarea
                value={generateEmailBody()}
                readOnly
                rows={12}
                className="font-mono text-sm"
              />
            </div>

            <Button onClick={copyToClipboard} variant="outline" className="w-full">
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Message
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Instagram Option */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SiInstagram className="h-5 w-5" />
            Order via Instagram
          </CardTitle>
          <CardDescription>
            Prefer to order through Instagram? Send us a DM with your order details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            asChild
          >
            <a
              href="https://www.instagram.com/minicrafty.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="mr-2 h-5 w-5" />
              Message @minicrafty.co� on Instagram
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
