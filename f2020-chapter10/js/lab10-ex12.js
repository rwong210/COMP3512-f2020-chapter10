document.addEventListener("DOMContentLoaded", function () {
    // document.querySelector('#speak').addEventListener('click', (e) => {
    //     const utterance = new SpeechSynthesisUtterance('Hey there buddy');
    //     speechSynthesis.speak(utterance);
    // });
    window.speechSynthesis.addEventListener('voiceschanged', () => {
        let select = document
        let voices = this.getVoices();
        voices.forEach((voice) => {
            console.log(voice.name + " - " + voice.lang)});
    });

});
