import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <div>
        <header className="py-4 px-4 xs:px-8 mb-8 bg-gray-100 border-b">
          <h1 className="text-2xl font-bold">
            <Link href="/">
              <a>next-boilerplate</a>
            </Link>
          </h1>
        </header>
        <main className="sm:container px-4 mx-auto">{children}</main>
        <footer className="mx-8 my-12 pt-8 border-t">
          <address className="text-center">
            <Link href="/">https://github.com/yusukebe/next-boilerplate</Link>
          </address>
        </footer>
      </div>
    </>
  )
}
