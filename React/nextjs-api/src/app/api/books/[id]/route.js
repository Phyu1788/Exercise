import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  published_year: yup.number().required("Pubilshed_year is required"),
});

export async function PUT(req, { params }) {
  try {
    const bookId = parseInt(params.id);
    const body = await req.json();
    const validateData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    await prisma.book.update({
      where: { id: bookId },
      data: validateData,
    });
    return NextResponse.json({
      message: "Book is successfully created!",
      bookId,
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

// export async function DELETE(req, { params }) {
//   try {
//     const bookId = parseInt(params.id);
//     await prisma.book.delete({
//       where: { id: bookId },
//     });
//     return NextResponse.json({
//       message: "Book is successfully deleted!",
//       bookId,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         meaasge: "Book not found",
//       },
//       {
//         status: 404,
//       }
//     );
//   }
// }

// export async function GET(req, { params }) {
//   const bookId = parseInt(params.id); //get uri parama field

//   //Find student in database
//   const book = await prisma.book.findUnique({
//     where: {
//       id: bookId,
//     },
//   });
//   return NextResponse.json(book);
// }
