import { Link, Outlet, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/cv", label: "Currículo" },
  { to: "/contato", label: "Contato" },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line no-print">
        <nav className="max-w-[720px] mx-auto flex gap-8 px-6 py-6">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                location.pathname === link.to
                  ? "text-sm text-ink border-b border-accent pb-1"
                  : "text-sm text-muted hover:text-ink transition-colors pb-1"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 max-w-[720px] mx-auto w-full px-6 py-16">
        <Outlet />
      </main>
      <footer className="border-t border-line max-w-[720px] mx-auto w-full px-6 py-8 text-sm text-muted no-print">
        Breno Rodrigues Azevedo · brenorazevedo@gmail.com
      </footer>
    </div>
  );
}
