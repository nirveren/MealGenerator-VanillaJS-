class Controller {

  async onePage() {
    const breakfast = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
    const dataBreakfast = await breakfast.json();
    const src = dataBreakfast.meals;
    const aLink = document.querySelector('#link');


    const lunch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const dataLunch = await lunch.json();
    const srcLunch = dataLunch.meals;
    const aLinkLunch = document.querySelector('#link__second');

    const dinner = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const dataDinner = await dinner.json();
    const srcDinner = dataDinner.meals;
    const aLinkDinner = document.querySelector('#link__third');


    aLink.addEventListener('click', (a) =>{
      const rand = src[Math.floor(Math.random() * src.length)];
      const id = rand.idMeal;
      const attr = 'page.html?c=Breakfast' + '&i=' + id;
      const createBr = aLink.setAttribute('href', attr);
    });


    aLinkLunch.addEventListener('click', (a) =>{
      const randLunch = srcLunch[Math.floor(Math.random() * src.length)];
      const idLunch = randLunch.idMeal;
      const attrLunch = 'page.html?c=Soup' + '&i=' + idLunch;
      const createL = aLinkLunch.setAttribute('href', attrLunch);

    });

    aLinkDinner.addEventListener('click', (a) =>{
      const randDinner = srcDinner[Math.floor(Math.random() * src.length)];
      const idDinner = randDinner.idMeal;
      const attrDinner = 'page.html?c=Beef' + '&i=' + idDinner;
      const createD = aLinkDinner.setAttribute('href', attrDinner);

    });
  }

  getCategory () {
    const url = new URL(window.location.href);
    const category = url.searchParams.get("c");

    if(category == null) {
      window.location.href = '/index.html';
    }
    return category;

  };

  getId () {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("i");

    if(id == null) {
      window.location.href = '/index.html';
    }
    else {
      return id;
    }
  };

  sendUrl (category, id) {

    const a = document.getElementById('link');
    const attr = './com.html' + '?/' + 'c=' + category + '/?' + 'id=' + id ;

    const link = a.setAttribute('href', attr);
  };

  getUrlRewiev(){
    const url = new URL(window.location.href);
    const category = url.searchParams.get("c");
    const id = url.searchParams.get("i");

    // if (category == undefined) {
    //   window.location.href = '/index.html';
    // }
    // if (id == undefined) {
    //   window.location.href = '/index.html';
    // }
  }

// comments() {
//   /**
//      * Class Constructor.
//      *
//      * @param {*} itemName Local Storage comment container.
//      */
// }
//   constructor(itemName) {
//     this.comments = [];
//     let rawComments = JSON.parse(localStorage.getItem(itemName));

//     if (!rawComments) {
//       return;
//     }

//     let comment = this;

//     rawComments.forEach(function (item) {
//       item.date = comment.convertTime(item.time);
//       comment.comments.push(item);
//     });
//   }

//   saveComments(comment, itemName) {
//     this.comments.push(comment);
//     localStorage.setItem(itemName, JSON.stringify(this.comments));
//   }

//   /**
//      * Displays comments on HTML page.
//      *
//      * @param commentsSelector selector of HTML element to load comments to.
//      */
//   showComments(commentsSelector) {
//     let out = '';

//     this.comments.forEach(function (item) {
//       out += `<p class="text-right small"><em>${item.date}</em></p>`;
//       out += `<p class="alert alert-primary" role="alert"><b>${item.name}</b><br>${item.body}</p>`;
//     });
//     commentsSelector.innerHTML = out;
//   }

//   /**
//      * Converts unix timestamp into date string.
//      *
//      * @param unixTimestamp Unix timestamp.
//      *
//      * @returns {string}
//      *   Formatted date string.
//      */
//   convertTime(unixTimestamp) {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     let a = new Date(unixTimestamp * 1000);

//     return (a.getDate() + ' ' + months[a.getMonth()] + ' ' + a.getFullYear() + ' ' +
//             a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds());
//   }
}

const controller = new Controller();

export default controller;
