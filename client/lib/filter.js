(() => {
  // Enable debuging messages
  const DEBUG = false;

  // On input text handler
  const inputFilter = document.getElementById('input-filter');
  if (inputFilter)
    inputFilter.addEventListener('input', function () {
      DEBUG && console.log('input: ', this.value);
      filterHTML(this.value);
    });
  DEBUG && console.log('inputFilter: ', inputFilter);

  const answerContainer = document.querySelectorAll('#answer-container');
  DEBUG && console.log('outer:', answerContainer);

  const arr = Array(answerContainer.length);
  for (let i = 0; i < answerContainer.length; i++) {
    arr[i] = answerContainer[i];
    arr[i].question = arr[i].querySelector('#question');
    arr[i].question.valueUpperCase = arr[i].question.value.toUpperCase();

    const answers = arr[i].querySelectorAll('#answer');
    arr[i].answers = Array(answers.length);
    for (let j = 0; j < answers.length; j++) {
      arr[i].answers[j] = answers[j];
      arr[i].answers[j].valueUpperCase = arr[i].answers[j].value.toUpperCase();
    }
  }

  // Filter questions on input
  const filterHTML = function (filter) {
    let hit;
    filter = filter.toUpperCase();

    // Search all outer elements
    for (let i = 0; i < arr.length; i++) {
      hit = false;

      if (arr[i].question.valueUpperCase.indexOf(filter) > -1) {
        // Match found
        hit = true;
      } else {
        // Search all answers elements
        for (let j = 0; j < arr[i].answers.length; j++) {
          if (arr[i].answers[j].valueUpperCase.indexOf(filter) > -1) {
            // Match found exit loop
            hit = true;
            break;
          }
        } // End loop
      }
      //
      // If show or hide element uppon match found
      if (hit) {
        arr[i].style.display = '';
      } else {
        arr[i].style.display = 'none';
      }
    } // End loop
  };
})();
