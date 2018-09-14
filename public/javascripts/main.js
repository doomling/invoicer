
$('#add').on('click', function() {
      const col = '<div class="row-editable"><div class="col"><textarea placeholder="Escribe algo aquí"></textarea></div><div class="col"><textarea placeholder="Escribe algo aquí"></textarea></div><div class="values"><input class="value editable-value" placeholder="$0" value="0"></div></div>'
      $('#main-content').append(col);
});

$('#remove').on('click', function() {
  const rows = $('.row-editable').toArray();
  console.log(rows)
  const last = rows.length - 1
  console.log(last);
  $('.row-editable').eq(last).remove();
});

let hasIva = false;

$('#has-iva').on('click', function(){
  hasIva = !hasIva
  console.log(hasIva)
  return hasIva
})

$(document).on('blur', '.editable-value', function() {
//$('.editable-value').on('blur', function(e) {
    let sum = 0  
    let iva = $('#iva').val()
    console.log('este es el iva', iva)
    const subtotal = getSubtotal()
    console.log(subtotal, 'soy sub')
    $('#subtotal').val(subtotal)
     
    if (hasIva) {
      console.log('holi soy el if', subtotal)
      iva = getIva(subtotal)
      $('#total').val(subtotal + iva)
    } else {
      $('#total').val(subtotal)
    }
    
   //updateTotal()  
});

$('#has-iva').on('click', function() {
    const subtotal = $('#subtotal')
    const total = $('#total');
      if (!hasIva) {
        $('#iva').val(0)
        $('#total').val(parseInt(subtotal.val()))
      } else {
        total.val(parseInt(total.val()) + getIva(parseInt(subtotal.val())))
      }
});

function getIva (subtotal) {
  console.log('estoy en el iva', subtotal)
  const iva = subtotal * 0.21; 
  $('#iva').val(iva)
  return iva
}

function getSubtotal () {
  let sum = 0;
  $('.editable-value').each( function(index){
    console.log(this)
    sum += Number(($(this).val()));
  })
  return parseInt(sum)
};

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
