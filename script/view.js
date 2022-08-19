export class View {

  showList(dataEat) {

    const nameElem = document.getElementById('name');
    const name = dataEat.meals[0].strMeal;

    nameElem.textContent = name;

    const ingredElem = document.getElementById('ingredients');

    ingredElem.innerHTML = "";
    const ingredients = [];

    for(let i = 1; i <= 20; i++) {
      const str1 = dataEat.meals[0][`strIngredient${i}`]?.trim();
      const str2 = dataEat.meals[0][`strMeasure${i}`]?.trim();

      if(str1, str2) {
        ingredients.push(str1 + '-' + str2);
      } else {
        break;
      }
    }

    let h4 = document.createElement('h4');

    h4.textContent = 'Ingredients';
    ingredElem.append(h4);


    let ul = document.createElement('ul');

    ingredElem.append(ul);
    ingredients.forEach((item) => {
      const li = document.createElement('li');

      li.textContent = item;

      ul.append(li);

    });

    const makeElem = document.getElementById('make');

    makeElem.innerHTML = "";
    const make = dataEat.meals[0].strInstructions;

    makeElem.textContent = make;

    const imgElem = document.getElementById('img');

    imgElem.innerHTML = "";
    const src = dataEat.meals[0].strMealThumb;
    const img = document.createElement('img');

    img.src = src;
    imgElem.append(img);

  };

  showComments(commentsSelector) {
    let out = '';

    this.comments.forEach(function (item) {
      out += `<p class="text-right small"><em>${item.date}</em></p>`;
      out += `<p class="alert alert-primary" role="alert"><b>${item.name}</b><br>${item.body}</p>`;
    });
    commentsSelector.innerHTML = out;
  }
}
const view = new View();

export default view;
