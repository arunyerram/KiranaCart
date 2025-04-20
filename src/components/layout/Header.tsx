
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useCartStore } from '@/store/cartStore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { items } = useCartStore();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented with search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-kirana-primary">Kirana<span className="text-kirana-accent">Cart</span></span>
          </Link>
          
          {/* Desktop Search */}
          <div className="hidden md:flex w-full max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="text"
                placeholder="Search for grocery items..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <Link to="/offers" className="nav-link">Offers</Link>
            
            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="nav-link">
                  <User size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/register" className="w-full">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/orders" className="w-full">Orders</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700 hover:text-kirana-primary transition-colors duration-200" size={24} />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-kirana-accent">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart className="text-gray-700" size={24} />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-kirana-accent">
                  {totalItems}
                </Badge>
              )}
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Search - shown below header */}
        <div className="mt-4 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search for grocery items..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="flex flex-col space-y-4 mt-4 md:hidden animate-fade-in">
            <Link to="/products" className="nav-link py-2 px-4 -mx-4 hover:bg-gray-50">Products</Link>
            <Link to="/categories" className="nav-link py-2 px-4 -mx-4 hover:bg-gray-50">Categories</Link>
            <Link to="/offers" className="nav-link py-2 px-4 -mx-4 hover:bg-gray-50">Offers</Link>
            <div className="border-t border-gray-200 pt-2">
              <Link to="/login" className="nav-link py-2 px-4 -mx-4 hover:bg-gray-50 flex items-center">
                <User size={18} className="mr-2" /> Login / Register
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
