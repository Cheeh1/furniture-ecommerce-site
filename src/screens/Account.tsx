import Header from "../components/Header";
import Info from "../components/Info";
import Login from "../components/Login";
import Register from "../components/Register";

const Account = () => {
  return (
    <>
      <Header children="My Account" />
      <main className="py-16 flex flex-col md:flex-row lg:flex-row gap-10 px-5 justify-evenly">
        <Login />
        <Register />
      </main>
      <Info />
    </>
  );
};
export default Account;
