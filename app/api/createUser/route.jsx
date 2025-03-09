import connectDB from "@/lib/connection";
import users from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const { name, mail, mobile, pwd } = await request.json();

    const exsistingUser = await users.findOne({ $or: [{ mail }, { mobile }] });
    if (exsistingUser) {
      return NextResponse.json(
        {
          message: "User already exsists! Try Logging In!",
          user: exsistingUser._id,
        },
        { status: 400 }
      );
    }
    const newUser = new users({ name, mail, mobile, pwd });
    await newUser.save();
    console.log("Saved Success");
    return NextResponse.json(newUser, { _id: newUser._id }, { status: 201 });
  } catch (error) {
    console.log("Failed");
    console.log(error);
  }
}
