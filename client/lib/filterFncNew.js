// Filter questions on input
const filterHTML = (value, arr, nodes) => {
  const filter = value.toUpperCase();
  let hit = false,
    prev = -1,
    next = 0;

  // Search all outer elements
  for (let i = 0; i < arr.length; i++) {
    // Current index
    next = arr[i][0];

    if (hit && prev === next) continue;
    else hit = false;

    if (arr[i][1].indexOf(filter) > -1) {
      // Match found
      hit = true;
      if (nodes[next].style.display.length) nodes[next].style.display = '';
    } else {
      if (prev === next) continue;
      if (!nodes[next].style.display.length) nodes[next].style.display = 'none';
    }

    prev = next;
  } // End loop
};

const filter = ({ DEBUG = false }) => {
  const answerContainer = document.querySelectorAll('#answer-container');
  DEBUG && console.log('answerContainer:', answerContainer);

  // const arr = Array(answerContainer.length);
  const indexedArray = [];
  let index = 0;

  for (let i = 0; i < answerContainer.length; i++) {
    // get question
    const question = answerContainer[i]
      .querySelector('#question')
      .value.toUpperCase();

    // index question
    indexedArray[index++] = [i, question];

    // get all answers
    const answers = answerContainer[i].querySelectorAll('#answer');
    for (let j = 0; j < answers.length; j++) {
      // index answer
      indexedArray[index++] = [i, answers[j].value.toUpperCase()];
    }
  }
  DEBUG && console.log('indexedArray:', indexedArray);

  // On input text handler
  const inputFilter = document.getElementById('input-filter');
  if (inputFilter)
    inputFilter.addEventListener('input', function () {
      DEBUG && console.log('input: ', this.value);
      filterHTML(this.value, indexedArray, answerContainer);
    });
  DEBUG && console.log('inputFilter: ', inputFilter);
};

export default filter;
