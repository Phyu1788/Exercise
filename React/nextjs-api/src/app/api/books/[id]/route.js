import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  public_year: yup.string().required("Pubilsh_year is required"),
});

export async function PUT(req, { params }) {
  try {
    const studentId = params.id; //get URI parama field;
    const body = await req.json();
    await schema.validate(body, { abortEarly: false }); // Call Validation

    return NextResponse.json({
      message: "Student is successfully created!",
      studentId,
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

export async function DELETE(req, { params }) {
  const bookId = params.id;
  return NextResponse.json({
    message: "Book is successfully deleted!",
    bookId,
  });
}

export async function GET(req, { params }) {
  const bookId = params.id;
  const book = {
    id: bookId,
    title: "Myanmar",
    author: "Kelvin",
    public_year: 2001,
  };
  return NextResponse.json(book);
}
