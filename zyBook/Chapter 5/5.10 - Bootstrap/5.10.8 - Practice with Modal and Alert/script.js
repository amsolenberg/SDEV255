document.addEventListener('DOMContentLoaded', function () {
   function showAlert(alertId) {
      setTimeout(() => {
         const bootstrapAlert = document.querySelector('#' + alertId);
         const collapse = new bootstrap.Collapse(bootstrapAlert);
         collapse.show();
      }, 500);
   }

   const modalYesBtn = document.querySelector('#emailModal .btn-primary');
   modalYesBtn.addEventListener('click', function () {
      showAlert('yesAlert');
   });

   const modalNoBtn = document.querySelector('#emailModal .btn-default');
   modalNoBtn.addEventListener('click', function () {
      showAlert('noAlert');
   });
});
