import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
<<<<<<< HEAD
      from: "Acme <onboarding@resend.dev>",
      //for deployment there is another email
=======
      from: "BalvantPortfolio@balvant.shop",
>>>>>>> 939d15789b6e7980eb172e3403e4e6172d6a4ecc
      to: email,
      subject: "Balvant Portfolio || Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
