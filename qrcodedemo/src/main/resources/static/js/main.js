

function onScanSuccess(qrCodeMessage) {
    window.location.href =
            "http://localhost:8080/"
            + qrCodeMessage;
}

function onScanError(errorMessage) {
    //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", 
        {fps: 10, qrbox: {width: 250, height: 250}}, 
        false);

function showScanner() {
    document.getElementById("camera").style.display = "flex";
    document.getElementById("button").style.display = "none";
    html5QrcodeScanner.render(onScanSuccess, onScanError);
}
            