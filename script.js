document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit secara default

  // Ambil input dari user
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  // Perhitungan BMI
  const bmi = weight / ((height / 100) ** 2);

  // Menentukan kategori BMI
  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obesity';
  }

  // Menampilkan hasil BMI dan kategori
  const resultText = `BMI Anda: ${bmi.toFixed(1)} (${bmiCategory})`;
  document.getElementById('result').textContent = resultText;
});
