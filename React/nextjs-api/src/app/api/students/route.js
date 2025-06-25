import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

//Get Students List API
export async function GET() {
  const students = await prisma.student.findMany();
  return NextResponse.json(students);
}

//Validation Schema to validat client request.
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  father_name: yup.string().required("Father Name is required"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid Gender"),
  age: yup.number().required("Age is required"),
  dob: yup.date().required("Birthday is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  major: yup.string().required("Major is required"),
});

//create student API
export async function POST(req) {
  try {
    const body = await req.json(); //Get request body date from client
    const validateData = await schema.validate(body, { abortEarly: false }); // call validation schems
    const student = await prisma.student.create({
      data: validateData,
    });

    return NextResponse.json({
      message: "Student is successfully created!",
      bodyData: body,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation Failed",
          errors: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
