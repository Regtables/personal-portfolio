import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "public", "cv.pdf");
    const fileName = "Reghardt Pienaar CV.pdf";

    const fileStream: Readable = fs.createReadStream(filePath);

    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Reghardt Pienaar CV.pdf"',
    });

    const readableStream = new ReadableStream({
      start(controller) {
        fileStream.on("data", (chunk) => {
          controller.enqueue(chunk);
        });

        fileStream.on("end", () => {
          controller.close();
        });

        fileStream.on("error", (err) => {
          controller.error(err);
        });
      },
    });

    return new NextResponse(readableStream, {
      headers,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
