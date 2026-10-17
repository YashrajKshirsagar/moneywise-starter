import React from 'react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#68776f]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.path && !isLast ? (
                <button
                  type="button"
                  onClick={() => onNavigate(item.path!)}
                  className="hover:text-[#16382c] hover:underline transition-colors focus:outline-none"
                >
                  {item.label}
                </button>
              ) : (
                <span className={isLast ? 'text-[#16382c] font-semibold' : ''}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-[#a4b1aa]" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
