const BASE_URL = "http://localhost:5000";

// REGISTER
export const registerapi = async (Email, Password, Username) => {
  const res = await fetch(`https://todo-backend-gamma-five.vercel.app/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Email, Username, Password }),
  });
  const result = await res.json();
  return result;
};

// LOGIN
export const LOGINapi = async (Email, Password) => {
  const res = await fetch(`https://todo-backend-gamma-five.vercel.app/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Email, Password }),
  });
  const result = await res.json();
  return result;
};

// GET TASKS
export const getapi = async () => {
  try {
    const res = await fetch(`https://todo-backend-gamma-five.vercel.app/api/tasks`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in get api:", error);
  }
};

// POST TASK
export const postapi = async (postData) => {
  try {
    const res = await fetch(`https://todo-backend-gamma-five.vercel.app/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    alert("Something went wrong", error);
  }
};

// DELETE TASK
export const getdelete = async (id) => {
  try {
    const res = await fetch(`https://todo-backend-gamma-five.vercel.app/api/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

// UPDATE TASK
export const getupdate = async (id, updatedData) => {
  try {
    const res = await fetch(`https://todo-backend-gamma-five.vercel.app/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in updating task:", error);
  }
};
