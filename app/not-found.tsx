import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="container-main">
        <p className="eyebrow">404 - Not Found</p>
        <h1 className="display-heading">Page Not Found</h1>
        <p className="heading-copy">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn btn-dark">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
