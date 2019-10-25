// contact form
$("#btn-contact").on('click', function() {
    var template = `
    <div id="contact-form" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
            <form id="form" method="post" role="form" >
    <div class="row">
            <div class="col-md-6">
            <span class="text-muted">All fields are required. If you are a user looking for support please use the <a href="https://forum.manjaro.org/" target="_blank">forum</a>.</span>
            <br>
            <br>
            <label for="name">Name</label>
            <input id="name" type="text" name="name" class="form-control" placeholder="Please enter your Name" required="required">   
            <br>
    </div>
        <div class="g-recaptcha col-md-6" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
    </div>
    <div class="row">
        
        <div class="col-md-6">
            <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" name="subject" class="form-control" required="required">
                    <option value="Report Hardware Issue">Report Hardware Issue</option>
                    <option value="Provide Feedback">Provide Feedback</option>
                    <option value="Hardware Inquire">Hardware Inquire</option>
                    <option value="Software Inquire">Software Inquire</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" class="form-control" placeholder="Please enter your Email" required="required">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" class="form-control" placeholder="Leave a Message, We will get back to you as soon as we can." rows="4" required="required"></textarea>
            </div>
        </div>
        <div class="col-md-12">
            <input type="submit" class="btn btn-success btn-send" value="Send">
        </div>
    </div>
    <div class="row">
       
    </div>
</form>

</div></div>
</div>
    
    `
$( "body" ).append( template );
let script = document.createElement('script');
script.src = "https://www.google.com/recaptcha/api.js";
document.head.append(script);
$('#form').submit(function(event) {
    event.preventDefault();
        var formData = $('#form').serialize();
        $.ajax({
            type        : 'POST', 
            url         : 'http://localhost:1314/contact-form.php', 
            data        : formData, 
            dataType    : 'json',
            encode      : true
        }).done(function(data) {
            if (data['type'] === 'success') {
                $('#contact-form, .modal-backdrop').hide().remove();
            }
            alert(data['message']);
            console.log(data);
            });
        });
});