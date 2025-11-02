package ssytems_mb.backend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.email.from}")
    private String fromEmail;

    @Value("${app.email.to}")
    private String toEmail;

    public void sendContactEmailToCompany(String name, String email, String phone, String message) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Yeni Əlaqə Mesajı - " + name);
            helper.setText(buildContactEmailTemplate(name, email, phone, message), true);

            mailSender.send(mimeMessage);
            log.info("Contact email göndərildi: {}", email);
        } catch (MessagingException e) {
            log.error("Email xətası: ", e);
            throw new RuntimeException("Email göndərilmədi");
        }
    }

    public void sendBookingEmailToCompany(String name, String email, String phone,
                                          String serviceName, String date, String time) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Yeni Sifariş - " + serviceName);
            helper.setText(buildBookingEmailTemplate(name, email, phone, serviceName, date, time), true);

            mailSender.send(mimeMessage);
            log.info("Booking email göndərildi: {}", email);
        } catch (MessagingException e) {
            log.error("Email xətası: ", e);
            throw new RuntimeException("Email göndərilmədi");
        }
    }

    public void sendConfirmationEmailToCustomer(String name, String email, String serviceName,
                                                String date, String time) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(email);
            helper.setSubject("Sifarişiniz Təsdiqləndi - SSYSTEMS MB");
            helper.setText(buildConfirmationTemplate(name, serviceName, date, time), true);

            mailSender.send(mimeMessage);
            log.info("Təsdiq emaili göndərildi: {}", email);
        } catch (MessagingException e) {
            log.error("Email xətası: ", e);
        }
    }

    private String buildContactEmailTemplate(String name, String email, String phone, String message) {
        return String.format("""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #0d5c4f; color: white; padding: 20px; text-align: center; }
                    .content { background: #f9f9f9; padding: 20px; }
                    .field { margin: 15px 0; }
                    .label { font-weight: bold; color: #0d5c4f; }
                    .value { padding: 10px; background: white; border-left: 3px solid #0d5c4f; margin-top: 5px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header"><h2>🔔 Yeni Əlaqə Mesajı</h2></div>
                    <div class="content">
                        <div class="field">
                            <div class="label">👤 Ad:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">📧 Email:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">📞 Telefon:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">💬 Mesaj:</div>
                            <div class="value">%s</div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
            """, name, email, phone, message);
    }

    private String buildBookingEmailTemplate(String name, String email, String phone,
                                             String service, String date, String time) {
        return String.format("""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #0d5c4f; color: white; padding: 20px; text-align: center; }
                    .content { background: #f9f9f9; padding: 20px; }
                    .field { margin: 15px 0; }
                    .label { font-weight: bold; color: #0d5c4f; }
                    .value { padding: 10px; background: white; border-left: 3px solid #0d5c4f; margin-top: 5px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header"><h2>📅 Yeni Sifariş</h2></div>
                    <div class="content">
                        <div class="field">
                            <div class="label">🔧 Xidmət:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">👤 Müştəri:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">📧 Email:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">📞 Telefon:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">📅 Tarix:</div>
                            <div class="value">%s</div>
                        </div>
                        <div class="field">
                            <div class="label">🕐 Vaxt:</div>
                            <div class="value">%s</div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
            """, service, name, email, phone, date, time);
    }

    private String buildConfirmationTemplate(String name, String service, String date, String time) {
        return String.format("""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #0d5c4f; color: white; padding: 30px; text-align: center; }
                    .content { padding: 30px; background: #f9f9f9; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header"><h2>✅ Sifarişiniz Təsdiqləndi!</h2></div>
                    <div class="content">
                        <p>Hörmətli <strong>%s</strong>,</p>
                        <p>Sifarişiniz uğurla qəbul edildi!</p>
                        <p><strong>Xidmət:</strong> %s</p>
                        <p><strong>Tarix:</strong> %s</p>
                        <p><strong>Vaxt:</strong> %s</p>
                        <p>Komandamız təyin edilmiş vaxtda sizinlə əlaqə saxlayacaq.</p>
                        <p><strong>Əlaqə:</strong><br>
                        📞 (907) 555-0101<br>
                        📧 nvt.lsst.nute@gmail.com</p>
                    </div>
                </div>
            </body>
            </html>
            """, name, service, date, time);
    }
}