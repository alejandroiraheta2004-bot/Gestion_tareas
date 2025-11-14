const API_URL = "http://localhost:3000/api";

export const addUser = async(data) => {
    console.log("Adding user:", data);
    const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  console.log("User added:", await res.json());
}

export const getUsers = async () => {
    const res = await fetch(`${API_URL}/usuarios`);
    return res.json();
}

export const deleteUser = async (id) => {
    await fetch(`${API_URL}/usuarios/${id}`, { method: "DELETE" });
}

export const getCategories = async () => {
    const res = await fetch(`${API_URL}/categorias`);
    return res.json();
}

export const addCategory = async (data) => {
    await fetch(`${API_URL}/categorias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export const deleteCategory = async (id) => {
    await fetch(`${API_URL}/categorias/${id}`, { method: "DELETE" });
}