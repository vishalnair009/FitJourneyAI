export function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
  
    const utterance = new SpeechSynthesisUtterance(text);
  
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
  
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }