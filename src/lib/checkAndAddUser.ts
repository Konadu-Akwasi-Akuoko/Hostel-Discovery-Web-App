import { client } from "@/contracts/client";
import { store } from "@/store/store";
import { setUserData } from "@/store/userSlice";

// !!!!!!!!
// TODO: Fix the error of the function name mismatch in the function calling
// TODO: at @file: SingedInButton.tsx

// Check to see if the user details is in the database
export async function checkDataInDB(
  name: string,
  email: string,
  picture: string
) {
  try {
    const response = await fetch("/api/user/get", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        picture: picture,
      }),
    });
    const data = await response.json();
    console.log(data);
    // Handle the response data
    if (data) {
      console.log(data);
      store.dispatch(
        setUserData({
          name: name,
          email: email,
          image: picture,
          isLoggedIn: true,
          isManager: true,
        })
      );
      console.log("Is manager set to true");
    }
  } catch (e) {
    console.error("Could not fetch data:", e);
  }
}
