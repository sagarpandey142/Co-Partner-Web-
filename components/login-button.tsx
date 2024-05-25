export const LoginButton = () => {
  return (
    <a
      href="/api/auth/login"
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 border-2 border-blue-600 transition-colors duration-300 inline-block text-center whitespace-nowrap"
    >
      Log In
    </a>
  );
};
