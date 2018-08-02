
let myData = [];

$('#client-data input').on('click', function() {
  let index = $(this).index();
  myData.push($('#client-data input').eq(index).val());
  console.log(myData);
})

$('#add').on('click', function() {
      const col = '<div class="row"><div class="col"><textarea placeholder="Escribe algo aquí"></textarea></div><div class="col"><textarea placeholder="Escribe algo aquí"></textarea></div><div class="value"><input placeholder="$0"></div></div>'
      $('#main-content').append(col);
});

$('#subtotal').on('change', function() {
    const iva = 0.21
    const subtotal = parseInt($('#subtotal').val())
    const finalIva = subtotal * iva; 
    $('#iva').val( finalIva );
    $('#total').val( subtotal + finalIva )
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

/*$(window).on('load', function(companyData){
    for (var i = 0; i < companyData.length; i++) {
      const option = companyData[i].name
      $('#options').append('<option>' + option + '</option>')
    }
});*/

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
