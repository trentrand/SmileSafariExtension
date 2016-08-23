var smileURL = 'smile.amazon.com'; // Amazon Smile Redirection URL
if (window.location.hostname.startsWith('smile', 0) == false) {
    window.location.hostname = smileURL;
}