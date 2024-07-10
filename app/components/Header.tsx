export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <h1 className="text-3xl font-bold">oops.dev</h1>
      <nav className="flex gap-3 hover:[&>*]:scale-105 [&>*]:transition">
        <a href="#" className="font-bold">Home</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}