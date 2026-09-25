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

  else if (page === "orders") {
    title.textContent = "Заказы";

    content.innerHTML = `
      <div class="section">
        <h2>Заказы</h2>
        <button class="primary" onclick="createOrder()">
          + Создать заказ
        </button>
      </div>
    `;
  }

  else if (page === "customers") {
    title.textContent = "Клиенты";

    content.innerHTML = `
      <div class="section">
        <h2>Клиенты</h2>
        <p>Список клиентов AutoPanel.</p>
      </div>
    `;
  }

  else if (page === "services") {
    title.textContent = "Услуги";

    content.innerHTML = `
      <div class="section">
        <h2>Услуги</h2>
        <p>Управление услугами.</p>
      </div>
    `;
  }

  else if (page === "automation") {
    title.textContent = "Автоматизация";

    content.innerHTML = `
      <div class="section">
        <h2>Автоматизация</h2>
        <p>Настройки автоматизации.</p>
      </div>
    `;
  }

  else if (page === "balance") {
    title.textContent = "Баланс";

    content.innerHTML = `
      <div class="section">
        <h2>Баланс</h2>
        <div class="value">12 450 ₽</div>
      </div>
    `;
  }

  else if (page === "activity") {
    title.textContent = "Активность";

    content.innerHTML = `
      <div class="section">
        <h2>Активность</h2>
        <p>Последние действия системы.</p>
      </div>
    `;
  }

  else if (page === "settings") {
    title.textContent = "Настройки";

    content.innerHTML = `
      <div class="section">
        <h2>Настройки</h2>
        <p>Настройки AutoPanel.</p>
      </div>
    `;
  }
}


function createOrder() {

  content.innerHTML = `
    <div class="section">

      <h2>Создать заказ</h2>

      <input
        class="input"
        placeholder="Ссылка"
        id="orderLink"
      >

      <input
        class="input"
        type="number"
        placeholder="Количество"
        id="orderQuantity"
      >

      <select class="select" id="orderService">
        <option>Подписчики</option>
        <option>Просмотры</option>
        <option>Лайки</option>
      </select>

      <br><br>

      <button class="primary" onclick="submitOrder()">
        Оформить заказ
      </button>

    </div>
  `;

  title.textContent = "Создать заказ";
}


function submitOrder() {

  const link = document.getElementById("orderLink").value;
  const quantity = document.getElementById("orderQuantity").value;

  if (!link || !quantity) {
    alert("Заполни ссылку и количество");
    return;
  }

  alert("Заказ создан!");

}


document.querySelectorAll(".sidebar button").forEach(function(button) {

  button.onclick = function() {
    showPage(button.getAttribute("data-page"));
  };

});


showPage("dashboard");
