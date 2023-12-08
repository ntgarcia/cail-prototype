// Activity Page

import ItemList from "components/item-list/item-list";
import { useState } from "react";
import { activities } from "utils/data";

function Activity() {
  const btnStyle =
    "px-6 py-4 my-6 rounded-full bg-black text-white text-bold w-96";

  const inputStyle =
    "px-4 py-3 my-2 rounded-full bg-gray-200 placeholder-gray-500";

  const [add, setAdd] = useState(false);
  const [list, setList] = useState(activities);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [studentID, setStudentID] = useState("");
  const [date, setDate] = useState(new Date());
  const [descp, setDescp] = useState("");
  const [approved, setApproved] = useState(false);
  const [completed, setCompleted] = useState(false);

  const render_AcivityForm = () => {
    return (
      <div className={"flex flex-col gap-2 w-96"}>
        <input
          className={inputStyle}
          type={"text"}
          placeholder={"Enter title"}
          onInput={(e) => setTitle(e.target.value)}
        />
        <input
          className={inputStyle}
          type={"text"}
          placeholder={"Enter activity type"}
          onInput={(e) => setType(e.target.value)}
        />
        <input
          className={inputStyle}
          type={"text"}
          placeholder={"Enter your student ID"}
          onInput={(e) => setStudentID(e.target.value)}
        />
        <input
          className={inputStyle}
          type={"date"}
          placeholder={"scheduled date"}
          onInput={(e) => setDate(e.target.value)}
        />
        <input
          className={inputStyle}
          type={"text"}
          placeholder={"Add a description"}
          onInput={(e) => setDescp(e.target.value)}
        />
        <div className={"flex justify-center gap-8"}>
          <div className={"flex items-center mb-4"}>
            {" "}
            <input
              className={
                "w-4 h-4 mx-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              }
              type={"checkbox"}
              placeholder={"approved"}
              onInput={(e) => setApproved(e.target.value)}
            />
            <label> {"Approved"} </label>
          </div>
          <div className={"flex items-center mb-4"}>
            {" "}
            <input
              className={
                "w-4 h-4 mx-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              }
              type={"checkbox"}
              placeholder={"completed"}
              onInput={(e) => setCompleted(e.target.value)}
            />
            <label> {"Completed"} </label>
          </div>
        </div>
        <button className={btnStyle} onMouseDown={() => add_Activity()}>
          {" "}
          {"Create Activity"}{" "}
        </button>
      </div>
    );
  };

  const add_Activity = () => {
    const newActivity = {
      title: title,
      type: type,
      studentID: studentID,
      Scheduled_Date: date,
      description: descp,
      isApproved: approved,
      isCompleted: completed,
    };

    const newList = [...list, newActivity];

    console.log(newList);

    setList(newList);
    setAdd(false);
  };

  const switch_AddActivity = () => {
    if (!add) {
      return (
        <button className={btnStyle} onMouseDown={() => setAdd(true)}>
          {" "}
          {"Add Activity"}{" "}
        </button>
      );
    } else {
      return render_AcivityForm();
    }
  };

  return (
    <div className={"flex flex-col items-center"}>
      {switch_AddActivity()}
      <ItemList data={list} />
    </div>
  );
}

export default Activity;
