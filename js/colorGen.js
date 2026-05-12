function generateGray() {
    const v = Math.floor(Math.random() * 256);
    // RGB formátum, ahol mindhárom érték ugyanaz
    return `rgb(${v}, ${v}, ${v})`;
  }
  

  function generateGrayBlue() {
    const base = Math.floor(Math.random() * 150) + 50; // Közepes tónus alap
    const r = base;
    const g = base + 10; // Egy pici zöld a lágyításhoz
    const b = base + 40; // Több kék az árnyalathoz
    
    return `rgb(${r}, ${g}, ${b})`;
}


const getHexGray = () => {
    const val = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${val}${val}${val}`;
  };
  
  