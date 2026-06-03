function uploadFile() {

  const fileInput = document.getElementById("fileInput");
  const tableBody = document.getElementById("fileTableBody");

  if (fileInput.files.length === 0) {
    alert("Please select a file!");
    return;
  }

  const file = fileInput.files[0];

  // File size
  let fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB";

  // Create file URL
  const fileURL = URL.createObjectURL(file);

  // Create row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${file.name}</td>
    <td>${fileSize}</td>
    <td>
      <a href="${fileURL}" download="${file.name}">
        <button class="download-btn">Download</button>
      </a>

      <button class="delete-btn" onclick="deleteFile(this)">
        Delete
      </button>
    </td>
  `;

  tableBody.appendChild(row);

  alert("File Uploaded Successfully!");

  fileInput.value = "";
}

function deleteFile(button) {

  const row = button.parentElement.parentElement;
  row.remove();
}