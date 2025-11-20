// Seleccionamos el contenedor de las tarjetas
const summary = document.querySelector('.sum-stick')
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const card = document.createElement('div');

            card.classList.add(item.category.toLowerCase());
            card.innerHTML = `<div>
          <img src="${item.icon}" alt="">
          ${item.category}
        </div>
        <div class="nums">
          <p>${item.score}</p><span>/ 100</span>
        </div>`;
            summary.append(card)
        })
    })

/*
<div class="reaction">
    <div><img src="./assets/images/icon-reaction.svg">Reaction </div><div class="nums"><p> 80 </p><span>/ 100</span></div>
</div>
<div class="memory">
    <div><img src="./assets/images/icon-memory.svg">Memory </div><div class="nums"><p> 92 </p><span>/ 100</span></div>
</div>
<div class="verbal">
    <div><img src="./assets/images/icon-verbal.svg">Verbal </div><div class="nums"><p> 61 </p><span>/ 100</span></div>
</div>
<div class="visual">
    <div><img src="./assets/images/icon-visual.svg">Visual </div><div class="nums"><p>72 </p><span>/ 100</span></div>
</div>
<button>Continue</button>
 */