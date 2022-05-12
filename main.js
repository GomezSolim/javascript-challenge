
function verify(){
    var html='';
    
/*    $res.empty();
*/  
    var noms=document.getElementById('name').value;
    var emails=document.getElementById('email').value;
    var satiss=document.getElementById('satis').value;
    var coachs=document.getElementById('coach').value;
    var messages=document.getElementById('message').value;

    html="<div class= col-md-12 text-center'>";
        html+="<div class='alert alert-success' role='alert'>";
            html+="<h2 class='alert-heading'>"+noms+"</h2>";
            html+="<p> "+emails+"</p>";
            html+="<p>"+satiss+"</p>";
            html+="<p>"+coachs+"</p>";
            html+="<p>"+messages+"</p>";
        html+="</div>";
    html+="</div>";

    alert(html);
    document.getElementById('info').innerHTML=html;

/*        $(".info").append(html);
*/
        

}

