export default function Toolbar() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content text-sm">
      <p>
        © {new Date().getFullYear()} — Image data courtesy of NASA APOD API
      </p>
    </footer>
  );
}