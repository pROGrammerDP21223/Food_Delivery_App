import { connectionSTR } from "@/app/lib/db";
import { restaurantschema } from "@/app/lib/restaurant_model";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";
export async function GET() {
    await mongoose.connect(connectionSTR, { useNewUrlParser: true });
    const data = await restaurantschema.find()
    console.log(data);
    return NextResponse.json({ result: data })
}
export async function POST(request) {
    let payload = await request.json();
    await mongoose.connect(connectionSTR, { useNewUrlParser: true });
    let restaurants = new restaurantschema(payload)
    const result = await restaurants.save();
    console.log(payload);
    return NextResponse.json({ result,success:true })
}


