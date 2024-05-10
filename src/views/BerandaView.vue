<template>
  <div class="container-fluid calculator" style="margin-top: 2rem">
    <h2>Aplikasi Kalkulator</h2>
    <div>
      <label for="angka_satu">Masukkan Angka Pertama:</label> <br>
      <input type="number" id="angka_satu" v-model="AngkaSatu"><br>
    </div>
    <div>
      <label for="angka_dua">Masukkan Angka Kedua:</label> <br>
      <input type="number" id="angka_dua" v-model="AngkaDua"><br>
    </div>
    <div class="buttons">
      <button @click="calculate('+')" class="btn btn-info">Tambah (+)</button>
      <button @click="calculate('-')" class="btn btn-primary">Kurang (-)</button>
      <button @click="calculate('*')" class="btn btn-warning">Kali (*)</button>
      <button @click="calculate('/')" class="btn btn-success">Bagi (/)</button>
      <button @click="clearValues" class="btn btn-danger">Hapus</button>
    </div>
    <h3>Hasil: {{ Hasil }}</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const AngkaSatu = ref('');
const AngkaDua = ref('');
const Hasil = ref('');

const calculate = (operation) => {
  const num1 = parseFloat(AngkaSatu.value);
  const num2 = parseFloat(AngkaDua.value);

  switch (operation) {
    case '+':
      Hasil.value = num1 + num2;
      break;
    case '-':
      Hasil.value = num1 - num2;
      break;
    case '*':
      Hasil.value = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        Hasil.value = num1 / num2;
      } else {
        Hasil.value = 'Error: Division by zero';
      }
      break;
  }
}

const clearValues = () => {
  Hasil.value = '';
  AngkaSatu.value = '';
  AngkaDua.value = '';
}
</script>

<style scoped>
.calculator {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
}
.buttons button {
  margin: 5px;
}
input[type="number"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
</style>