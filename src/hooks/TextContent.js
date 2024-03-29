
export function textContent(text, main){ 
    const words = text.split(/\s+/);
    const resumeWords = main ? words.slice(0, 200) : words.slice(0, 60)  ;
    return resumeWords.join(' ');
}



