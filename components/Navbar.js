import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#ddd" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/footer">Footer</Link>
    </nav>
  );
};

export default Navbar;
