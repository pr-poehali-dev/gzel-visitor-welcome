import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState<any[]>([]);
  const [filterType, setFilterType] = useState('all');

  const products = [
    { id: 1, name: 'Чайник "Гжельская роза"', price: 4500, category: 'Посуда', image: 'https://cdn.poehali.dev/files/393c22ce-70b8-4616-8b30-52c60536b024.jpg' },
    { id: 2, name: 'Статуэтка "Мальчик с рожком"', price: 3200, category: 'Фигурки', image: 'https://cdn.poehali.dev/files/b5809389-d23f-4059-834a-f765b31ab34d.jpg' },
    { id: 3, name: 'Ваза "Цветочный орнамент"', price: 5800, category: 'Посуда', image: 'https://cdn.poehali.dev/files/5d52e595-ad22-40f2-a51c-928ce53145ed.jpg' },
    { id: 4, name: 'Набор чайный "Классика"', price: 8900, category: 'Посуда', image: 'https://cdn.poehali.dev/files/393c22ce-70b8-4616-8b30-52c60536b024.jpg' },
    { id: 5, name: 'Подсвечник "Завиток"', price: 2100, category: 'Декор', image: 'https://cdn.poehali.dev/files/b5809389-d23f-4059-834a-f765b31ab34d.jpg' },
    { id: 6, name: 'Блюдо "Петельки"', price: 3800, category: 'Посуда', image: 'https://cdn.poehali.dev/files/5d52e595-ad22-40f2-a51c-928ce53145ed.jpg' },
  ];

  const masterClasses = [
    { title: 'Основы росписи', duration: '2 часа', level: 'Начинающий', price: 2500 },
    { title: 'Традиционные узоры', duration: '3 часа', level: 'Средний', price: 3500 },
    { title: 'Роспись посуды', duration: '4 часа', level: 'Продвинутый', price: 4500 },
  ];

  const videos = [
    { title: 'История гжельского промысла', duration: '15 мин' },
    { title: 'Технология изготовления керамики', duration: '22 мин' },
    { title: 'Секреты синего цвета', duration: '18 мин' },
    { title: 'Мастер-класс: простые элементы', duration: '35 мин' },
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const filteredProducts = filterType === 'all' 
    ? products 
    : products.filter(p => p.category === filterType);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Г</span>
              </div>
              <h1 className="text-3xl font-bold text-blue-900">Гжель</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('history')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                История
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Галерея
              </button>
              <button onClick={() => scrollToSection('masterclasses')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Мастер-классы
              </button>
              <button onClick={() => scrollToSection('videos')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Видео-уроки
              </button>
              <button onClick={() => scrollToSection('shop')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Магазин
              </button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                  <SheetDescription>
                    {cart.length === 0 ? 'Ваша корзина пуста' : `Товаров: ${cart.length}`}
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm">{item.name}</span>
                      <span className="font-semibold">{item.price} ₽</span>
                    </div>
                  ))}
                  {cart.length > 0 && (
                    <div className="pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-lg">Итого:</span>
                        <span className="font-bold text-lg text-blue-600">
                          {cart.reduce((sum, item) => sum + item.price, 0)} ₽
                        </span>
                      </div>
                      <Button className="w-full">Оформить заказ</Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-blue-900 mb-6 animate-fade-in">
            Добро пожаловать в мир Гжели
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Откройте для себя волшебство традиционного русского промысла. 
            Сине-белая керамика, созданная руками мастеров, хранит в себе историю 
            и красоту народного искусства.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('shop')} className="text-lg">
              <Icon name="ShoppingBag" className="mr-2" size={20} />
              Перейти в магазин
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('history')} className="text-lg">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Узнать историю
            </Button>
          </div>
        </div>
      </section>

      <section id="history" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-blue-900 mb-8 text-center">История Гжели</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              <strong className="text-blue-800">Гжель</strong> — один из самых известных народных художественных промыслов России. 
              Свое название промысел получил от названия местности «Гжельский куст», расположенной 
              на юго-востоке Московской области, в 60 км от Москвы.
            </p>
            <p>
              История гжельской керамики начинается с XIV века. В те времена в окрестностях 
              были обнаружены богатые залежи высококачественной глины. Первые упоминания о 
              Гжели встречаются в завещании Ивана Калиты в 1339 году.
            </p>
            <p>
              Традиционная гжельская роспись выполняется кобальтом, который после обжига 
              приобретает характерный синий цвет. Художники создают уникальные узоры — 
              от простых полосок до сложных растительных орнаментов, используя особую 
              технику мазка.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-8">
              <p className="text-blue-900 font-semibold">
                Сегодня гжель — это не только традиция, но и современное искусство, 
                которое продолжает развиваться и удивлять своей красотой.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">Галерея изделий</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="Посуда">Посуда</TabsTrigger>
              <TabsTrigger value="Фигурки">Фигурки</TabsTrigger>
              <TabsTrigger value="Декор">Декор</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Icon name="Image" size={64} className="text-blue-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge className="w-fit">{product.category}</Badge>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
            {['Посуда', 'Фигурки', 'Декор'].map(category => (
              <TabsContent key={category} value={category} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.filter(p => p.category === category).map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <Icon name="Image" size={64} className="text-blue-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <Badge className="w-fit">{product.category}</Badge>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="masterclasses" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">Мастер-классы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {masterClasses.map((mc, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Palette" size={24} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{mc.title}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex flex-col gap-2 mt-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{mc.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Award" size={16} />
                        <span>{mc.level}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{mc.price} ₽</span>
                  <Button>Записаться</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">Видео-уроки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Play" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{video.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>{video.duration}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">Магазин продукции</h2>
          
          <div className="mb-8 flex justify-center">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все изделия</SelectItem>
                <SelectItem value="Посуда">Посуда</SelectItem>
                <SelectItem value="Фигурки">Фигурки</SelectItem>
                <SelectItem value="Декор">Декор</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <Icon name="Package" size={64} className="text-blue-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge className="w-fit">{product.category}</Badge>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{product.price} ₽</span>
                  <Button onClick={() => addToCart(product)}>
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 text-3xl font-bold">Г</span>
            </div>
            <h3 className="text-4xl font-bold">Гжель</h3>
          </div>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Традиционный русский народный промысел с 1339 года
          </p>
          <div className="flex gap-6 justify-center mb-6">
            <Icon name="Facebook" size={24} className="cursor-pointer hover:text-blue-300 transition-colors" />
            <Icon name="Instagram" size={24} className="cursor-pointer hover:text-blue-300 transition-colors" />
            <Icon name="Youtube" size={24} className="cursor-pointer hover:text-blue-300 transition-colors" />
          </div>
          <p className="text-blue-300 text-sm">
            © 2024 Гжель. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
