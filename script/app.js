import controller from "./controller.js";
import view from "./view.js";
import model from "./model.js";

if (window.location.pathname === "/index.html") {
  controller.onePage();
}
else{
  window.onload = twoPage();

  const category = controller.getCategory();
  const id = controller.getId();

  controller.sendUrl(category, id);
  // controller.getUrlRewiev()

  async function twoPage(){
    const category = controller.getCategory();

    if(category == 'Beef'){
      let dataEat = await model.breakfastDinner(category);

      view.showList(dataEat);
    }
    if (category == 'Breakfast'){
      let dataEat = await model.breakfastDinner(category);

      view.showList(dataEat);
    }
    else {
      let dataEat = await model.soup(category);

      view.showList(dataEat);
    }

  }

  const reeboot = document.getElementById('reeboot');

  reeboot.addEventListener('click', (a) =>{
    twoPage();
  });
}

// const localStorageCommentsContainer = 'comments';
// const commentsSelector = document.getElementById('comment-field');
// // let comments = new Comments(localStorageCommentsContainer);

// controller.showComments(commentsSelector);

// document.getElementById('comment-add').onclick = function () {
//     let newComment = {
//         name: document.getElementById('comment-name').value,
//         body: document.getElementById('comment-body').value,
//         time: Math.floor(Date.now() / 1000),
//     }

//     controller.saveComments(newComment, localStorageCommentsContainer);
//     controller.showComments(commentsSelector);
// }
