import Swal from 'sweetalert2';

function SuccessAlert(message) {
  Swal.fire({
    icon: 'success',
    title: 'Berjaya',
    text: message,
  });
}

export default SuccessAlert;