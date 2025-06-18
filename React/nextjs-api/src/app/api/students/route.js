import { NextResponse } from "next/server";

const StudentData = [
  {
    id: 1,
    name: "Su Su",
    age: 17,
    address: "Mawlamyine",
    major: "COmputer Science",
  },
  {
    id: 2,
    name: "Hla Hla",
    age: 17,
    address: "Mawlamyine",
    major: "COmputer Science",
  },
  {
    id: 2,
    name: "Hla Hla",
    age: 17,
    address: "Mawlamyine",
    major: "COmputer Science",
  },
];

export async function GET() {
  return NextResponse.json(StudentData);
}

export async function POST(req) {
    const body  = await req.json();
  
    return NextResponse.json({message:"Student is successfully created!",
        bodyData: body,
    });
}
