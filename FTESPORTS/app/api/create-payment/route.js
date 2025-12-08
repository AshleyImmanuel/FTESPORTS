import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
    try {
        const { amount } = await request.json();

        // Initialize Razorpay
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy',
            key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret',
        });

        // Create order
        const order = await razorpay.orders.create({
            amount: amount * 100, // Convert to paise
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
            notes: {
                purpose: 'Final Touch Esports Support',
            },
        });

        return NextResponse.json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error('Payment order creation failed:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
