import connectDB from "@/lib/connection";
import users from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();
    const { mail, pwd } = await request.json();
    if (!mail)
      return NextResponse.json({ error: "Empty Fields" }, { status: 400 });

    if (!pwd)
      return NextResponse.json({ error: "Empty Fields Pwd" }, { status: 400 });

    const user = await users.findOne({ mail });
    if (user) {
      const ispwd = await users.findOne({ pwd });
      if (!ispwd)
        return NextResponse.json({ msg: "Incorrect Values!" }, { status: 400 });
    } else
      return NextResponse.json({ msg: "Incorrect Values!" }, { status: 400 });

    const token = jwt.sign(
      {
        mail: mail,
        pwd: pwd,
      },
      process.env.secret_key,
      { expiresIn: "30d" }
    );

    return NextResponse.json(
      {
        msg: "Login Success!",
        name: user.name,
        mobile: user.mobile,
        mail: user.mail,
        _id: user._id,
        token: token,
      },
      { token },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
