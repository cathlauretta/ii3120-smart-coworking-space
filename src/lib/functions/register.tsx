import { registerAndCreateAccount } from "@/services/auth";

export async function register(email: string, fName: string, pass: string) {
    return (
    registerAndCreateAccount(
        { email: email, full_name: fName, phone_number: "00800813500" },
        pass
    ));
}
