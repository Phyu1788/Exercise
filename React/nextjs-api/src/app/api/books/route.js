import { NextResponse } from "next/server";
import * as yup from "yup";

const BookData = [
  {
    id: 1,
    title: "Programming",
    author: "Kate",
    public_year: 2000,
  },
  {
    id: 2,
    title: "English",
    author: "Kelvin",
    public_year: 2001,
  },
  {
    id: 3,
    title: "Science",
    author: "Jon",
    public_year: 2000,
  },
];

export async function GET() {
  return NextResponse.json({ BookData });
}
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  public_year: yup.string().required("Pubilsh_year is required"),
});

//create student API
export async function POST(req) {
  try {
    const body = await req.json(); //Get request body date from client
    await schema.validate(body, { abortEarly: false }); // call validation schems

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

// export async function POST(req) {
//   const body = await req.json();

//   return NextResponse.json({
//     message: "Book is successfully created!",
//     bodyData: body,
//   });
// }
