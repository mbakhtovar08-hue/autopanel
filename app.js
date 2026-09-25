const content = document.getElementById("content");
const title = document.getElementById("title");

function showPage(page) {

  if (page === "dashboard") {
    title.textContent = "Dashboard";

    content.innerHTML = `
      <div class="stats">
        <div class="card">
          <small>Заказы</small>
          <div class="value">1 248</div>
        </div>

        <div class="card">
          <small>Клиенты</small>
          <div class="value">326</div>
        </div>

        <div class="card">
          <small>Доход</small>
          <div class="value">84 520 ₽</div>
        </div>
      </div>
    `;
  }

  if (page === "orders") {
    title.textContent = "Заказы";

    content.innerHTML = `
      <div class="section">
        <h2>Заказы</h2>
        <p>Здесь будут отображаться заказы.</p>
        <button class="primary">+ Создать заказ</button>
      </div>
    `;
  }

  if (page === "customers") {
    title.textContent = "Клиенты";

    content.innerHTML = `
      <div class="section">
        <h2>Клиенты</h2>
        <p>Список клиентов AutoPanel.</p>
      </div>
    `;
  }
}

document.querySelectorAll(".sidebar button").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

showPage("dashboard");
