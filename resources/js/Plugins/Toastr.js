import toastr from 'toastr';

// Configure global options if needed
toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    timeOut: 5000
};

export default {
    success(message) {
        toastr.success(message);
    },
    error(message) {
        toastr.error(message);
    },
    info(message) {
        toastr.info(message);
    },
    warning(message) {
        toastr.warning(message);
    }
};
