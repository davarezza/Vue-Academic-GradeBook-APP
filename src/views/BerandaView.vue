<template>
    <div class="container-fluid">
        <h2>Aplikasi Penjumlahan Dua Angka</h2>
        <div>
            <label for="angka_satu">Masukkan Angka Pertama</label> <br>
            <input type="number" name="angka_satu" id="angka_satu" v-model="AngkaSatu"><br>
        </div>
        <div>
            <label for="angka_dua">Masukkan Angka Kedua</label> <br>
            <input type="number" name="angka_dua" id="angka_dua" v-model="AngkaDua"><br>
        </div>
        <button @click="HitungPenjumlahan" class="btn btn-info my-2">Hitung</button>
        <button @click="HapusAngka" class="btn btn-danger mx-2 my-2">Hapus</button>
        <br><br>
        <h3>Hasil Penjumlahan adalah {{ HasilPenjumlahan }}</h3>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const AngkaSatu = ref('');
    const AngkaDua = ref('');
    const HasilPenjumlahan = ref('');

    const HitungPenjumlahan = () => {
        const AngkaPertama = parseInt(AngkaSatu.value);
        const AngkaKedua = parseInt(AngkaDua.value);

        const hasil = AngkaPertama + AngkaKedua;
        HasilPenjumlahan.value = hasil;
    }

    const HapusAngka = () => {
        HasilPenjumlahan.value = '';
        AngkaSatu.value = '';
        AngkaDua.value = '';
    }
</script>