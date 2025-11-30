// inisialisasi

// Event: tambah tugas baru

// Event: tugas selesai

// Event: tugas dihapus

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const errorMsg = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (text === "") {
    errorMsg.textContent = "Tugas tidak boleh kosong!";
    return;
  }

  errorMsg.textContent = "";

  const li = document.createElement("li");
  li.className = "todo-item";

  li.innerHTML = `
    <span class="todo-text">${text}</span>
    <div class="todo-actions">
      <button class="btn-complete">Selesai</button>
      <button class="btn-delete">Hapus</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";
});

// Event delegasi: selesai/hapus
list.addEventListener("click", (e) => {
  const item = e.target.closest("li");

  if (!item) return;

  if (e.target.classList.contains("btn-complete")) {
    item.classList.toggle("completed");
  }

  if (e.target.classList.contains("btn-delete")) {
    item.remove();
  }
});
 