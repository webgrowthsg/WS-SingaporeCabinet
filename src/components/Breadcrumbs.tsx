import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-max py-3">
      <ol className="flex items-center gap-1 text-xs text-neutral-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.path ? (
              <Link to={item.path} className="hover:text-brand-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-700" aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && <ChevronRight className="h-3 w-3 text-neutral-400" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
