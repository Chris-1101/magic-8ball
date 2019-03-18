/* NOTE: This whole file is a bit of a messy hack
 * The Express middleware used for React couldn't do
 * this straight from the components for some reason,
 * which would have been ideal, so here's to improvising.
 */
function handleSubmit(e)
{
  e.preventDefault(); // Prevent Form Submission

  const http = new XMLHttpRequest();
  const input = document.getElementById('question');
  const params = `${ input.name }=${ input.value }`;
  const clearInput = () => input.value = '';

  // Input Validation
  if (input.value.indexOf('?') === -1)
  {
    alert('Magic 8-Ball only responds to questions!');
    clearInput();
    return;
  }

  // Request
  http.open("POST", "/", true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.responseType = 'json';
  http.send(params);

  // Response
  http.onload = function()
  {
    const response = http.response;
    const dateTime = new Date(response.createdAt);
    const colours = {
      'affirmative': "success",
      'non-committal': "warning",
      'negative': "danger"
    };

    const question = {
      text: response.text,
      answer: response.answer.text,
      answerType: colours[response.answer.answerType.name],
      date: dateTime.toLocaleString('en-GB', { day: '2-digit', month: 'short' }),
      time: dateTime.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' })
    };

    const historyItem = `
      <div class="h-item flex spbe">
        <div class="h-time">
          <p>${ question.date }</p>
          <p>${ question.time }</p>
        </div>
        <div class="h-content">
          <p class="h-question">${ question.text }</p>
          <p class="h-answer">
            <span class="badge badge-${ question.answerType }">${ question.answer }</span>
          </p>
        </div>
      </div>
    `;

    const historyContainer = document.querySelector('.history > div');
    historyContainer.insertAdjacentHTML('afterbegin', historyItem);

    // alert(question.answer);
  }

  clearInput();
}

const form = document.getElementById('submissionForm');
form.addEventListener('submit', handleSubmit, false);
