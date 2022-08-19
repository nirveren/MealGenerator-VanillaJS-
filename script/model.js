
class Model {

  async soup(category) {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='.concat(category);

    const response = await fetch(url);
    const data = await response.json();
    const src = data.meals;

    const rand = src[Math.floor(Math.random() * src.length)];
    const id = rand.idMeal;

    const string = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='.concat(id);
    const responseSoup = await fetch(string);
    const dataEat = await responseSoup.json();

    history.pushState(null, null, 'page.html?c=' + category + '&i=' + id);

    return dataEat;
  }

  async breakfastDinner(category) {
    const strBr = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(category);
    const response = await fetch(strBr);

    const data = await response.json();
    const src = data.meals;

    const rand = src[Math.floor(Math.random() * src.length)];
    const id = rand.idMeal;

    const string = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='.concat(id);
    const responseEat = await fetch(string);

    const dataEat = await responseEat.json();

    history.pushState(null, null, 'page.html?c=' + category + '&i=' + id);

    return dataEat;
  };

  random(data){
    const src = data.meals;

    const rand = src[Math.floor(Math.random() * src.length)];
    const id = rand.idMeal;

    return id;
  };
}

const model = new Model();


export default model;
