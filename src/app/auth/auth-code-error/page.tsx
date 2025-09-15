export default function AuthCodeError() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Authentication Error</h2>
      <p className="text-gray-700 mb-4">
        There was an error authenticating your account. This could be due to:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Invalid or expired authentication code</li>
        <li>Network connectivity issues</li>
        <li>Configuration problems with the OAuth provider</li>
      </ul>
      <a
        href="/"
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Return to Home
      </a>
    </div>
  )
}
