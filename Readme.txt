   // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        os = "sms:+919171547917?body=" + msg;

    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "sms:+919171547917&body=" + msg;

    }
//Android
    if (/android/i.test(userAgent)) {
        os = "sms:+919171547917?body=" + msg;

    };
   <!-- Original Website key Goodnightfabrics.com -->
                        <!-- <div class="g-recaptcha" data-sitekey="6LfqRGwUAAAAAGDkFTTjNJ8qwf2ryyaIRTJHUv_F"></div> -->
                        <!-- AWS website s3-bucket Key -->
                        <!-- <div class="g-recaptcha" data-sitekey="6LfxwIIUAAAAANQZl60OVDkHYK1aUihOymSkAkhb"></div> -->                     
                      
