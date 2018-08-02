
$('#add').on('click', function() {
      const col = '<div class="row-editable"><div class="col"><textarea placeholder="Escribe algo aquí"></textarea></div><div class="col"><textarea placeholder="Escribe algo aquí"></textarea></div><div class="value"><input placeholder="$0"></div></div>'
      $('#main-content').append(col);
});

$('#remove').on('click', function() {
  const last = $('.row').length - 1
  console.log(last);
  $('.row-editable').eq(last).remove();
});

let hasIva = false;

$('#subtotal').on('change', function(hasIva) {
  console.log(hasIva)
    const iva = 0.21
    const subtotal = parseInt($('#subtotal').val())
    const finalIva = subtotal * iva;
    if (hasIva === true) {  
      $('#iva').val( finalIva );
      $('#total').val( subtotal + finalIva )
    } else {
      $('#total').val( subtotal )
    }
});


//////
const url = 'http://localhost:3000/'

let companyData = []

$.ajax({
  url: url + 'data',
  method: 'GET',
}).done(function(data) {
  console.log(data)
    for (var i = 0; i < data.length; i++) {
      const option = data[i].name
      $('#options').append('<option>' + option + '</option>')
    }
});

$('#button').on('click', function() {
    var element = document.getElementById('wrapper');
    var opt = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      useCORS: true,
      allowTaint: true,
    };

    html2pdf(element, opt);
  });
