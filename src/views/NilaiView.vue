<template>
  <div class="container mt-4">
    <div class="header-content text-center mb-3">
        <h3>Tabel Nilai Siswa</h3>
        <span class="text-muted">Login untuk melakukan perubahan nilai</span>
        <hr class="my-4">
    </div>
    <table class="table table-striped table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <!-- More rows can be added here -->
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
}

.header-content h3 {
  color: #333;
}

.table {
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.thead-dark th {
  background-color: #343a40;
  color: #fff;
}

.text-muted {
  color: #6c757d;
}

hr.my-4 {
  border-top: 2px solid #bbb;
}
</style>