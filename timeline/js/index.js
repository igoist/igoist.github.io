(function() {

  // var listObj = JSON.parse(tl_list);

  var listObj = [{
    time: '2017.04.05',
    div_class: '',
    h2: 'Mine Awesome Headline',
    p: 'Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.',
    a: 'Call to action',
    a_href: '###',
    img_url: ''
  }];

  var etTLUL = document.querySelector('section.et-timeline ul');
  var fragment = document.createDocumentFragment();
  var tmpLi = null;
  var tmpDiv1 = null;
  var tmpDiv2 = null;
  var tmpDiv3 = null;
  var tmpDiv4 = null;
  var tmpT = null;
  var tmpH2 = null;
  var tmpA = null;
  var tmpP = null;

  // <li>
  //   <div class="et-timeline-item-wrap">
  //     <time>1934</time>
  //     <div class="card et-timeline-card-transition">
  //       <h2 class="et-timeline-card-transition">Awesome Headline</h2>
  //       <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
  //       <div class="cta-container et-timeline-card-transition"><a href="#" class="cta">Call to action</a></div>
  //       <div class="card_circle et-timeline-card-transition"></div>
  //     </div>
  //   </div>
  // </li>

  for(let i = 0; i < listObj.length + 8; i++) {
    tmpT = document.createElement('time');
    tmpT.appendChild(document.createTextNode(listObj[0].time));

    tmpH2 = document.createElement('h2');
    tmpH2.classList.add('et-timeline-card-transition');
    tmpH2.appendChild(document.createTextNode(listObj[0].h2));

    tmpP = document.createElement('p');
    tmpP.appendChild(document.createTextNode(listObj[0].p));

    tmpA = document.createElement('a');
    tmpA.href = listObj[0].a_href;
    tmpA.classList.add('cta');
    tmpA.appendChild(document.createTextNode(listObj[0].a));

    tmpDiv3 = document.createElement('div');
    tmpDiv3.classList.add('cta-container');
    tmpDiv3.classList.add('et-timeline-card-transition');
    tmpDiv3.appendChild(tmpA);

    tmpDiv4 = document.createElement('div');
    tmpDiv4.classList.add('card_circle');
    tmpDiv4.classList.add('et-timeline-card-transition');

    tmpDiv2 = document.createElement('div');
    tmpDiv2.classList.add('card');
    tmpDiv2.classList.add('et-timeline-card-transition');
    tmpDiv2.appendChild(tmpH2);
    tmpDiv2.appendChild(tmpP);
    tmpDiv2.appendChild(tmpDiv3);
    tmpDiv2.appendChild(tmpDiv4);

    tmpDiv1 = document.createElement('div');
    tmpDiv1.classList.add('et-timeline-item-wrap');
    tmpDiv1.appendChild(tmpT);
    tmpDiv1.appendChild(tmpDiv2);

    tmpLi = document.createElement('li');
    // tmpLi.classList.add('in-view');
    tmpLi.appendChild(tmpDiv1);
    fragment.appendChild(tmpLi);
  }

  etTLUL.innerHTML = "";
  etTLUL.appendChild(fragment);

})();