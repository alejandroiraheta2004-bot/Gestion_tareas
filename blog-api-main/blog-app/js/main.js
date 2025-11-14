import { renderUsers } from "./users.js";
import { renderCategories } from "./categories.js";

document.addEventListener("DOMContentLoaded", async () => {
  const tabUsers = document.getElementById("tab-users");
  const tabCategories = document.getElementById("tab-categories");
  const sectionUsers = document.getElementById("section-users");
  const sectionCategories = document.getElementById("section-categories");

  // Mostrar usuarios por defecto
  await renderUsers();

  tabUsers.addEventListener("click", async () => {
    tabUsers.classList.add("bg-indigo-500", "text-white");
    tabCategories.classList.remove("bg-indigo-500", "text-white");
    tabCategories.classList.add("bg-gray-300", "text-gray-700");
    sectionUsers.classList.remove("hidden");
    sectionCategories.classList.add("hidden");
    await renderUsers();
  });

  tabCategories.addEventListener("click", async () => {
    tabCategories.classList.add("bg-indigo-500", "text-white");
    tabUsers.classList.remove("bg-indigo-500", "text-white");
    tabUsers.classList.add("bg-gray-300", "text-gray-700");
    sectionCategories.classList.remove("hidden");
    sectionUsers.classList.add("hidden");
    await renderCategories();
  });
});
