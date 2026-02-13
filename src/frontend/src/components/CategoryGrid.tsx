import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const categories = [
  {
    id: 'booties',
    title: 'Baby Booties',
    description: 'Soft, cozy booties to keep little feet warm and stylish',
    image: '/assets/generated/1770877868282~2-2.png',
  },
  {
    id: 'clips',
    title: 'Hair Crochet Clips',
    description: 'Adorable handmade clips to add charm to any hairstyle',
    image: '/assets/generated/1770877868282~2-3.png',
  },
  {
    id: 'bow',
    title: 'Crochet Bows',
    description: 'Beautiful bows perfect for gifts or personal style',
    image: '/assets/generated/craftymini-cat-bow-user.dim_800x600.png',
  },
  {
    id: 'purse',
    title: 'Crochet Purses',
    description: 'Unique, stylish purses crafted with care and creativity',
    image: '/assets/generated/craftymini-cat-purse-user.dim_800x600.png',
  },
  {
    id: 'custom',
    title: 'Custom Orders',
    description: 'Have something special in mind? We can create it for you',
    image: '/assets/generated/craftymini-cat-custom-user.dim_800x600.png',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
