/*var doc = new jsPDF();
doc.setFontSize(22);
doc.text(20, 20, 'This is a title');

doc.setFontSize(16);
doc.text(20, 30, 'This is some normal sized text underneath.');


  function generate() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(18);
//    pdf.addFont('verdana')
    pdf.addFont('FuturaLT.ttf', 'FuturaLT', 'normal');
    pdf.fromHTML(document.getElementById('wrapper'));
    pdf.text('hola a ver como salgo')
    return pdf;
}

  $(document).on('keypress','#client-input', function(e) {
  if (e.keyCode == 13) {
    const client = $('#client-input').val();
    $('#wrapper').append('<span>' + client + '</span>');
    }
  });



*/

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

    $('#button').on('click', function() {
      //doc.save('name.pdf')
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
    //  let pdf = generate();
      //pdf.save('name.pdf');
    });
