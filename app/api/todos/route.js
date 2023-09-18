import connectToMongoDB from '/libs/mongodb';
import { NextResponse } from 'next/server';
import Todo from '/models/todo';

export async function POST(request) {
  const { title, description } = await request.json();
  await connectToMongoDB();
  await Todo.create({ title, description });
  return NextResponse.json({ message: "Todo Created" }, { status: 201 });
}

export async function GET() {
  await connectToMongoDB();
  const todos = await Todo.find();
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo Deleted" }, { status: 200 });
}
