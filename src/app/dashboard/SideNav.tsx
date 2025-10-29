'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Klanten', href: '/dashboard/customers' },
  { name: 'Facturen', href: '/dashboard/invoices' },
  { name: 'Instellingen', href: '/dashboard/settings' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="h-full bg-gray-100 p-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`block rounded px-4 py-2 text-sm font-medium transition hover:bg-gray-200 ${
                pathname === item.href ? 'bg-gray-300 font-semibold' : 'text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
