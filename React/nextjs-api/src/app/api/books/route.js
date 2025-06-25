import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET() {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  published_year: yup.number().required("Pubilshed_year is required"),
});

//create student API
export async function POST(req) {
  try {
    const body = await req.json(); //Get request body date from client
    const validateData = await schema.validate(body, { abortEarly: false }); // call validation schems
    const book = await prisma.book.create({
      data: validateData,
    });

    return NextResponse.json({
      message: "Book is successfully created!",
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



