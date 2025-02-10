function updateDateTime() {
  const now = new Date();
  
  // Format tanggal
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('id-ID', options);
  
  // Format jam
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Konversi format 12 jam
  minutes = minutes.toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes} ${period}`;
  
  // Menampilkan pada elemen dengan ID "tgl" dan "JAM"
  document.getElementById("tgl").innerText = formattedDate;
  document.getElementById("JAM").innerText = formattedTime;
}

document.addEventListener("DOMContentLoaded", function () {
  updateDateTime();
  setInterval(updateDateTime, 60000);
});
