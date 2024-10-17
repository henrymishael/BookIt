"use server";
import { createAdminClient, createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function destroySession(previousState, formData) {
  // Retrieve the session cookie
  const sessionCookie = cookies().get("appwrite-session");

  if (!sessionCookie) {
    return {
      error: "No session cookie found",
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);

    // Delete current session
    await account.deleteSession("current");

    // Clear session cookie
    cookies().delete("appwrite-session");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Authentication Error", error);
  }
  return {
    error: "Invalid Credentials",
  };
}

export default destroySession;
