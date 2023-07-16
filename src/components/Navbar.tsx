import { useAuth } from "@/context/auth";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  console.log("user" + user);

  return (
    <header className="bg-gray-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl">
          <Link href="/">SNS Clone</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <>
              {user ? (
                <>
                  <div className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium">
                    <Link href={`/profile/${user.id}`}>プロフィール</Link>
                  </div>
                  <Link
                    className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                    href="/login"
                    onClick={() => logout()}
                  >
                    ログアウト
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                  >
                    ログイン
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                  >
                    サインアップ
                  </Link>
                </>
              )}
            </>
          </ul>
        </nav>
      </div>
    </header>
  );
}
