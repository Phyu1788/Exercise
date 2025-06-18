import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const studentId = params.id; //get URI parama field;
  const body = await req.json();
  return NextResponse.json({
    message: "Student is successfully created!",
    studentId,
    bodyData: body,
  });
}

export async function DELETE(req, { params }) {
  const studentId = params.id;
  return NextResponse.json({
    message: "Student is successfully deleted!",
    studentId,
  });
}

export async function GET(req, { params }) {
  const studentId = params.id;
  const student = {
    id: studentId,
    name: "Phyu",
    age: 23,
    gender: "female",
    fatherName: "U Yarzar",
    address: "Mawlamyine",
    major: "Computer Science",
  };
  return NextResponse.json(student);
}
