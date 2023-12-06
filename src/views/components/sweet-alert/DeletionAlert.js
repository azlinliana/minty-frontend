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
      confirmButtonText: 'Ya, padam!',
      cancelButtonText: 'Tidak, batalkan pemadaman!',
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        onConfirmDeletion(); // Call the function to perform deletion
      } 
      else if (result.dismiss === Swal.DismissReason.cancel) {
        onCancelDeletion(); // Call the function for canceling deletion
      }
    });
}

export default DeletionAlert;
