import { registerAndCreateAccount } from "@/services/auth";

export async function register(email: string, fName: string, pass: string) {
    const response = await fetch(`@/api/auth/register/route`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReportData),
      });
}