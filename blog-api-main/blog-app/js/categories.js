import { getCategories, addCategory, deleteCategory } from "./api.js";

export const renderCategories = async () => {
  const container = document.getElementById("section-categories");
  container.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Gestión de Categorías</h2>

    <form id="form-category" class="flex gap-3 mb-6">
      <input id="nombreCat" type="text" placeholder="Nombre de categoría" class="border p-2 rounded w-2/3" required />
      <button class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Agregar</button>
    </form>

    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Nombre</th>
          <th class="p-2 border text-center">Acciones</th>
        </tr>
      </thead>
      <tbody id="category-table"></tbody>
    </table>
  `;

  const categories = await getCategories();
  const tbody = document.getElementById("category-table");
  tbody.innerHTML = categories.map(c => `
    <tr>
      <td class="border p-2">${c.id}</td>
      <td class="border p-2">${c.nombre}</td>
      <td class="border p-2 text-center">
        <button data-id="${c.id}" class="delete-cat bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
      </td>
    </tr>
  `).join("");

  document.getElementById("form-category").addEventListener("submit", async (e) => {
    e.preventDefault();
    await addCategory({ nombre: e.target.nombreCat.value });
    renderCategories();
  });

  document.querySelectorAll(".delete-cat").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      await deleteCategory(id);
      renderCategories();
    });
  });
};
