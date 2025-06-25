import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

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

//Update student Detail
// export async function PUT(req, { params }) {
//   try {
//     const studentId = parseInt(params.id);
//     const body = await req.json();
//     const validateData = await schema.validate(body, {
//       abortEarly: false,
//       stripUnknown: true,
//     });
//     await prisma.student.update({
//       where: { id: studentId },
//       data: validateData,
//     });

//     return NextResponse.json({
//       message: "Student is successfully created!",
//       studentId,
//       bodyData: body,
//     });
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       return NextResponse.json(
//         {
//           message: "Validation Failed",
//           errors: error.inner.map((e) => ({
//             path: e.path,
//             message: e.message,
//           })),
//         },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       {
//         message: "Unexpected error",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

//Delete student Detail
export async function DELETE(req, { params }) {
  try{
     const studentId = parseInt(params.id);
     await prisma.student.delete({
      where: {id: studentId},
});
     return NextResponse.json({
    message: "Student is successfully deleted!",
    studentId,
  });
} catch (error) {
  return NextResponse.json(
    {
      meaasge:"Student not found",
    },
    {
      status: 404,
    }
  );
}
}

 

export async function GET(req, { params }) {
  const studentId = parseInt(params.id); //get uri parama field

  //Find student in database
  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
  });
  return NextResponse.json(student);
}
