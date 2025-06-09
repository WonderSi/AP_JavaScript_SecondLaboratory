fetch("scripts.json")
    .then(res => res.json()) 
    .then(scripts => scripts.forEach(src => {
        let script = document.createElement("script");
        script.src = src;
        document.head.appendChild(script);
    }))
    .catch(err => console.error("Ошибка загрузки:", err));
