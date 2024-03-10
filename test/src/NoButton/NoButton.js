import React, {useEffect} from "react";


function NoButton() {
  const imageList = [
    'https://pleated-jeans.com/wp-content/uploads/2023/08/cat-if-have-child-allergic-cats-do-do-puter.jpg',
    'https://pleated-jeans.com/wp-content/uploads/2023/08/and-cat-starterpack-tongue-scraping-empty-bowl-riipppp-rippp-am-but-skin-and-bones-crinkle-crinkle.jpg',
    'https://pleated-jeans.com/wp-content/uploads/2023/08/cat-sleep-after-not-doing-anything-whole-day.jpg',
    'https://pleated-jeans.com/wp-content/uploads/2023/08/cat-if-have-child-allergic-cats-do-do-puter.jpg',
    'https://pleated-jeans.com/wp-content/uploads/2023/08/cat-45-minute-nap-should-set-straight-4-hours-later.jpg',
    'https://pleated-jeans.com/wp-content/uploads/2023/08/cat-after-eating-family-sized-bag-cheese-puffs.jpg',
    'https://pleated-jeans.com/wp-content/uploads/2023/08/cat-cat-hair-freshly-swept-house.jpg',
  ];

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const question = document.querySelector('.question');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const randomImage = document.querySelector('.random-picture');

    function changeButtonPosition() {
      const wrapperRect = wrapper.getBoundingClientRect();
      const noBtnRect = noBtn.getBoundingClientRect();

      const i = Math.floor(
          Math.random() * (wrapperRect.width - noBtnRect.width)) + 3;
      const j = Math.floor(
          Math.random() * (wrapperRect.height - noBtnRect.height)) + 3;

      noBtn.style.left = i + 'px';
      noBtn.style.top = j + 'px';
    }

    function getRandomPicture() {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      return imageList[randomIndex];
    }

    const handleClickYes = () => {
      const randomImageUrl = getRandomPicture();
      randomImage.src = randomImageUrl;
      question.innerHTML = 'MEow';

      randomImage.style.width = `${randomImage.naturalWidth}px`;
      randomImage.style.height = `${randomImage.naturalHeight}px`;
      randomImage.style.left = `${randomImage.offsetLeft}px`;
      randomImage.style.top = `${randomImage.offsetTop}px`
    };

    if (yesBtn) {
      yesBtn.addEventListener('click', handleClickYes);
    }

    if (noBtn) {
      noBtn.addEventListener('mouseover', changeButtonPosition);
      noBtn.addEventListener('click', changeButtonPosition);
    }

    return () => {
      if (yesBtn) {
        yesBtn.removeEventListener('click', handleClickYes);
      }

      if (noBtn) {
        noBtn.removeEventListener('mouseover', changeButtonPosition);
        noBtn.removeEventListener('click', changeButtonPosition);
      }
    };
  }, []); // Empty dependency array means this effect runs once after the first render

  // return null; // NoButton component doesn't render anything directly
  return (
      <>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <div className="wrapper">
          <img className="random-picture" src="https://www.kattovit.com/fileadmin/_processed_/d/c/csm_katzengeraeusche_9647e1478a.jpg" alt="Random Picture"/>
          <h2 className="question">Do you love cats?</h2>
          <div className="btn-group">
            <button className="yes-btn">YES</button>
            <button className="no-btn">NO</button>
          </div>
        </div>
      </>

  );
}

export default NoButton;
