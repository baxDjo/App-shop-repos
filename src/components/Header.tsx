// Header.tsx
type HeaderProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export default function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="navbar-start">
        <h1 className="text-xl font-bold">My shop app</h1>
      </div>

      <div className="navbar-center">
        <div className="relative w-72 md:w-96">
          <input
            type="search"
            className="input input-bordered w-full pl-10"
            placeholder="Search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            aria-label="Search products"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content opacity-60 pointer-events-none z-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
      </div>

      <div className="navbar-end" />
    </div>
  );
}
