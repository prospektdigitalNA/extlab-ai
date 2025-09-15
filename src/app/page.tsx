import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <h1 className="text-3xl font-bold text-center">Welcome to ExtLab</h1>
        
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-600">
            Your AI-powered development platform
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signin"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
