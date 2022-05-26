const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const htmlContent = `<img class="x-menu" src="images/Icon-Cancel.svg"  alt="cancel image"></img>
      <ul class="menu-list-item">
        <li class="about"><a class="menu-list-items" href="./about.html">About</a></li>
        <li class="programm"><a class="menu-list-items" href="./">Home</a></li>
        <li class="join"><a class="menu-list-items" href="#join">Join</a></li>
        <li class="sponsor"><a class="menu-list-items" href="#partners">Sponsor</a></li>
        <li class="news"><a class="menu-list-items" href="#guest">Guest</a></li>
        <li class="mcpd-2022"><a class="menu-list-items" href="#mcpd-2022-news">MCPD 2022</a></li>
      </ul>`;

menuDiv.innerHTML = htmlContent;
body.appendChild(menuDiv);
const cancelImage = menuDiv.querySelector('img');
cancelImage.className = 'x-menu';
cancelImage.src = 'images/Icon-Cancel.svg';
cancelImage.alt = 'cancel image';

const menuIcon = document.querySelector('.toggle-btn');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

const itemLists = document.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});

const featuredSpeakers = [
  {
    image: './images/speakers/speaker1.jpeg',
    name: 'ESV (Chief) Emmanuel Okas Wike',
    speakerInfo:
      'Consultant Surveyor for Asset management Corporation of Nigeria ',
    description:
      'Lead Consultancy service for Valuation of NNPC Fixed Assets (Zonal office complex, Port Harcourt), Nigeria.',
  },

  {
    image: './images/speakers/speaker2.jpeg',
    name: 'ESV Emma Kadozo Msc, IFMA',
    speakerInfo: 'Managing Partner, Kadozo and Associates',
    description:
      'Expert in facilities and property management with 20 years of professional experience',
  },

  {
    image: './images/speakers/speaker3.jpeg',
    name: 'Oluwarotimi Odunayo Akeredolu, SAN',
    speakerInfo: 'The Executive Governor of Ondo State, Nigeria',
    description:
      'Oluwarotimi Odunayo Akeredolu, SAN is a Nigerian politician and lawyer who is currently the Governor of Ondo State, in office since February 24, 2017.',
  },

  {
    image: './images/speakers/speaker4.jpeg',
    name: 'ESV M.I Okoro FNIVS',
    speakerInfo: 'Managing Partner of M.I Okoro and Associates',
    description:
      'fellow of the Nigerian Institution of Estate Surveyors and Valuers and lead consultant with AMCON.',
  },

  {
    image: './images/speakers/speaker5.jpeg',
    name: 'Dr. Goodluck Ebele Jonathan GCFR, GCON',
    speakerInfo: 'President of The Federal Republic of Nigeria 2010-2015',
    description:
      'Dr. Goodluck Ebele Jonathan GCFR, GCON is a Nigerian politician who served as the President of Nigeria from 2010 to 2015.',
  },

  {
    image: './images/speakers/speaker6.jpeg',
    name: 'Bode  Adediji Bsc, Msc, RSV, FNIVS, PPNIVS',
    speakerInfo: 'Executive  Chairman  of  Bode  Adediji  Partnership',
    description:
      'Mr. Bode Adediji is the Group Executive  Chairman  of  Bode  Adediji  Partnership,  Kontinental  Developers Nigeria  Limited  and  House  of  Estate  International  Limited.',
  },
];

const speakerProfile = document.querySelector('.fs-container-grid');

function createSpeaker(item) {
  return `<li class="fs-frames-2">
            <div class="speaker-profile">
            <div class="image-wrapper">
                <img class="speaker-image" src="${item.image}" alt="">
              </div>
              <div class="speaker-contents">
                <h6 class="speaker-name fw-bold">${item.name}</h6>
                <p class="speaker-info color-2">
                  <i>${item.speakerInfo}</i>
                </p>
                <div class="break-line"></div>
                <p class="speaker-description">${item.description}</p>
              </div>
            </div>
          </li> `;
}

speakerProfile.innerHTML = featuredSpeakers
  .map((item) => createSpeaker(item))
  .join('');
