import connectToMongoDB from '/libs/mongodb';
import { NextResponse } from 'next/server';
import Todo from '/models/todo';

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectToMongoDB();
  await Todo.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Todo Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const todos = await Todo.findOne({ _id: id });
  return NextResponse.json({ todos }, { status: 200 });
}
