
import LoginView from './global/login-form';

export default async function Index() {
  return (
    <div className="container mx-auto h-screen ">
      <h1>hello</h1>
      <div className="flex justify-center items-center h-full">
        <LoginView />
      </div>
    </div>
  );
}
