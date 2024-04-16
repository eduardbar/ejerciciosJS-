function bmi(peso, altura) {
    const bmiValue = peso / Math.pow(altura, 2);
    if (bmiValue < 18.5) {
      return "Bajo de peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return "Sobrepeso";
    } else {
      return "Obeso";
    }
  }