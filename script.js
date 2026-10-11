document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var input = document.getElementById('keyword');
  var err = document.getElementById('keywordError');
  var v = input.value.trim();
  var msg = '';
  if (v === '') msg = 'Vui lòng nhập từ khóa tìm kiếm!';
  else if (v.length < 2) msg = 'Từ khóa phải có ít nhất 2 ký tự!';
  else if (v.length > 50) msg = 'Từ khóa không được quá 50 ký tự!';
  else if (/[<>{}$]/.test(v)) msg = 'Từ khóa chứa ký tự không hợp lệ!';
  err.textContent = msg;
  input.classList.toggle('invalid', msg !== '');
  if (msg) { input.focus(); return; }
  alert('Đang tìm kiếm: ' + v);
});
document.getElementById('keyword').addEventListener('input', function () {
  this.classList.remove('invalid');
  document.getElementById('keywordError').textContent = '';
});
