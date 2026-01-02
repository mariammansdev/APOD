export default function Toolbar() {
  return (
    <footer className="fixed bottom-0 footer footer-center p-4 bg-base-200 text-base-content text-sm">
      <p className="w-full flex justify-center place-items-center" >   
        © {new Date().getFullYear()} — Image courtesy of 
        <a href='https://apod.nasa.gov/apod/' target='_blank' rel="noopener noreferrer">
          NASA Astronomy Picture of the Day
        </a>
      </p>
    </footer>
  );
}