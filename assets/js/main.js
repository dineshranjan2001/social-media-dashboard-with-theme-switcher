import data from '../data/data.json' assert{type: 'json'};
let body=document.querySelector('#body');
let headerSection=document.querySelector('.header-section');
let followers = document.querySelector('.followers');
let todayPreviews = document.querySelector('.today-overviews');
console.log(data);

// For followers
data.social_media_details.forEach((data, index) => {
  followers.innerHTML += `<div class="social-media-card">
    <figure class="social-media-logo">
      <img src="${data.socialMediaLogo}" alt="social-media-logo">
      <figcaption class="social-media-username">${data.username}</figcaption>
    </figure>
    <h1 class="total-followers-number">${data.totalFollowers}</h1>
    <div class="followers-title">${data.followersTitle}</div>
    <div class="today-section">
      <figure class="icon-today-followers">
        <img src="${data.IconForTodayFollowers}" alt="icon-today-followers">
      </figure>
      <div class="today-followers">${data.todayFollowers}</div>
      <div class="days">Today</div>
    </div>
  </div>`;
  document.getElementsByClassName("social-media-card")[index].style.borderTop = `4px solid ${data.cardTopBorderColor}`;
  document.getElementsByClassName("today-section")[index].style.color = data.iconColor;
  if (data.socialMediaName === 'Instagram') {
    document.getElementsByClassName("social-media-card")[index].classList.add('insta-card');
  }
});
// end followers

// for today overview
data.today_overview_details.forEach((data, index) => {
  todayPreviews.innerHTML += `<div class="overview-card">
    <div class="overview-upper-part">
    <div class="overview-title">${data.overviewTitle}</div>
    <figure class="social-media-logo">
      <img src="${data.socialMediaLogo}" alt="social-media-logo">
    </figure>
  </div>
  <div class="overview-lower-part">
    <div class="overview-number">${data.totalOverviewNumber}</div>
    <div class="today-overview-section">
      <figure class="icon-today-overview">
        <img src="${data.iconForTodayOverview}" alt="">
      </figure>
      <span class="today-overview">${data.overviewPercentage}</span>
    </div>
  </div>
</div>`;
document.getElementsByClassName('today-overview-section')[index].style.color=data.iconColor;
});
// end today overview

// toggle for light and dark mode
let toggleKey=document.getElementById('checkbox');
toggleKey.addEventListener('click',()=>{
  body.classList.toggle('dark-body');
  headerSection.classList.toggle('dark-header-section');

  Array.from(followers.children).forEach(card=>{
    card.classList.toggle('dark-card');
  });

  Array.from(todayPreviews.children).forEach(card=>{
    card.classList.toggle('dark-card');
  });
})


