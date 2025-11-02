package ssytems_mb.backend.util;

public class EmailTemplateUtil {

    public static String getContactTemplate(String name, String email,
                                            String phone, String message) {
        return String.format("""
            <html>
            <body style="font-family: Arial, sans-serif;">
                <h2>Yeni Əlaqə Mesajı</h2>
                <p><strong>Ad:</strong> %s</p>
                <p><strong>Email:</strong> %s</p>
                <p><strong>Telefon:</strong> %s</p>
                <p><strong>Mesaj:</strong> %s</p>
            </body>
            </html>
            """, name, email, phone, message);
    }

    public static String getBookingTemplate(String name, String service,
                                            String date, String time) {
        return String.format("""
            <html>
            <body style="font-family: Arial, sans-serif;">
                <h2>Yeni Sifariş</h2>
                <p><strong>Müştəri:</strong> %s</p>
                <p><strong>Xidmət:</strong> %s</p>
                <p><strong>Tarix:</strong> %s</p>
                <p><strong>Vaxt:</strong> %s</p>
            </body>
            </html>
            """, name, service, date, time);
    }
}

