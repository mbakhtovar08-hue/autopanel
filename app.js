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

        <button class="primary" id="createOrder">
          + Создать заказ
        </button>

        <div id="orderForm"></div>

      </div>
    `;

    document.getElementById("createOrder").onclick = createOrder;
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

  if (page === "services") {
    title.textContent = "Услуги";

    content.innerHTML = `
      <div class="section">
        <h2>Услуги</h2>
        <p>Услуги панели.</p>
      </div>
    `;
  }

  if (page === "automation") {
    title.textContent = "Автоматизация";

    content.innerHTML = `
      <div class="section">
        <h2>Автоматизация</h2>
        <p>Настройки автоматизации.</p>
      </div>
    `;
  }

  if (page === "balance") {
    title.textContent = "Баланс";

    content.innerHTML = `
      <div class="section">
        <h2>Баланс</h2>
        <div class="value">12 450 ₽</div>
      </div>
    `;
  }

  if (page === "activity") {
    title.textContent = "Активность";

    content.innerHTML = `
      <div class="section">
        <h2>Активность</h2>
        <p>Последние действия.</p>
      </div>
    `;
  }

  if (page === "settings") {
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

  document.getElementById("orderForm").innerHTML = `

    <div style="margin-top:20px">

      <input
        class="input"
        id="link"
        type="url"
        placeholder="Ссылка"
      >

      <input
        class="input"
        id="quantity"
        type="number"
        placeholder="Количество"
        min="1"
      >

      <select class="select" id="service">

        <option>Подписчики</option>
        <option>Просмотры</option>
        <option>Лайки</option>

      </select>

      <button class="primary" id="submitOrder">
        Оформить заказ
      </button>

    </div>

  `;

  document.getElementById("submitOrder").onclick = function() {

    const link = document.getElementById("link").value;
    const quantity = document.getElementById("quantity").value;

    if (!link || !quantity) {
      alert("Заполни все поля");
      return;
    }

    alert("Заказ создан!");

  };
}

document.querySelectorAll(".sidebar button").forEach(button => {

  button.addEventListener("click", function() {
    showPage(this.dataset.page);
  });

});

showPage("dashboard");
