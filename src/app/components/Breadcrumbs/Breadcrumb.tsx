import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
  links: { name: string; href: string }[];
}

const Breadcrumb = ({ pageName, links }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="font-medium" href={link.href}>
                {link.name}
                {index < links.length - 1 && ' / '}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
