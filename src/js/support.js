const funds = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: "./img/logo-partners/save-the-children.png",
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: "./img/logo-partners/project-hope.png",
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: "./img/logo-partners/united24.png",
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: "./img/logo-partners/imc.png",
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: "./img/logo-partners/msf.png",
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: "./img/logo-partners/razom.png",
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: "./img/logo-partners/aah.png",
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: "./img/logo-partners/world-vision.png",
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/logo-partners/ch-sp.png',
  },
]


const fundsList = document.getElementById('funds-list');

funds.forEach((fund) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const img = document.createElement('img');
    
    item.classList.add('support-item');
    link.classList.add('support-link')
    img.classList.add('support-img');
    
    link.href = fund.url;
    img.src = fund.img;
    
    link.appendChild(img);
    item.appendChild(link);
    fundsList.appendChild(item);
});





