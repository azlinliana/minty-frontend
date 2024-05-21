import Swal from 'sweetalert2';

function DeletionAlert(onConfirmDeletion, onCancelDeletion) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: 'Adakah anda pasti?',
      text: 'Anda tidak akan dapat membatalkan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Padam',
      cancelButtonText: 'Batal',
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        onConfirmDeletion(); // Call the function to perform deletion
      } 
      else {
        Swal.fire("Dibatalkan", "Data anda selamat.", "error");      }
    });
}

export default DeletionAlert;
