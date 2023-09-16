window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let container = document.querySelector('.container');
let p = document.createElement('p');
p.setAttribute('contenteditable', 'true');
let span = document.createElement('span');


recognition.lang = 'fa-IR';
recognition.interimResults = true;
recognition.start();

//console.log(recognition);
recognition.addEventListener('end', recognition.start);
recognition.addEventListener('result', (e) => {

    container.appendChild(p);
    let transcript = Array.from(e.results)
        .map((result) => {
            return result[0]
        })
        .map((result) => {
            return result.transcript;
        })
        .join(' ');
    if (transcript.includes('علامت سوال')) {
        transcript = transcript.replace('علامت سوال', '؟');
    }
    if (transcript.includes('دو نقطه')) {
        transcript = transcript.replace('دو نقطه', ': ');
    }
    if (transcript.includes('پس زمینه نارنجی')) {
        transcript = '';
        document.body.classList.add('orange');
    }
    if (transcript.includes('برو خط بعدی') && e.results[0].isFinal) {
        transcript = '';
        p = document.createElement('p');
        p.setAttribute('contenteditable', 'true');
        container.appendChild(p);
    }
    if (transcript.includes('صفحه پاک شود') && e.results[0].isFinal) {
        container.innerHTML = '';
        p.innerHTML = '';
    }
    if (transcript.includes('انگلیسی تایپ کن') && e.results[0].isFinal) {
        recognition.stop();
        recognition.lang = 'en-US';
        transcript = '';
        p = document.createElement('p');
        p.setAttribute('contenteditable', 'true');
        p.setAttribute('dir', 'ltr');
        container.appendChild(p);
    }
    if (transcript.includes('type in Persian') && e.results[0].isFinal) {
        recognition.stop();
        recognition.lang = 'fa-IR';
        transcript = '';
        p = document.createElement('p');
        p.setAttribute('contenteditable', 'true');
        p.setAttribute('dir', 'rtl');
        container.appendChild(p);
    }
    span.textContent = transcript + ' ';
    p.appendChild(span);
    if (e.results[0].isFinal) {
        span = document.createElement('span');
        p.appendChild(span);
    }


    console.log(transcript);
});
