import Swal from "sweetalert2";

function ErrorAlert(message) {
  if (message.response) {
    Swal.fire({
      // Message from the backend
      icon: "error",
      title: "Ralat",
      text: message.response.data.error,
    });
  } else {
    Swal.fire({
      // Error from the API response not as expected or an unknown client-side error
      icon: "error",
      title: "Ralat",
      text: "Unexpected API response",
    });
  }
}

export default ErrorAlert;
