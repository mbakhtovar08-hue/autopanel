const content = document.getElementById("content");
const title = document.getElementById("title");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");


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

        <div class="card">
          <small>Выполнено</small>
          <div class="value">1 102</div>
        </div>

      </div>

      <div class="section">
        <h2>Последняя активность</h2>
        <p>AutoPanel готов к работе.</p>
      </div>
    `;
  }


  else if (page === "orders") {

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
        <p>Подписчики, просмотры и лайки.</p>
      </div>
    `;
  }


  else if (page === "automation") {

    title.textContent = "Автоматизация";

    content.innerHTML = `
      <div class="section">
        <h2>Автоматизация</h2>
        <p>Настройки автоматизации заказов.</p>
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


/* СОЗДАНИЕ ЗАКАЗА */

function createOrder() {

  const form = document.getElementById("orderForm");

  form.innerHTML = `

    <div class="section">

      <h2>Новый заказ</h2>

      <input
        class="input"
        id="orderLink"
        type="url"
        placeholder="Ссылка"
      >

      <input
        class="input"
        id="orderQuantity"
        type="number"
        placeholder="Количество"
        min="1"
      >

      <select class="select" id="orderService">

        <option>Подписчики</option>
        <option>Просмотры</option>
        <option>Лайки</option>

      </select>

      <br>

      <button
        class="primary"
        id="submitOrder"
      >
        Оформить заказ
      </button>

    </div>
  `;


  document.getElementById("submitOrder").onclick = function () {

    const link =
      document.getElementById("orderLink").value.trim();

    const quantity =
      document.getElementById("orderQuantity").value;

    if (!link || !quantity) {

      alert("Заполни ссылку и количество");

      return;
    }

    alert("Заказ создан!");
  };
}


/* КНОПКА МОБИЛЬНОГО МЕНЮ */

if (menu && sidebar) {

  menu.addEventListener("click", function () {

    sidebar.classList.toggle("open");

  });

}


/* КНОПКИ SIDEBAR */

document
  .querySelectorAll(".sidebar nav button")
  .forEach(function (button) {

    button.addEventListener("click", function () {

      const page = this.getAttribute("data-page");

      showPage(page);

      if (window.innerWidth <= 700) {
        sidebar.classList.remove("open");
      }

    });

  });


/* ЗАПУСК */

showPage("dashboard");
