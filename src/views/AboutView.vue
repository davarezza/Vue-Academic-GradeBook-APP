<template>
  <div class="about" style="margin-top: -0.4rem">
    <div class="about-img">
      <img src="/img/nusa2.jpg" alt="" />
    </div>

    <div class="about-content" style="margin-top: -2.7rem">
      <h2 class="heading">Tentang <span>GradeBook</span></h2>
      <h3>SMKN 1 PURWOSARI</h3>
      <p>
        Gradebook adalah aplikasi yang dirancang khusus untuk membantu guru dalam menilai ujian
        siswa dengan efisien dan akurat. Aplikasi ini menyediakan fitur-fitur yang memudahkan guru
        dalam mencatat dan mengelola nilai-nilai ujian siswa secara sistematis. Dengan Gradebook,
        diharapkan guru dapat dengan mudah memasukkan nilai-nilai ujian siswa ke dalam sistem,
        melakukan kalkulasi otomatis, dan menghasilkan laporan nilai. Aplikasi ini juga menyediakan
        berbagai fitur tambahan, seperti pengaturan kriteria penilaian, pelacakan perkembangan
        siswa, dan penyimpanan arsip nilai untuk referensi masa depan.
      </p>
      <a href="https://www.smkn1purwosari.sch.id/public/" class="btn" target="_blank"
        >Visit Official School Website</a
      >
    </div>
  </div>
  <h2 class="text-center">
    <b>Tentang <span>Aplikasi</span></b>
  </h2>
  <hr class="mx-auto" style="width: 20%; border-width: 2px" />
  <div class="about">
    <div class="about-content">
      <h3>Penilaian Siswa secara Online</h3>
      <p>
        GradeBook menyediakan akses mudah dan cepat ke informasi akademik bagi siswa, orang tua, dan
        staf sekolah. Pengguna dapat dengan mudah melihat nilai, presensi, dan informasi akademik
        lainnya secara online, memungkinkan pemantauan perkembangan akademik siswa secara real-time.
      </p>
    </div>
    <div class="about-img">
      <img src="/img/nusa1.jpg" alt="" />
    </div>
  </div>
  <div class="about">
    <div class="about-img">
      <img src="/img/nusa4.jpg" alt="" />
    </div>
    <div class="about-content">
      <h3>Pengelolaan Data Siswa yang Efisien</h3>
      <p>
        Aplikasi ini berperan dalam pengelolaan data siswa yang lebih efisien. Staf sekolah dapat
        mengelola data pribadi dan akademik siswa dengan lebih baik, mencatat kehadiran, memasukkan
        nilai, dan menghasilkan laporan akademik dengan mudah melalui platform ini. Ini membantu
        dalam meningkatkan efisiensi administratif sekolah dan memberikan layanan yang lebih baik
        kepada siswa.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}

:root {
  --text-color: #fff;
  --main-color: #0ef;
}

span {
  color: rgb(204, 4, 4);
}

body {
  overflow-x: hidden;
}

.about {
  display: flex;
  margin: 6rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.about-img img {
  margin-top: 1rem;
  width: 35vw;
  height: auto;
  border-radius: 10px;
}

.heading {
  text-align: center;
  font-size: 3rem;
}

.about-content h2 {
  text-align: left;
  line-height: 1.2;
}

.about-content h3 {
  font-size: 1.6rem;
}

.about-content p {
  font-size: 0.9rem;
  margin: 1.5rem 0 2rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: rgb(233, 76, 76);
  border-radius: 3rem;
  box-shadow: 0 0 1rem var(--main-color);
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0.1rem;
  font-weight: 600;
  transition: 0.5s ease;
}

.btn:hover {
  transform: scale(0.8);
  color: var(--second-bg-color);
}

.btn1 {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: rgb(233, 76, 76);
  text-decoration: none;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgb(233, 76, 76);
  font-size: 0.8rem;
  color: #fff;
  letter-spacing: 0.1rem;
  font-weight: 600;
  transition: 0.5s ease;
}

.btn1:hover {
  transform: scale(1.2);
  color: var(--second-bg-color);
}
</style>
