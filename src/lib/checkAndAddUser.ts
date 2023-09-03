import { client } from "@/contracts/client";
import { store } from "@/store/store";
import { setUserData } from "@/store/userSlice";

// TODO: Fix the error of the function name mismatch in the function calling
// TODO: at @file: SingedInButton.tsx

// Check to see if the user details is in the database
export async function checkDataInDB(
  name: string,
  email: string,
  picture: string
) {
  // Use the fetch api here but if you have a component that needs data use the rtk query
  const { body, status } = await client.getUser({
    body: {
      name: name,
      picture: picture,
      email: email,
    },
  });
  if (body && status == 200) {
    store.dispatch(
      setUserData({
        id: body.id,
        name: body.name,
        image: body.picture,
        email: body.email,
        loggedIn: true,
      })
    );
  }
  // console.log(body);
  // If the return type is false, add user to database
  if (!body) {
    const { body, status } = await client.addUser({
      body: {
        name: name,
        email: email,
        picture: picture,
      },
    });
    // console.log("Added this: \n" + body);
    if (body && status == 200) {
      store.dispatch(
        setUserData({
          id: body.id,
          name: body.name,
          image: body.picture,
          email: body.email,
          loggedIn: true,
        })
      );
    }
  }
}
