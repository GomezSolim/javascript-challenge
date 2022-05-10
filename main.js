
function verify(){
    var html='';
    var $res = $(".text");
    $res.empty();
    var noms=document.getElementById('name').options[document.getElementById('name').selectedIndex].textContent;
    var emails=document.getElementById('email').value;
    var satiss=document.getElementById('satis').value;
    var coachs=document.getElementById('coach').value;
    var messages=document.getElementById('message').value;
    const TextDesValeurSaisies=document.querySelector('.text');
    TextDesValeurSaisies.innerText=noms+emails+satiss+coachs+messages

                    html="<div class='col-md-12 text-center'>"
                        html+="<div class='alert alert-success' role='alert'>"
                            html+="<h4 class='alert-heading'>"+noms+"</h4>"
                            html+="<p>"+emails+"</p>"
                            html+="<p>"+satiss+"</p>"
                            html+="<p>"+coachs+"</p>"
                            html+="<p>"+messages+"</p>"
                        html+="</div>"
                    html+="</div>"

                        $(".text").append(html);

    console.log(noms+emails+satiss+coachs+messages);
}

