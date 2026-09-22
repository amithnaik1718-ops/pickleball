type NavigationItem = readonly [label: string, href: string];

type MobileNavigationProps = {
  items: readonly NavigationItem[];
  currentPage?: string;
};

export function MobileNavigation({ items, currentPage }: MobileNavigationProps) {
  return (
    <details className="mobile-nav">
      <summary aria-label="Open navigation menu">
        <span />
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        {items.map(([label, href]) => (
          <a key={label} href={href} aria-current={label === currentPage ? 'page' : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
}
