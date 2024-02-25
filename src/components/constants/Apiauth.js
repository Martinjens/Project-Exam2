import { LOGIN_URL } from "./api.js";

export async function login(email, password) {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to login");
  }
}
