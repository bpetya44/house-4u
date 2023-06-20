import {NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';


export async function POST(
    request: Request,
){
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();

    }

    const body = await request.json();
    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price,
    } = body;

    // Check if all fields are filled
    //not required to do this here, as we have already done this in the client side
    Object.keys(body).forEach((key) => {
        if(!body[key]){
            return NextResponse.error();
        }
    });

    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            guestCount,
            locationValue : location.value,
            price: parseInt(price),
            userId: currentUser.id,
        },  
    })

    return NextResponse.json(listing);

}