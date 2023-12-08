import "app/App.css";
import Activity from "pages/activity";
import { useState } from "react";
import { users } from "utils/data";

function App() {
  const inputStyle =
    "px-4 py-3 my-2 rounded-full bg-gray-200 placeholder-gray-500";
  const btnStyle = "px-6 py-4 my-5 rounded-full bg-black text-white text-bold";

  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");

  const [logged, setLogged] = useState(false);

  const verify_Login = (user, pswd) => {
    let response = Object.values(users).filter(
      (e) => e.user === user && e.pswd === pswd
    );

    if (response.length > 0) {
      setLogged(true);
      return true;
    } else {
      return false;
    }
  };

  const render_Login = () => {
    return (
      <div className={"flex flex-col w-96 m-10"}>
        <div className={"flex flex-col gap-1"}>
          <p className={"flex justify-start"}> {"Name"} </p>
          <input
            className={inputStyle}
            type={"text"}
            placeholder={"Enter your name"}
            onInput={(e) => setUser(e.target.value)}
          />
          <p className={"flex justify-start"}> {"Password"} </p>
          <input
            className={inputStyle}
            type={"text"}
            placeholder={"Enter your password"}
            onInput={(e) => setPswd(e.target.value)}
          />
          <button
            className={btnStyle}
            onMouseDown={() => verify_Login(user, pswd)}
          >
            {" "}
            {"Login"}{" "}
          </button>
        </div>
      </div>
    );
  };

  const render_Main = () => {
    if (!logged) {
      return render_Login();
    } else {
      return <Activity />;
    }
  };

  return (
    <main
      className={
        "App bg-slate-50 min-h-screen flex flex-col justify-start items-center gap-4 py-6"
      }
    >
      <h1 className={"font-bold text-2xl my-4"}>
        {" "}
        {"CAIL Project - Prototype"}{" "}
      </h1>

      {render_Main()}
    </main>
  );
}

export default App;
