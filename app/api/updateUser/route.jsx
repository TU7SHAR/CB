import connectDB from "@/lib/connection";
import users from "@/models/users";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { oldpwd, _id, npwd: pwd, name } = body;

    const isId = await users.findOne({ _id });
    if (isId) {
      const ispwd = await users.findOne({ _id, pwd: oldpwd });
      if (!ispwd)
        return NextResponse.json(
          { msg: "Old Password Incorrect!" },
          { status: 400 }
        );
    }

    const updateUser = await users.findByIdAndUpdate(_id, {
      ...(name && { name }),
      ...(pwd && { pwd }),
    });

    if (!updateUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated successfully!", updateUser },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
