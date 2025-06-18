import { NextResponse } from "next/server";

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

export async function POST(req) {
  const body = await req.json();

  return NextResponse.json({
    message: "Book is successfully created!",
    bodyData: body,
  });
}
