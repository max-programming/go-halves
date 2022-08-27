import { signIn } from '@astro-auth/client';

const LoginPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn({
            provider: 'google',
            callbackURL: 'https://youtu.be/dQw4w9WgXcQ',
          });
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
