fetch("scripts.json") // Загружаем JSON-файл
    .then(res => res.json()) // Преобразуем ответ в объект (массив)
    .then(scripts => scripts.forEach(src => { // Перебираем массив
        let script = document.createElement("script"); // Создаем тег <script>
        script.src = src; // Устанавливаем путь к файлу
        document.head.appendChild(script); // Добавляем <script> в <head>
    }))
    .catch(err => console.error("Ошибка загрузки:", err)); // Если ошибка – выводим в консоль
