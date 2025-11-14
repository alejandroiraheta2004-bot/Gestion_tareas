import { addUser, getUsers, deleteUser } from "./api.js";

export const renderUsers = async () => {
  const container = document.getElementById("section-users");
  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Gestión de Usuarios</h2>

    <form id="form-user" class="flex gap-3 mb-6">
      <input id="nombre" type="text" placeholder="Nombre" class="border p-2 rounded w-1/3" required />
      <input id="email" type="email" placeholder="Email" class="border p-2 rounded w-1/3" required />
      <input id="password" type="password" placeholder="Contraseña" class="border p-2 rounded w-1/3" required />
      <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Agregar</button>
    </form>

    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Nombre</th>
          <th class="p-2 border">Email</th>
          <th class="p-2 border text-center">Acciones</th>
        </tr>
      </thead>
      <tbody id="user-table"></tbody>
    </table>
  `;

  // Cargar usuarios
  const users = await getUsers();
  const tbody = document.getElementById("user-table");
  tbody.innerHTML = users.map(u => `
    <tr>
      <td class="border p-2">${u.id}</td>
      <td class="border p-2">${u.nombre}</td>
      <td class="border p-2">${u.email}</td>
      <td class="border p-2 text-center">
        <button data-id="${u.id}" class="delete-user bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
      </td>
    </tr>
  `).join("");

  // Evento crear usuario
  document.getElementById("form-user").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      password: e.target.password.value
    };
    await addUser(data);
    renderUsers();
  });

  // Evento eliminar usuario
  document.querySelectorAll(".delete-user").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      await deleteUser(id);
      renderUsers();
    });
  });
};
