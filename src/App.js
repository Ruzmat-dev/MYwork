import './Bootstrap.css'
import './App.css';

function App() {

  fetch("https://api.escuelajs.co/api/v1/categories")
    .then(pops => pops.json())
    .then(dats => {
      const select = document.createElement("select")
      select.className = "select"
      dats.forEach(el => {
        const option = document.createElement("option")
        option.innerHTML = el.name

        select.appendChild(option)
        document.body.appendChild(select)
      })
      

      fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => {
          const wrapper = document.createElement("div")
          wrapper.className = "wrapper"
          data.forEach(product => {
            const card = document.createElement("div")
            console.log(product.category.name);
            card.innerHTML = `
          <div class="card" style="width: 18rem;">
          <img src="${product.images}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Description : ${product.description}</p>
            <p class="card-text">Price : ${product.price}$</p>
            <p class="card-text">Category : ${product.category.name}</p>
            <a href="#" class="btn btn-danger">Delete</a>
          </div>
        </div>  
          `
            wrapper.appendChild(card)
            document.body.appendChild(wrapper)

            
          })
          

          select.addEventListener("click", (e) => {
            wrapper.innerHTML = null
            data.forEach(categ => {

              if (select.value.toString() == categ.category.name.toString()) {
                console.log(categ);

                const card = document.createElement("div")
                card.innerHTML = `
              <div class="card" style="width: 18rem;">
              <img src="${categ.images}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${categ.title}</h5>
                <p class="card-text">Description : ${categ.description}</p>
                <p class="card-text">Price : ${categ.price}$</p>
                <p class="card-text">Category: ${categ.category.name}</p>
                <a href="#" class="btn btn-danger">Delete</a>
              </div>
            </div>  
              `
                wrapper.appendChild(card)
                document.body.appendChild(wrapper)
              }
            })
            const deleteCard = document.querySelectorAll('.btn-danger')
          deleteCard.forEach((item, index) => {
            item.addEventListener("click", (event) => {
              event.target.parentElement.parentElement.parentElement.remove()
              alert("mofaqiyatli ochirildi!")
            })
          })
          })
          const deleteCard = document.querySelectorAll('.btn-danger')
          deleteCard.forEach((item, index) => {
            item.addEventListener("click", (event) => {
              event.target.parentElement.parentElement.parentElement.remove()
              alert("mofaqiyatli ochirildi!")
            })
          })

        })
    })
  return (
    <div className="App">

    </div>
  );
}

export default App;
