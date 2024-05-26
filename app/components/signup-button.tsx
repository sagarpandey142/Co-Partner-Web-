export const SignupButton = () => {
  return (
    <a
      href="/api/auth/signup"
      className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 border-2 border-blue-600 transition-colors duration-300 inline-block text-center whitespace-nowrap"
    >
      Sign Up
    </a>
  );
};
