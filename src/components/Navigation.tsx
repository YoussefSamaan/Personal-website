import { Code2, Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavItem } from '../types';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
}

export function Navigation({
                             isMenuOpen,
                             setIsMenuOpen,
                             navItems,
                           }: NavigationProps) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
      <nav className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <button
                onClick={handleLogoClick}
                className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Code2 className="h-8 w-8 text-slate-700" />
              <span className="ml-2 text-xl font-semibold text-slate-700">
              Youssef Samaan
            </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navItems.map((item, index) => (
                  <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) =>
                          `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                              isActive
                                  ? 'bg-slate-100 text-slate-900'
                                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`
                      }
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.label}
                  </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden bg-slate-50 border-b border-slate-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center px-3 py-2 text-base font-medium rounded-md w-full ${
                                isActive
                                    ? 'bg-slate-100 text-slate-900'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`
                        }
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </NavLink>
                ))}
              </div>
            </div>
        )}
      </nav>
  );
}
