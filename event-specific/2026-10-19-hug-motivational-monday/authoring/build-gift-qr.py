from pathlib import Path
import qrcode

url = "https://go.sstb.ai/hug2026"
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=16, border=4)
qr.add_data(url)
qr.make(fit=True)
qr.make_image(fill_color="black", back_color="white").save(
    Path(__file__).resolve().parents[1] / "assets/attendee-pass-qr.png"
)
