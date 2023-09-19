import connectToMongoDB from '/libs/mongodb';
import { NextResponse } from 'next/server';
import Todo from '/models/todo';

export async function POST(req) {
  const { title, description } = await req.json();
  await connectToMongoDB();
  await Todo.create({ title, description });
  return NextResponse.json({ message: "Todo Created." }, { status: 201 });
}

export async function GET() {
  await connectToMongoDB();
  const todos = await Todo.find().sort({ createdAt: -1 });
  return NextResponse.json({ todos });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectToMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo Deleted" }, { status: 200 });
}
