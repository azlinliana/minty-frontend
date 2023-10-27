import Swal from 'sweetalert2';

function ErrorAlert(message) {
  if (message.response) {
    if (message.response.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Ralat',
        text: message.response.data.message,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ralat',
        text: 'Ralat tidak dijangka', // Generic error message for other errors
      });
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Ralat',
      text: 'Ralat tidak dijangka',
    });
  }
}

export default ErrorAlert;