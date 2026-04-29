function generateGray() {
    const v = Math.floor(Math.random() * 256);
    // RGB formátum, ahol mindhárom érték ugyanaz
    return `rgb(${v}, ${v}, ${v})`;
  }
  
console.log(generateGray()); // Pl: "rgb(128, 128, 128)"

  function generateGrayBlue() {
    const base = Math.floor(Math.random() * 150) + 50; // Közepes tónus alap
    const r = base;
    const g = base + 10; // Egy pici zöld a lágyításhoz
    const b = base + 40; // Több kék az árnyalathoz
    
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(generateGrayBlue()); // Pl: "rgb(100, 110, 140)"

const getHexGray = () => {
    const val = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${val}${val}${val}`;
  };
  
  console.log(getHexGray());
  