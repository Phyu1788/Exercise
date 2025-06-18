import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const studentID = params.id; //get URI parama field;
  const body = await req.json();
  return NextResponse.json({
    message: "Student is successfully created!",
    studentID,
    bodyData:body,
  });
}
