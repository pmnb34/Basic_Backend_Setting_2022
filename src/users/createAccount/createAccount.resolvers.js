import client from "../../client";
import bcrypt from "bcrypt";

export default {
    Mutation: {
        createAccount: async (_, { firstName, lastName, userName, email, password }) => {
            try {
                const existAccount = await client.user.findFirst({
                    where: {
                        OR: [
                            { userName },
                            { email },
                        ]
                    }
                })
                if (existAccount) {
                    throw new Error("Already Exist Account")
                }
                const hashPassword = await bcrypt.hash(password, 10);
                await client.user.create({
                    data: {
                        userName,
                        email,
                        firstName,
                        lastName,
                        password: hashPassword,
                    }
                });
                return {
                    result: true
                }
            } catch (e) {
                return {
                    result: false,
                    error: "False Create Account."
                }
            }

        }
    }
}