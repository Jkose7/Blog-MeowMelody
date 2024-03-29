export function textContent(text, main, view) {
  if (view) {
    const words = text.split(/\s+/);
    const texto = words.slice(0, 100);
    return texto.join(" ");
  } else {
    const words = text.split(/\s+/);
    const resumeWords = main ? words.slice(0, 200) : words.slice(0, 60);
    return resumeWords.join(" ");
  }
}
